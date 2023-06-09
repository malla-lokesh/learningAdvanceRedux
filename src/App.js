import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import React, { useEffect } from 'react';
import { uiActions } from './store/UI-Slice';
import Notification from './components/UI/Notification';
import { cartActions } from './store/CartReducer';

let isInitial = true;

function App() {
  const toggleCart = useSelector(state => state.cart.toggleCart);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const getCartData = async () => {
      const response = await fetch('https://expensetrackerstorage-default-rtdb.firebaseio.com/cart.json');
      if(response.ok) {
        return response.json();
      }
    }

    getCartData().then(data => {
      const products = data.items;
      products.map(product => {
        dispatch(cartActions.addItemToCart(product));
        return null;
      })
    });
  }, [])

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending',
        message: 'Sending data to backend'
      }))
      const response = await fetch('https://expensetrackerstorage-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        
      }
      
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'sent',
        message: 'sent successfully'
      }))
    }

    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending data to backend FAILED!'
      }))
    });
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
