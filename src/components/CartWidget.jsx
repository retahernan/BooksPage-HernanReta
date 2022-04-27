import React, { useContext } from 'react';
import { Context } from './Context/CarContext';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { withTheme } from '@emotion/react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -8,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 9px',
  },
}));

export default function CartWidget({cant}) {
  const {totalCart} = useContext(Context)
  return (
    <>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalCart} color="info">
        <Link to="/cart"><ShoppingCartIcon /></Link>
      </StyledBadge>
    </IconButton>
     </>
  );
}