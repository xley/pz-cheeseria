import { Input, InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart?: (clickedItem: CartItemType) => void;
  removeFromCart?: (id: number) => void;
  handleCartAmountChange?: (id: number) => any;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart, handleCartAmountChange }) => (
  <Wrapper data-cy={`cart-item-${item.id}`}>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p>$/kg: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        {handleCartAmountChange ?
          <Input
            value={item.amount}
            onChange={handleCartAmountChange(item.id)}
            startAdornment={<InputAdornment position="start">Weight: </InputAdornment>}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            type='number'
            name='Weight'
            inputProps={{
              min: 0, max: 100
            }}
          />
          : <p>Quantity: {item.amount} (kg)</p>}
        {removeFromCart && <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          <DeleteIcon />
        </Button>}
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
