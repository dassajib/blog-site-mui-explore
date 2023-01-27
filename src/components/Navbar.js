import { Mail, NotificationAdd, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Navbar = () => {

    const [openUserBox, setOpenUserBox] = useState(false);

    const CustomToolbar = styled(Toolbar)({
        display : "flex",
        justifyContent : "space-between"
    });

    const CustomSearch = styled("div")(({theme}) => ({
        backgroundColor : "white",
        padding : "0 10px",
        width : "50%",
        borderRadius : theme.shape.borderRadius
    }));

    const CustomIcon = styled(Box)(({theme}) => ({
        display : "none",
        alignItems : "center",
        gap : "20px",
        [theme.breakpoints.up("sm")]:{
            display : "flex"
        }
    }));

    const UserBox = styled(Box)(({theme}) => ({
        display : "flex",
        alignItems : "center",
        gap : "20px",
        [theme.breakpoints.up("sm")]:{
            display : "none"
        }
    }))

    

    return (
        <AppBar position="sticky">
            <CustomToolbar>
                <Typography variant="h5" sx={{ display: {xs:"none",sm:"block"}}}>
                    Sajib's Homepage 
                </Typography>
                <Pets sx={{ display: {xs:"block",sm:"none"}}}></Pets>

                <CustomSearch>
                    <InputBase placeholder="Search..."></InputBase>
                </CustomSearch>

                <CustomIcon>
                    <Badge badgeContent={4} color="error">
                        <Mail></Mail>
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <NotificationAdd></NotificationAdd>
                    </Badge>

                    <Avatar
                        onClick = {e => setOpenUserBox(true)} 
                        sx={{height: "30", width: "30"}} 
                        alt="Remy Sharp" 
                        src="/static/images/avatar/1.jpg" />
                </CustomIcon>

                <UserBox onClick = {e => setOpenUserBox(true)}>
                    <Avatar 
                        sx={{height: "30", width: "30"}} 
                        alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography variant="span">Sajib Das</Typography>
                </UserBox>
            </CustomToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={openUserBox}
                onClose = {e => setOpenUserBox(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
        </AppBar>
    );
};

export default Navbar;