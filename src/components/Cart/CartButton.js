import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/CartReducer';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  }

  return (
    <button className={classes.button}
      type='button'
      onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
