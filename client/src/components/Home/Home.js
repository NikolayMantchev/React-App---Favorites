import React, { useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import Posts from "../Posts/Posts";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);

    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={6}
                >
                    <Grid item xs={12} sm={12}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
