import { AddHome, AssignmentInd, Diversity1, FirstPage, Groups, ModeNight, SettingsApplications } from '@mui/icons-material';
import { Box, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const Sidebar = () => {
    return (
        <Box flex={1} p={2} 
            sx={{display:{xs:"none",sm:"block"}}}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <AddHome></AddHome>
                            </ListItemIcon>
                            
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <FirstPage></FirstPage>
                            </ListItemIcon>
                            
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <Groups></Groups>
                            </ListItemIcon>
                            
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <Diversity1></Diversity1>
                            </ListItemIcon>
                            
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <SettingsApplications></SettingsApplications>
                            </ListItemIcon>
                            
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <AssignmentInd></AssignmentInd>
                            </ListItemIcon>
                            
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemIcon>
                                <ModeNight></ModeNight>
                            </ListItemIcon>
                            
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} />
                            </FormGroup>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;