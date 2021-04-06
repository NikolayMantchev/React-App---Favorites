import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

const RequireAuth = (component) => {
    const history = useHistory();
    const decodedToken = localStorage.getItem("decodedToken");
    useEffect(() => {
        if (!history) return;
        if (!decodedToken || decodedToken.exp * 1000 < new Date().getTime()) {
            localStorage.clear();
            history.push("/signin");
        }
    }, [decodedToken, history]);
    return decodedToken ? <component /> : null;
};
export default RequireAuth;
