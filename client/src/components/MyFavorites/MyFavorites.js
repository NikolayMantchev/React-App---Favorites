import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import useFetch from "../../api/useFetch";

import Post from "../Posts/Post/Post";
import useStyles from "./styles";

const MyFavorites = () => {
    const classes = useStyles();
    const { data, isPending, error } = useFetch("http://localhost:5001/posts");
    const posts = data || [];
    console.log({ posts });
    // const [user, setUser] = useState(
    //     JSON.parse(localStorage.getItem("profile"))
    // );
    // const myposts = posts.filter((p) => p.creator === user._id)      //take creator !!?
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
                spacing={3}
            >
                {/*  myposts.map.... */}
                {posts.map((post) => (
                    <Grid key={post._id} item xs={6} sm={3} md={3}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default MyFavorites;
