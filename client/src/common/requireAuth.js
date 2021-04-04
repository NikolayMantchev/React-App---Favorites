import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

const RequireAuth = (component) => {
    const history = useHistory();
    const decodedToken = localStorage.getItem("decodedToken");
    useEffect(() => {
        console.log({ decodedToken, history });
        if (!history) return;
        if (!decodedToken || decodedToken.exp * 1000 < new Date().getTime()) {
            localStorage.clear();
            console.log("ne6to");
            history.push("/signin");
        }
    }, [decodedToken, history]);
    return decodedToken ? <component /> : null;
};
export default RequireAuth;
