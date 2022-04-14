import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
// import { blue, green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Style from './MyNabVar.module.css';

// const pages = ['Cocina', 'Ficción', 'Niños'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <>
            <nav>
                <img src="./Assets/logolibros.jpg" alt="" />
                <ul>
                    <Link style={{ margin: '0px 10px' }} to="/">Home</Link>
                    <Link style={{ margin: '0px 10px' }} to="/category/Comedy">Comedy</Link>
                    <Link style={{ margin: '0px 10px' }} to="/category/Horror">Horror</Link>
                    <Link style={{ margin: '0px 10px' }} to="/category/Documentary">Documentary</Link>
                    <Link style={{ margin: '0px 10px' }} to="/category/Drama">Drama</Link>
                    <Link style={{ margin: '0px 10px' }} to="/category/Romance">Romance</Link>
                    <Link style={{ margin: '0px 10px' }} to="/category/Thriller">Thriller</Link>
                </ul>
                <CartWidget cant={0} />
            </nav>
        </>
    );
};
export default ResponsiveAppBar;