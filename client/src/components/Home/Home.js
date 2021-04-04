import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import decode from "jwt-decode";
import Posts from "../Posts/Posts";
import { useHistory, useLocation } from "react-router-dom";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const [user, setUser] = useState(localStorage.getItem("token"));

    const location = useLocation();
    const history = useHistory();

    // const logout = () => {
    //     localStorage.clear();
    //     history.push("/");

    //     setUser(null);
    // };

    // useEffect(() => {
    //     const token = user;

    //     if (token) {
    //         const decodedToken = decode(token);
    //         console.log(decodedToken);
    //         if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    //         setUser(decodedToken);
    //     }

    //     // setUser(localStorage.getItem("token"));
    //     console.log({ user });
    // }, [location]);

    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={6}
                >
                    <Grid item xs={8} sm={5}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
