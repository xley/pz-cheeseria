import { Grid, Input, InputAdornment, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './DialogItem.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleAmountChange: (id: number) => any;
};

const DialogItem: React.FC<Props> = ({ item, handleAddToCart, handleAmountChange }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h4" align="center">{item.title}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">Category: {item.category}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">Colour: {item.colour}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">{item.description}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Input
                    value={item.amount}
                    onChange={handleAmountChange(item.id)}
                    startAdornment={<InputAdornment position="start">Weight: </InputAdornment>}
                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    type='number'
                    name='Weight'
                    fullWidth
                    inputProps={{
                        min: 0, max: 10
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">Price: ${item.price} / kg</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" align="right">Total Price: ${(item.amount * item.price).toFixed(2)}</Typography>
            </Grid>
        </Grid>
        <Button
            onClick={() => handleAddToCart(item)}
            data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
    </Wrapper>
);

export default DialogItem;