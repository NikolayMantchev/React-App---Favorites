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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [form, setForm] = useState(initialState);

    const history = useHistory();
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    const [error, setError] = useState("");
    const signUpClick = (e) => {
        const { firstName, lastName, email, password, confirmPassword } = form;
        console.log("signUp Clicked...");

        fetch("http://localhost:5001/user/signup", {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((result) => {
                localStorage.setItem("token", result.token);
                console.log({ result });
            })
            .catch((err) => setError(err));
        history.push("/");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <>
                            <Input
                                name="firstName"
                                label="First Name"
                                handleChange={handleChange}
                                autoFocus
                                half
                            />
                            <Input
                                name="lastName"
                                label="Last Name"
                                handleChange={handleChange}
                                half
                            />
                        </>

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

                        <Input
                            name="confirmPassword"
                            label="Repeat Password"
                            handleChange={handleChange}
                            type="password"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signUpClick}
                    >
                        Sign Up
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button component={Link} to="/signin">
                                Already have an account? Sign in
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default SignUp;
