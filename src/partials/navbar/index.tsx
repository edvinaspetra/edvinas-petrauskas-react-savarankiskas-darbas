import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Divider,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectCartItemsCount, selectLoggedIn } from '../../store/selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectLoggedIn);
  const cartItemsCount = useRootSelector(selectCartItemsCount);

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#00000081' }}>
      <Container>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: 'space-around',
        }}
        >
          <Box>
            <NavbarLink to="/">
              <Box sx={{
                width: 25,
                height: 25,
                bgcolor: '#bc002d',
                borderRadius: 15,
                mr: 1,
              }}
              />
              Japan
            </NavbarLink>
          </Box>
          <Box>
            <NavbarLink to="/shop">Shop/Tour</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/contacts">Contacts</NavbarLink>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <NavbarLink to="/cart" sx={{ display: 'inline-flex', gap: 1 }}>
              <Badge badgeContent={cartItemsCount} color="primary">
                <ShoppingCartIcon sx={{ fontSize: 28 }} />
              </Badge>
            </NavbarLink>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: 'primary.main', alignSelf: 'stretch', ml: 2, my: 2,
              }}
            />
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
