import React, { useState, useEffect, useCallback } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import decode from "jwt-decode";

import favImage from "../../images/favImage.png";
import useStyles from "./styles";
import SearchBar from "../Search/Search";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleLogout = useCallback(() => {
        localStorage.clear();
        navigate("/");
        setUser(null);
    }, [navigate]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                handleLogout();
            } else {
                setUser(decodedToken);
            }
        } else {
            setUser(null);
        }
    }, [location, handleLogout]);

    const name = localStorage.getItem("name");

    return (
        <AppBar component="header" className={classes.appBar} position="static" color="inherit" elevation={2}>
            <Toolbar component="nav" className={classes.toolbar} disableGutters>

                <Link to="/" className={classes.brand} aria-label="Go to home">
                    <img src={favImage} alt="Favorites" height="48" />
                </Link>

                <div className={classes.searchWrapper}>
                    <SearchBar />
                </div>

                <div className={classes.actions}>
                    <Button
                        variant="outlined"
                        size="medium"
                        color="primary"
                        component={Link}
                        to="/myfavorites"
                    >
                        My Favs
                    </Button>

                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        component={Link}
                        to="/post"
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>

                    {user?.email ? (
                        <>
                            <Typography variant="body1" className={classes.userName}>
                                {name}
                            </Typography>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                to="/signin"
                                variant="outlined"
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
                        </>
                    )}
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
