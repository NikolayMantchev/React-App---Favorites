import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import useFetch from "../../api/useFetch";
import decode from "jwt-decode";
import useToken from "../../common/useToken";

import Post from "../Posts/Post/Post";
import useStyles from "./styles";
import { useHistory } from "react-router";

const MyFavorites = () => {
    const classes = useStyles();
    const { data, isPending, error } = useFetch("http://localhost:5001/posts");
    const posts = data || [];
    console.log(posts);
    const { token, decodedToken } = useToken();

    const history = useHistory();
    useEffect(() => {
        if (!decodedToken) {
            history.push("/signin");
        }
    }, [decodedToken, history]);
    // const [user, setUser] = useState(localStorage.getItem("token"));
    // console.log(user);

    // const decodedToken = decode(user);
    // setUser(decodedToken);
    // const myposts = posts.filter((p) => p.creator === user.id); //take creator !!?
    // console.log(myposts);
    // console.log(user);
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
