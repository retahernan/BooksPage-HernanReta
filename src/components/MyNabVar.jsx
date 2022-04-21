import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Style from './MyNabVar.module.css';

const pages = ['Comedy', 'Horror', 'Documentary', 'Drama', 'Romance', 'Thriller'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src="./Assets/logolibros.jpg" alt="" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src="./Assets/logolibros.jpg" alt="" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/">Home</Link>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/category/Comedy">Comedy</Link>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/category/Horror">Horror</Link>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/category/Documentary">Documentary</Link>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/category/Drama">Drama</Link>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/category/Romance">Romance</Link>
                            <Link style={{ margin: '0px 10px', textDecoration: 'none' }} to="/category/Thriller">Thriller</Link>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>

                            <CartWidget cant={0} />

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default ResponsiveAppBar;