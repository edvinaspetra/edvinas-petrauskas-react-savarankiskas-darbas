import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NumberField from '../../../components/number-field';
import { useRootDispatch, useRootSelector } from '../../../store/hooks';
import { createModifyCartItemAction } from '../../../store/action-creators';
import { selectCartItemAmountByShopItemId } from '../../../store/selectors';

type ShopPageCardActionsProps = {
  id: string,
  inStock: number,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  inStock,
}) => {
  const dispatch = useRootDispatch();
  const cartItemAmount = useRootSelector(selectCartItemAmountByShopItemId(id));
  const [amount, setAmount] = useState<number>(cartItemAmount);
  const available = inStock > 0 || cartItemAmount > 0;

  const addToCart = (): void => {
    const addToCartAction = createModifyCartItemAction(id, amount);
    dispatch(addToCartAction);
  };

  useEffect(() => {
    if (cartItemAmount !== amount) {
      addToCart();
    }
  }, [amount]);

  return (
    <Box>
      {!available && (<Typography color="error">Currently not available</Typography>)}
      <Box sx={{
        display: 'flex',
        gap: 0.5,
      }}
      >
        <NumberField
          size="small"
          sx={{ alignSelf: 'stretch' }}
          InputProps={{ sx: { height: '100%' } }}
          disabled={!available}
          min={0}
          max={inStock + cartItemAmount}
          value={amount}
          onChange={(_, newValue) => setAmount(newValue)}
          onBlur={(_, newValue) => setAmount(newValue)}
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default ShopPageCardActions;
