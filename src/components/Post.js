import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';

const Post = () => {
    return (
        <div>
            <Card sx={{margin:5}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
                        S
                    </Avatar>
                    }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title="Key of suntainable succes"
                    subheader="September 14, 2023"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://media.npr.org/assets/img/2022/12/30/ap22364795346345-2c6120b6fd7a4e91f1b49c8bafa1d3b9ae28e482-s800-c85.webp"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                            Five elements for achieving sustainable success.
                        Create energy. Forward motion requires energy. ...
                        Seek engagement. Engagement requires that your focus is involved. ...
                        Know your skills. You have many skills available to you. ...
                        Know your values. ...
                        Never stop learning.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;