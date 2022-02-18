import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '../../Styles/container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HeaderWrapper from "./HeaderWrapper";
import { FaGlobe } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
const pages = ['Home', 'Components', 'Pages','Documentation'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <Container className={"mx-auto"}>
            <HeaderWrapper>
                <AppBar position="static">
                    <Container maxWidth="xl" className={"container mx-auto"}>
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                className={"logo flex items-center"}
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                ZONE <div><span>v1.2</span><span></span></div>
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
                                ZONE
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <IconButton size="large" aria-label="search" color="inherit">
                                <GoSearch />
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="display more actions"
                                edge="end"
                                color="inherit"
                                fontSize="10px"
                            >
                                <FaGlobe />
                            </IconButton>
                            <div className={"ml-5 flex gap-5"}>
                                <Button variant="outlined">Join Us</Button>
                                <Button variant="contained">Buy Now</Button>
                            </div>

                        </Toolbar>
                    </Container>
                </AppBar>
            </HeaderWrapper>
        </Container>
    );
};
export default Header;
