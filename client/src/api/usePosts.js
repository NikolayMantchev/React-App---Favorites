import { useState, useEffect } from "react";

export default function usePosts() {
    const [posts, setPosts] = setState([]);
    const [lastFetch, setlastFetch] = setState(Date.now());
    const stale = Date.now() - lastFetch === 2000000;
    console.log(Date.now() - lastFetch);

    useEffect(() => {}, [stale]);
}
