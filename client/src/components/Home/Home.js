import React, { useContext, useEffect } from "react";
import { StateContext } from "../../state/context";
import useAsyncActions from "../../state/asyncActions/post";

import Posts from "../Posts/Posts";

const Home = ({ filter }) => {
    const { loadPosts } = useAsyncActions();

    const { post } = useContext(StateContext);
    const { fetching: isPending, error, posts } = post;

    useEffect(() => {
        loadPosts();
    },[]);

    return <Posts posts={posts} error={error} isPending={isPending} />;
};

export default Home;
