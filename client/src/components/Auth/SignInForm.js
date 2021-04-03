import React, { useState } from "react";

import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";
import Input from "./Input";

const initialState = {
    email: "",
    password: "",
};

const SignIn = () => {
    const [form, setForm] = useState(initialState);
    const history = useHistory();

    const classes = useStyles();

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const signInClick = (e) => {
        const { email, password } = form;

        fetch("http://localhost:5001/user/signin", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((result) => result.json())
            .then((result) => {
                localStorage.setItem("token", result.token);
                // localStorage.setItem("result", result.result);
                // localStorage.setItem("name", result.result.name);
            })
            .catch((err) => setError(err));

        e.preventDefault();

        history.push("/");
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
                    <Grid container justify="flex-end">
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
