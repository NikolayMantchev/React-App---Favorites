import React from "react";
import { Link } from "react-router-dom";
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
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles";

import useToken from "../../../common/useToken";
import useAsyncActions from "../../../state/asyncActions/post";

const Post = ({ post }) => {
    const { removePost, likePost } = useAsyncActions();
    const classes = useStyles();

    const { decodedToken } = useToken();

    const handleDelete = (id) => (e) => {
        e.preventDefault();
        removePost(id);
    };
    const handleLike = (id) => (e) => {
        e.preventDefault();
        likePost(id);
    };

    // console.log({post})

    return (
        <Card className={classes.card}>
            <a href={post.linkUrl}>
                <CardMedia
                    className={classes.media}
                    image={post.selectedFile || post.imageUrl}
                    title={post.title}
                />
            </a>

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
                {post.creator !== decodedToken?.id ? (
                    <>
                        {/* <Tooltip title="Add" aria-label="add">
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.margin}
                // onClick={() => dispatch(createPost(post._id))}
              >
                <AddIcon/>
              </Fab>
            </Tooltip> */}
                        <Tooltip title="Like" aria-label="like" size="lg">
                            <Fab
                                size="medium"
                                color="secondary"
                                aria-label="like"
                                onClick={handleLike(post._id)}
                            >
                                <FavoriteIcon />
                                <Typography> {post.likes.length}</Typography>
                            </Fab>
                        </Tooltip>
                    </>
                ) : (
                    <>
                        <Tooltip title="Edit" aria-label="edit">
                            <Fab
                                component={Link}
                                to={`/post/${post._id}`}
                                size="small"
                                color="secondary"
                                aria-label="edit"
                                className={classes.margin}
                                // onClick={() => setCurrentId(post._id)}
                            >
                                {/* <Link to={`/post/${post._id}`}> */}
                                <EditIcon />
                                {/* </Link> */}
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Delete" aria-label="delete">
                            <Fab
                                size="small"
                                color="primary"
                                aria-label="delete"
                                className={classes.margin}
                                onClick={handleDelete(post._id)}
                            >
                                <DeleteIcon />
                            </Fab>
                        </Tooltip>
                    </>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;
