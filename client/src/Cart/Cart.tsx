import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import React from 'react';
import { Button } from '@material-ui/core';
import { calculateCartTotalPrice } from '../helpers/helpers';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  onPurchase?: () => void;
  onClose: () => void;
  handleCartAmountChange?: (id: number) => any;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, onPurchase, onClose, handleCartAmountChange }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p data-cy='cart-no-items-header'>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleCartAmountChange={handleCartAmountChange}
        />
      ))}
      <h2>Total: ${calculateCartTotalPrice(cartItems).toFixed(2)}</h2>
      <div className='buttons'>
        {cartItems.length !== 0 && onPurchase &&
          <Button
            className='button'
            size='small'
            disableElevation
            variant='contained'
            onClick={() => onPurchase()}
            data-cy='purchase-cart-button'
          >
            Purchase
          </Button>
        }
        <Button
          className='button'
          size='small'
          disableElevation
          variant='contained'
          onClick={() => onClose()}
          data-cy='close-cart-button'
        >
          Close Cart
        </Button>
      </div>
    </Wrapper>
  );
};

export default Cart;
