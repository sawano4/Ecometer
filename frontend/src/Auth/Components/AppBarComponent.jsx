import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IoSettingsOutline } from "react-icons/io5";
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const styles = {
    appBar: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 3px 20px 1px #00000033',
    },
};

function AppBarComponent({ title }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setIsMenuOpen(false);
    };

    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: '#003049' }}>
                {isSmallScreen && (
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 700,
                            fontSize: '25px',
                            lineHeight: '24px',
                            textAlign: 'center',
                            color: '#003049',
                            margin: '0 20px', 
                        }}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box>
                <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user" 

                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                    >
                        <IoSettingsOutline style={{ color: '#1F263E', marginRight:{ md :' 41px' , xs : '21px' } }} />
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                    >
                        <FontAwesomeIcon icon={faUserCircle} style={{ color: '#F68002' }} />
                    </IconButton>
                    
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl && isMenuOpen)}
                        onClose={handleMenuClose}
                    >
                        {isSmallScreen ? (
                            settings.map((setting, index) => (
                                <MenuItem key={index} onClick={handleMenuClose}>
                                    {setting}
                                </MenuItem>
                            ))
                        ) : (
                            settings.map((setting, index) => (
                                <MenuItem key={index} onClick={handleMenuClose}>
                                    {setting}
                                </MenuItem>
                            ))
                        )}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;
