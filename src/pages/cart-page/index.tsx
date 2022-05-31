import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';
import { cartFetchItemsAction } from '../../store/action-creators';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const itemsCount = useRootSelector(selectCartItemsCount);

  useEffect(() => {
    dispatch(cartFetchItemsAction);
  }, []);

  return (
    <Container sx={{ height: '100vh' }}>
      <Typography component="h1" variant="h2" sx={{ my: 0, mb: 5, color: 'white' }}>Cart</Typography>
      {itemsCount > 0 ? <CartPageItemGrid /> : (
        <>
          <Typography variant="h3" sx={{ mb: 3, color: 'white' }}>Your cart is empty 😒</Typography>
          <Button variant="contained" onClick={() => navigate('/shop')}>← Shop</Button>
        </>
      )}

    </Container>
  );
};

export default CartPage;
