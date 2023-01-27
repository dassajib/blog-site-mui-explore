import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
            <Box position="fixed" width={186}>
                <Typography fontWeight={300}>All Friends</Typography>

                <AvatarGroup total={24}>
                    <Avatar alt="A" src="" />
                    <Avatar alt="B" src="" />
                    <Avatar alt="C" src="" />
                    <Avatar alt="D" src="" />
                </AvatarGroup>

                <Typography fontWeight={300} mt={2} mb={2}>All Photos</Typography>

                <ImageList sx={{ width: 300, height: 100 }} rows={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://i.guim.co.uk/img/media/3f183e3024872dc0280012487854dc5807048166/0_42_3600_2160/master/3600.jpg?width=1140&quality=85&dpr=1&s=none" alt="snap"/>
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://i.guim.co.uk/img/media/829350dd04a4b7c2c79c433ba60e3f2b14478314/0_0_4074_2839/master/4074.jpg?width=620&quality=85&dpr=1&s=none" alt="snap"/>
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://ca-times.brightspotcdn.com/dims4/default/197cc84/2147483647/strip/true/crop/2395x1597+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2F5a%2F922dfc0b4bac9f645bd01c5b885a%2Fwcup-portugal-uruguay-soccer-92176.jpg" alt="snap"/>
                    </ImageListItem>
                </ImageList>

                <Typography fontWeight={300} mt={2}>Latest Conversation</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                            />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;