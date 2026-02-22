import React, { useState, useEffect } from "react";
import { AppBar, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import decode from "jwt-decode";

import favImage from "../../images/favImage.png";

import useStyles from "./styles";
import SearchBar from "../Search/Search";

const Navbar = () => {
    const [user, setUser] = useState({});

    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();


    useEffect(() => {
        const token = localStorage.getItem("token");
        // const name = localStorage.getItem("name");

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
            setUser(decodedToken);
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        setUser(null);
    };

    const name = localStorage.getItem("name");
    return (
        <AppBar className={classes.appBar} position="static" color='inherit'>

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
                <SearchBar></SearchBar>
            </div>
            <div>
                <Button
                    variant="contained"
                    size="medium"
                    color='primary'
                    aria-label="add"
                    className={classes.margin}
                    component={Link}
                    to="/myfavorites"
                >
                    My Fav's
                </Button>
            </div>
            <div>
                <Fab
                    variant="extended"
                    size="medium"
                    color='primary'
                    aria-label="add"
                    className={classes.margin}
                    component={Link}
                    to="/post"
                >
                    <AddIcon /> Add
                </Fab>
            </div>

            <div >
                {user?.email ? (
                    <div >
                        <Typography
                            className={classes.userName}
                            variant="h6"
                            color={classes.primary}
                        >
                            {name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.brandContainer}
                            color='secondary'
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

                )}
            </div>

        </AppBar>
    );
};

export default Navbar;
