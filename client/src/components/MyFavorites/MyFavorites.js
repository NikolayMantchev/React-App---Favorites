import React, { useContext, useEffect } from "react";
import useToken from "../../common/useToken";
// import useStyles from "./styles";
import { useHistory } from "react-router";
import useAsyncActions from "../../state/asyncActions/post";
import { StateContext } from "../../state/context";
import Posts from "../Posts/Posts";
import SignInForm from "../Auth/SignInForm";

const MyFavorites = () => {
    // const classes = useStyles()

    const { decodedToken } = useToken();
    const { loadPosts } = useAsyncActions();

    useEffect(() => {
        loadPosts();
    }, []);

    const { post } = useContext(StateContext);
    const { fetching: isPending, error, posts } = post;

    const history = useHistory();

    if (!decodedToken) {
        history.push("/signin");
        return <SignInForm />;
    }

    const myposts = posts.filter((p) => p.creator === decodedToken.id);

    return <Posts creator={decodedToken.id} />;
};

export default MyFavorites;
