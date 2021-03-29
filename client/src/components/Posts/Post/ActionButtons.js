import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
