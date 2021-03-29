import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";

import FileBase from "react-file-base64";

import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        description: "",
        tags: "",
        selectedFile: "",
        imageUrl: "",
        linkUrl: "",
    });

    const classes = useStyles();

    const clear = () => {
        setCurrentId(0);
        setPostData({
            creator: "",
            title: "",
            description: "",
            tags: "",
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
                    value={postData.creator}
                    onChange={(e) =>
                        setPostData({ ...postData, creator: e.target.value })
                    }
                /> */}
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) =>
                            setPostData({ ...postData, title: e.target.value })
                        }
                    />
                    <TextField
                        name="description"
                        variant="outlined"
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                        value={postData.description}
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                description: e.target.value,
                            })
                        }
                    />
                    <TextField
                        name="imageUrl"
                        variant="outlined"
                        label="Image Url"
                        fullWidth
                        multiline
                        rows={1}
                        value={postData.imageUrl}
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                imageUrl: e.target.value,
                            })
                        }
                    />
                    <TextField
                        name="linkUrl"
                        variant="outlined"
                        label="Link Url"
                        fullWidth
                        value={postData.linkUrl}
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                linkUrl: e.target.value,
                            })
                        }
                    />
                    {/* <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(","),
                        })
                    }
                /> */}

                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setPostData({
                                    ...postData,
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
