import React, { useEffect, useState } from "react";
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
import useFetch from "../../api/useFetch";

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

    // useEffect(() => {
    //     if (!token) history.push("/signin");
    // }, [history, token]);

    // const { data, isPending, error } = useFetch("http://localhost:5001/posts");

    // const posts = data || [];

    // useEffect(() => {
    //     if (posts.length > 0) {
    //         const curentPost = posts.find((p) => p._id === id);

    //         if (curentPost) {
    //             setPost(curentPost);
    //         }
    //     }
    // }, [posts]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const createPost = (e) => {
        fetch("http://localhost:5001/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((result) => result.json())
            .then((result) => {
                history.push("/");
            })
            .catch((error) => console.log({ error }));
    };
    const classes = useStyles();

    const clear = () => {
        setPost(initState);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const { title } = e.target;
    //     console.log(title.value);

    //     //     if (currentId === 0) {
    //     //         // dispatch(createPost(postData));
    //     //         clear();
    //     //     } else {
    //     //         // dispatch(updatePost(currentId, postData));
    //     //         clear();
    //     //     }
    // };

    return (
        <Container component="main" maxWidth="md">
            <Paper className={classes.paper}>
                <form
                    autoComplete="off"
                    noValidate
                    className={`${classes.root} ${classes.form}`}
                    // onSubmit={handleSubmit}
                >
                    <Typography variant="h6">
                        {id ? "Edit" : "Create Favorite"}
                    </Typography>
                    {/* <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={post.creator}
                    onChange={(e) =>
                        setPost({ ...post, creator: e.target.value })
                    }
                /> */}
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
                    {/* <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPost({
                            ...post,
                            tags: e.target.value.split(","),
                        })
                    }
                /> */}

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
                        onClick={createPost}
                        // type="submit"
                    >
                        Submit
                    </Button>
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
