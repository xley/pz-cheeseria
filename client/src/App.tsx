import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
// Components
import Item from './Cart/Item/Item';
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RestoreIcon from '@material-ui/icons/Restore';
import Badge from '@material-ui/core/Badge';
import { Toolbar, Typography } from '@material-ui/core';
import DialogItem from './Dialog/DialogItem/DialogItem';
import PurchasesList from './Purchases/PurchasesList/PurchasesList';
import { calculateCartTotalAmount, calculateCartTotalPrice, createUuid } from './helpers/helpers';
// Styles
import { Wrapper, StyledButton, StyledAppBar, HeaderTypography } from './App.styles';
// Types
export type CartItemType = {
  id: number;
  category: string;
  colour: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export type PurchaseType = {
  id?: string,
  userId: string,
  totalPrice: number,
  totalItems: number,
  cheeses: CartItemType[],
  createdAt?: Date,
  updatedAt?: Date
}

export type SnackProps = {
  message: string,
  type: Color
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = () => {
  const [cheeses, setCheeses] = useState([] as CartItemType[])
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItemType | undefined>();
  const [error, setError] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackContent, setSnackContent] = useState<SnackProps>({ message: '', type: 'info' });
  const [cookies, setCookie] = useCookies(['user']);
  const [purchases, setPurchases] = useState<PurchaseType[]>([]);
  const [purchasesOpen, setPurchasesOpen] = useState(false);

  useEffect(() => {
    getCheeses();
    let userId = cookies.user;
    if (!userId) {
      console.log('Reset userId');
      userId = createUuid();
      setCookie('user', userId, { path: '/' });
    }
    fetchPurchases(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCheeses = async () => {
    await axios.get<CartItemType[]>(`api/cheeses`).then((response) => {
      response.data.forEach(cheese => {
        cheese.amount = 1;
      });
      setCheeses(response.data);
    }, (error) => {
      console.log('error', error);
      handleSnack('An Error Occured Retrieving Cheese!', 'error')
      setError(true);
    });
  }

  const fetchPurchases = async (userId: string) => {
    await axios.get<PurchaseType[]>(`api/purchases/${userId}`).then((response) => {
      setPurchases(response.data);
    }, (error) => {
      console.log('error', error);
      handleSnack('An Error Occured Retrieving Purchases!', 'error')
      setError(true);
    });
  };

  const createPurchase = async (purchase: PurchaseType) => {
    await axios.post<PurchaseType[]>(`api/purchases/create`, purchase).then((_response) => {
      handleSnack('Successfully Purchases Items!', 'success');
      fetchPurchases(cookies.user);
    }, (error) => {
      console.log('error', error);
      handleSnack('An Error Occured Creating Purchase!', 'error')
      setError(true);
    });
  };

  const handleCloseSnack = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  const handleAmountChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    cheeses.forEach(cheese => {
      if (cheese.id === id) {
        cheese.amount = Number(event?.target.value);
      }
    });
    setCheeses([...cheeses]);
  };

  const handleCartAmountChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCartItems(prev => {
      return prev.map(item =>
        item.id === id
          ? { ...item, amount: Number(event?.target.value) }
          : item
      );
    });

    cheeses.forEach(cheese => {
      if (cheese.id === id) {
        cheese.amount = Number(event?.target.value);
      }
    });
    setCheeses([...cheeses]);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: clickedItem.amount + item.amount }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: clickedItem.amount }];
    });
    if (!cartOpen) {
      handleSnack('Successfully Added to Cart!', 'success');
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          return ack;
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleItemSelect = (item: CartItemType | undefined) => (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleSnack = (message: string, type: Color) => {
    setSnackContent({ message, type });
    setOpenSnack(true);
  }

  const handlePurchase = async () => {
    // Refactor cart Items into purchase type
    let userId = cookies.user;
    if (!userId) {
      console.log('Reset userId');
      userId = createUuid();
      setCookie('user', userId, { path: '/' });
    }
    const purchase: PurchaseType = {
      userId,
      totalPrice: calculateCartTotalPrice(cartItems),
      totalItems: calculateCartTotalAmount(cartItems),
      cheeses: cartItems
    };
    // Push purchase to Purchases
    createPurchase(purchase);
    // clear cart items
    setCartItems([] as CartItemType[]);
  }

  const handlePurchasesOpen = () => {
    fetchPurchases(cookies.user);
    setPurchasesOpen(true);
  }

  if (error) return <div>Something went wrong ...</div>;

  return (

    <Wrapper>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <StyledButton
              onClick={() => handlePurchasesOpen()}
              data-cy='recent-purchases-button'>
              <Badge badgeContent={purchases?.length}
                color='error'
                data-cy="purchases-badge-count">
                <RestoreIcon />
              </Badge>
              <Typography variant="subtitle2">
                Recent Purchases
              </Typography>
            </StyledButton>

            <HeaderTypography variant="h3" noWrap>
              Welcome to Patient Zero's Cheeseria
            </HeaderTypography>

            <StyledButton
              onClick={() => setCartOpen(true)}
              data-cy='shopping-cart-button'>
              <Badge
                badgeContent={cartItems?.length}
                color='error'
                data-cy="shopping-cart-badge-count">
                <AddShoppingCartIcon />
              </Badge>

              <Typography variant="subtitle2">
                Cart
              </Typography>
            </StyledButton>

          </Grid>
        </Toolbar>
      </StyledAppBar>

      <Drawer anchor='left'
        onClose={() => setPurchasesOpen(false)}
        open={purchasesOpen} data-cy='purchases-drawer'>
        <PurchasesList items={purchases} />
      </Drawer>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} data-cy='cart-drawer'>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          onPurchase={handlePurchase}
          onClose={() => setCartOpen(false)}
          handleCartAmountChange={handleCartAmountChange}
        />
      </Drawer>

      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        {selectedItem && <DialogItem item={selectedItem} handleAddToCart={handleAddToCart} handleAmountChange={handleAmountChange} />}
      </Dialog>

      <Grid container spacing={3}>
        {cheeses?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} handleItemSelect={handleItemSelect} />
          </Grid>
        ))}
      </Grid>

      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity={snackContent.type}>
          {snackContent.message}
        </Alert>
      </Snackbar>
    </Wrapper>

  );
};

export default App;
