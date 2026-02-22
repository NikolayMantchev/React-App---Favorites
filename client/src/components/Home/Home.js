import React, { useCallback, useEffect } from "react";

import useAsyncActions from "../../state/asyncActions/post";
import Posts from "../Posts/Posts";

const Home = () => {
    const { loadPosts } = useAsyncActions();
    const loadPostsCallback = useCallback(loadPosts, [loadPosts])


    useEffect(() => {
        loadPostsCallback();
    }, [loadPostsCallback]);

    return <Posts />;
};

export default Home;
