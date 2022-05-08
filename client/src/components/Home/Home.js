import React, { useContext, useEffect } from "react";

import useAsyncActions from "../../state/asyncActions/post";
import Posts from "../Posts/Posts";

const Home = () => {
    const { loadPosts } = useAsyncActions();



    useEffect(() => {
        loadPosts();
    }, []);

    return <Posts />;
};

export default Home;
