import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import useFetch from "../../api/useFetch";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
    const classes = useStyles();
    const { data, isPending, error } = useFetch("http://localhost:5001/posts");
    const posts = data || [];
    console.log({ posts });
    return (
        <>
            <div>
                {isPending && <CircularProgress />}
                {error && <div>error</div>}
            </div>
            <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={6}
            >
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Posts;
