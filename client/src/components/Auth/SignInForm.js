import React, { useState } from "react";
import decode from "jwt-decode";
//import { apiSignInUrl } from "../../api/endpoint";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import useStyles from "./styles";
import Input from "./Input";

const initialState = {
    email: "",
    password: "",
};
const apiSignInUrl = "https://react-node-exam.vercel.app/user/signin";
const SignIn = () => {
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const classes = useStyles();

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const signInClick = (e) => {
        const { email, password } = form;
        e.preventDefault();
        fetch(apiSignInUrl, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((result) => {
                if (result.message) {
                    return setError(result.message);
                }
                localStorage.setItem("token", result.token);
                localStorage.setItem("name", result.result.name);
                const decodedToken = decode(result.token);
                localStorage.setItem(
                    "decodedToken",
                    JSON.stringify(decodedToken)
                );

                navigate("/");
            })
            .catch((err) => setError(err.message));
        
    };
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        <div>
                            {error && (
                                <Typography
                                    component="h3"
                                    variant="h6"
                                    color="secondary"
                                >
                                    {error}
                                </Typography>
                            )}
                        </div>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signInClick}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button component={Link} to="/signup">
                                "Don't have an account? Sign Up"
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default SignIn;
