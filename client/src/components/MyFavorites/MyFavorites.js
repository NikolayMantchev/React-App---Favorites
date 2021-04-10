import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import useFetch from "../../api/useFetch";
import useToken from "../../common/useToken";

import Post from "../Posts/Post/Post";
import useStyles from "./styles";
import { useHistory } from "react-router";

const MyFavorites = () => {
    const classes = useStyles();
    const { data, isPending, error } = useFetch("http://localhost:5001/posts");
    const posts = data || [];
    const { decodedToken } = useToken();

    const history = useHistory();
    useEffect(() => {
        if (!decodedToken) {
            history.push("/signin");
        }
    }, [decodedToken, history]);

    const myposts = posts.filter((p) => p.creator === decodedToken.id);

    return (
        <>
            {myposts ? (
                <Grid
                    className={classes.container}
                    container
                    alignItems="stretch"
                    spacing={3}
                >
                    {myposts.map((post) => (
                        <Grid key={post._id} item xs={6} sm={3} md={3}>
                            <Post post={post} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <div>
                    {isPending && <CircularProgress />}
                    {error && <div>error</div>}
                </div>
            )}
        </>
    );
};

export default MyFavorites;
