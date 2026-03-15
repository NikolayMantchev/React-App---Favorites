import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        marginTop: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4),
        background: "#fff",
        borderRadius: theme.shape.borderRadius,
        boxShadow: "0 1px 8px rgba(30, 41, 59, 0.08)",
        maxWidth: 560,
        margin: `${theme.spacing(6)}px auto 0`,
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
    },
    fileInput: {
        width: "97%",
        margin: "15px 0",
    },
    buttonSubmit: {
        marginBottom: 10,
        fontWeight: "600 !important",
    },
}));
