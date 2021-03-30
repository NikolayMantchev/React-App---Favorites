import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";

import FileBase from "react-file-base64";

import useStyles from "./styles";
const initState = {
    creator: "",
    title: "",
    description: "",
    selectedFile: "",
    imageUrl: "",
    linkUrl: "",
};
const Form = ({ currentId, setCurrentId }) => {
    const [post, setPost] = useState(initState);
    console.log({ post });
    const handleChange = (e) =>
        setPost({ ...post, [e.target.name]: e.target.value });

    const createPost = (e) => {
        const {
            creator,
            title,
            description,
            selectedFile,
            imageUrl,
            linkUrl,
        } = post;
        console.log("Create TEST...");
        fetch("http://localhost:5001/posts", {
            method: "POST",
            body: JSON.stringify({
                creator,
                title,
                description,
                selectedFile,
                imageUrl,
                linkUrl,
            }),
        })
            .then((result) => {
                console.log({ result });
            })
            .catch((error) => console.log(error));
    };
    const classes = useStyles();

    const clear = () => {
        setCurrentId(0);
        setPost({
            creator: "",
            title: "",
            description: "",
            selectedFile: "",
            imageUrl: "",
            linkUrl: "",
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (currentId === 0) {
    //         // dispatch(createPost(postData));
    //         clear();
    //     } else {
    //         // dispatch(updatePost(currentId, postData));
    //         clear();
    //     }
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
                        {currentId ? `Editing " "` : "Create Favorite"}
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
                        type="submit"
                        fullWidth
                        onClick={createPost}
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
