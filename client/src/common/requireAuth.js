import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const RequireAuth = (component) => {
    const navigate = useNavigate();
    const decodedToken = localStorage.getItem("decodedToken");
    useEffect(() => {
        if (!navigate) return;
        if (!decodedToken || decodedToken.exp * 1000 < new Date().getTime()) {
            localStorage.clear();
            navigate("/signin");
        }
    }, [decodedToken, navigate]);
    return decodedToken ? <component /> : null;
};
export default RequireAuth;
