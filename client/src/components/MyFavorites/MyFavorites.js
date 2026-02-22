import React, { useCallback, useEffect } from "react";
import useToken from "../../common/useToken";
// import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import useAsyncActions from "../../state/asyncActions/post";
// import { StateContext } from "../../state/context";
import Posts from "../Posts/Posts";
import SignInForm from "../Auth/SignInForm";

const MyFavorites = () => {
    // const classes = useStyles()

    const { decodedToken } = useToken();
    const { loadPosts } = useAsyncActions();
    const loadPostsCallback = useCallback(loadPosts, [loadPosts])
    const navigate = useNavigate();
    useEffect(() => {
        loadPostsCallback();
    }, [loadPostsCallback]);

    if (!decodedToken) {
        navigate("/signin");
        return <SignInForm />;
    }

    // const myposts = posts.filter((p) => p.creator === decodedToken.id);

    return <Posts creator={decodedToken.id} />;
};

export default MyFavorites;
