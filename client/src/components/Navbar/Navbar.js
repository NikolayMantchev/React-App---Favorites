import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import decode from "jwt-decode";

import favImage from "../../images/favImage.png";

import useStyles from "./styles";

const Navbar = () => {
    const [user, setUser] = useState(localStorage.getItem("token"));

    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        localStorage.setItem("token", null);
        history.push("/");

        setUser(null);
    };

    useEffect(() => {
        const token = user;

        if (token) {
            const decodedToken = decode(token);
            console.log(decodedToken);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
            setUser(decodedToken);
        }

        // setUser(localStorage.getItem("token"));
        console.log({ user });
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h4"
                    align="center"
                >
                    Favorites
                </Typography>
                <img
                    className={classes.image}
                    src={favImage}
                    alt="icon"
                    height="60"
                />
            </div>

            <div>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                    component={Link}
                    to="/myfavorites"
                >
                    My Favorites
                </Fab>
            </div>
            <div>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                    component={Link}
                    to="/posts"
                >
                    <AddIcon /> Add
                </Fab>
            </div>

            <Toolbar className={classes.toolbar}>
                {user?.email ? (
                    <div className={classes.profile}>
                        <Typography
                            className={classes.userName}
                            variant="h6"
                            color="primary"
                        >
                            {user?.email}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button
                            component={Link}
                            to="/signin"
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Button
                            component={Link}
                            to="/signup"
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
