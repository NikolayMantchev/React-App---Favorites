import {
    success,
    request,
    failure,
    update,
    delAction,
    like,
} from "../actions/simple";
import { StateContext } from "../context";
import { useCallback, useContext } from "react";
import useService from "../../api/useService";

const  useAsyncActions = () => {
    const { dispatchPost: dispatch } = useContext(StateContext);
    const {
        getPosts,
        addPost: insertPost,
        deletePost,
        editPost,
        likePost: likeService,
    } = useService();

    const loadPosts = useCallback(() => {
        dispatch(request());

        return getPosts()
            .then((posts) => dispatch(success(posts)))
            .catch((error) => dispatch(failure(error.message)));
    }, [dispatch]);

    const addPost = (post) => {
        dispatch(request());

        return insertPost(post)
            .then((res) => {
                console.log(res);
                if (res.status === "error") {
                    dispatch(failure(res.message));
                    return res;
                }

                dispatch(update());

                return res;
            })
            .catch((error) => dispatch(failure(error.message)));
    };

    const removePost = (id) => {
        dispatch(request());

        return deletePost(id)
            .then((res) => {
                if (res.status === "error") {
                    dispatch(failure(res.message));
                    return res;
                }

                dispatch(delAction(id));

                return res;
            })
            .catch((error) => dispatch(failure(error.message)));
    };
    const updatePost = (post) => {
        dispatch(request());

        return editPost(post)
            .then((res) => {
                if (res.status === "error") {
                    dispatch(failure(res.message));
                    return res;
                }

                dispatch(update());

                return res;
            })
            .catch((error) => dispatch(failure(error.message)));
    };
    const likePost = (id) => {
        return likeService(id)
            .then((res) => {
                console.log({ res });
                if (res.status === "error") {
                    dispatch(failure(res.message));
                    return res;
                }

                dispatch(like(res));

                return res;
            })
            .catch((error) => dispatch(failure(error.message)));
    };

    return {
        loadPosts,
        addPost,
        updatePost,
        likePost,
        removePost,
    };
};

export default useAsyncActions;
