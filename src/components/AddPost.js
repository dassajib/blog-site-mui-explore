import styled from '@emotion/styled';
import { ControlPointDuplicateRounded, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

const AddPost = () => {

    const [open, setOpen] = useState(false);

    const UserBox = styled(Box)({
        display : "flex",
        alignItems: "center",
        gap : "10px",
        marginBottom : "20px",
    })

    const CustomModal = styled(Modal)({
        display : "flex",
        alignItems: "center",
        justifyContent : "center",
    })

    return (
        <div>
            <Tooltip    
                    onClick={e => setOpen(true)}
                    title="Delete" sx={{position:"fixed", bottom:20, left : {xs:"calc(45%)", md:30}}}>
                <Fab color="primary" aria-label="add">
                    <ControlPointDuplicateRounded></ControlPointDuplicateRounded>
                </Fab>
            </Tooltip>

            <CustomModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >

                <Box width={400} height={280} p={3} borderRadius={5} bgcolor="white">
                    <Typography variant="h6" color="grey" textAlign="center">
                        Create Post
                    </Typography>

                    <UserBox>
                        <Avatar src="" sx={{ width : 30, height : 30 }}></Avatar>
                        <Typography variant="span" fontWeight={500}>
                            Sajib Das
                        </Typography>
                    </UserBox>

                    <TextField 
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Write Your Post Here..."
                        variant="standard"
                    />

                    <Stack direction="row" gap={3} mt={2} mb={3}>
                        <EmojiEmotions color="primary"></EmojiEmotions>
                        <Image color="secondary"></Image>
                        <VideoCameraBack color="success"></VideoCameraBack>
                        <PersonAdd color="error"></PersonAdd>
                    </Stack>

                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange></DateRange>
                        </Button>
                    </ButtonGroup>

                </Box>

            </CustomModal>
        </div>
    );
};

export default AddPost;