import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import decode from "jwt-decode";

import favImage from "../../images/favImage.png";

import useStyles from "./styles";

const Navbar = () => {
    const [user, setUser] = useState({});

    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        localStorage.clear();
        history.push("/");

        setUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        // const name = localStorage.getItem("name");

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
            setUser(decodedToken);
        }
    }, [location]); 

    const name = localStorage.getItem("name");
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Link to="/">
                    <img
                        className={classes.image}
                        src={favImage}
                        alt="favImage"
                        height="60"
                    />
                </Link>
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
                    My Fav's
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
                    to="/post"
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
                            Welcome, {name}
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
                    <>
                        <div>
                            <Button
                                component={Link}
                                to="/signin"
                                variant="contained"
                                color="primary"
                                className={classes.signin}
                            >
                                Sign In
                            </Button>

                            <Button
                                component={Link}
                                to="/signup"
                                variant="contained"
                                color="primary"
                                className={classes.signin}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
