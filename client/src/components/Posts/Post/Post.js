import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Fab,
    // Link,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile || post.imageUrl} // to do .. set value post.imageUrl
                title={post.title}
                onClick={() => `${post.linkUrl}`} // to do... on klick go to url
            />
            {/* <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div> */}
            {/* <div className={classes.details}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h2"
                >
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div> */}
            <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="h2"
            >
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Fab
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                    // onClick={() => dispatch(createPost(post._id))}
                >
                    <AddIcon />
                </Fab>
                <Fab
                    size="medium"
                    color="secondary"
                    aria-label="like"
                    // onClick={() => dispatch(likePost(post._id))}
                >
                    <FavoriteIcon />
                    <Typography> {post.likeCount}</Typography>
                </Fab>

                <Fab
                    size="small"
                    color="secondary"
                    aria-label="edit"
                    className={classes.margin}
                    // onClick={() => setCurrentId(post._id)}
                >
                    <EditIcon />
                </Fab>
                <Fab
                    size="small"
                    color="primary"
                    aria-label="delete"
                    className={classes.margin}
                    // onClick={() => dispatch(deletePost(post._id))}
                >
                    <DeleteIcon />
                </Fab>
            </CardActions>
        </Card>
    );
};

export default Post;
