import React from 'react';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartReducer';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(cartActions.addItemToCart(product))
  }

  const products = props.products.map((product) => {
    return <React.Fragment key={product.id}>
      <header>
        <h3>{product.title}</h3>
        <div className={classes.price}>${product.price.toFixed(2)}</div>
      </header>
      <p>{product.description}</p>
      <div className={classes.actions}>
        <button type='button' onClick={() => {addToCartHandler(product)}}>Add to Cart</button>
      </div>
      <hr/>
    </React.Fragment>
  })

  return (
    <li className={classes.item}>
      <Card>
        {products}
      </Card>
    </li>
  );
};

export default ProductItem;
