import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import SignInForm from "./components/Auth/SignInForm";
import SignUpForm from "./components/Auth/SignUpForm";
import MyFavorites from "./components/MyFavorites/MyFavorites";

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/auth" exact component={Auth} /> */}
                <Route path="/signin" exact component={SignInForm} />
                <Route path="/signup" exact component={SignUpForm} />
                <Route path="/posts" exact component={Form} />
                <Route path="/myfavorites" exact component={MyFavorites} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;
