import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    TextField,
    Button,
    Typography,
    Paper,
    lighten,
} from "@material-ui/core";
import { Container } from "@material-ui/core";
import useToken from "../../common/useToken";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { StateContext } from "../../state/context";
import useAsyncActions from "../../state/asyncActions/post";

const { token, decodedToken } = useToken();

const initState = {
    creator: decodedToken?.id || "",
    title: "",
    description: "",
    selectedFile: "",
    imageUrl: "",
    linkUrl: "",
};
const Form = ({ history }) => {
    const [post, setPost] = useState(initState);
    const { id } = useParams();

    const { addPost, updatePost } = useAsyncActions();

    // useEffect(() => {
    //     if (!id) setPost(initState);
    // }, id);

    useEffect(() => {
        // console.log(token);
        if (!token) history.push("/signin");
    }, [history, token]);

    const { post: postState } = useContext(StateContext);
    const { posts, error } = postState;

    useEffect(() => {
        if (posts.length > 0) {
            const curentPost = posts.find((p) => p._id === id);

            if (curentPost) {
                setPost(curentPost);
            }
        }
    }, [posts]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };
    // console.log({ post });

    const upsertPost = (e) => {
        e.preventDefault();

        const fn = post._id ? updatePost : addPost;

        fn(post).then((r) => {
            if (r.status !== "error") history.push("/");
        });
    };

    const classes = useStyles();

    const clear = () => {
        setPost(initState);
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper className={classes.paper}>
                <form
                    autoComplete="off"
                    noValidate
                    className={`${classes.root} ${classes.form}`}
                >
                    <Typography variant="h6">
                        {id ? "Edit" : "Create Favorite"}
                    </Typography>

                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={post.title}
                        onChange={handleChange}
                    />
                    <TextField
                        name="description"
                        variant="outlined"
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                        value={post.description}
                        onChange={handleChange}
                    />
                    <TextField
                        name="imageUrl"
                        variant="outlined"
                        label="Image Url"
                        fullWidth
                        multiline
                        rows={1}
                        value={post.imageUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        name="linkUrl"
                        variant="outlined"
                        label="Link Url"
                        fullWidth
                        value={post.linkUrl}
                        onChange={handleChange}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setPost({
                                    ...post,
                                    selectedFile: base64,
                                })
                            }
                        />
                    </div>

                    <Button
                        className={classes.buttonSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={upsertPost}
                    >
                        Submit
                    </Button>
                    <div>
                        {error && (
                            <Typography
                                component="h3"
                                variant="h6"
                                color="secondary"
                            >
                                {error}
                            </Typography>
                        )}
                    </div>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={clear}
                        fullWidth
                    >
                        Clear
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Form;
