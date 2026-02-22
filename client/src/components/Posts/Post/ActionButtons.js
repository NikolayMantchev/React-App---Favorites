import React from "react";
import { makeStyles } from "@mui/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1.6),
        // display: "flex",
        flexWrap: "wrap",
    },
}));

export default function ActionButtons() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Fab
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                >
                    <AddIcon />
                </Fab>
                <Fab
                    size="small"
                    color="secondary"
                    aria-label="edit"
                    className={classes.margin}
                >
                    <EditIcon />
                </Fab>

                <Fab
                    size="small"
                    color="secondary"
                    aria-label="like"
                    className={classes.margin}
                >
                    <FavoriteIcon />
                </Fab>
                <Fab
                    size="small"
                    color="primary"
                    aria-label="delete"
                    className={classes.margin}
                >
                    <DeleteIcon />
                </Fab>
            </div>
        </div>
    );
}
