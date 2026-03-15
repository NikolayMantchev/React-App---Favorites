import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4),
        background: "#fff",
        borderRadius: theme.shape.borderRadius,
        boxShadow: "0 1px 8px rgba(30, 41, 59, 0.08)",
        maxWidth: 440,
        margin: `${theme.spacing(6)}px auto 0`,
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: `${theme.spacing(3, 0, 2)} !important`,
        padding: `${theme.spacing(1.2, 0)} !important`,
        fontWeight: "600 !important",
    },
}));
