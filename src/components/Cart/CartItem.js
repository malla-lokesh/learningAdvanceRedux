import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartReducer';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cartItems = props.items.map((product) => {
    return <React.Fragment key={product.id}>
      <header>
        <h3>{product.title}</h3>
        <div className={classes.price}>
          ${product.total.toFixed(2)}{' '}
          <span className={classes.itemPrice}>(${product.price.toFixed(2)})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{product.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => {dispatch(cartActions.removeItem(product))}}>-</button>
          <button onClick={() => {dispatch(cartActions.addItemToCart(product))}}>+</button>
        </div>
      </div>
    </React.Fragment>
  })

  return (
    <li className={classes.item}>
      {cartItems}
    </li>
  );
};

export default CartItem;
