import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: "14px !important",
        margin: "20px 0 !important",
        background: "#fff !important",
        boxShadow: "0 1px 8px rgba(30, 41, 59, 0.08), 0 0 0 1px rgba(225, 29, 72, 0.04) !important",
    },
    toolbar: {
        display: "flex !important",
        alignItems: "center !important",
        gap: `${theme.spacing(2)} !important`,
        padding: `${theme.spacing(0, 3)} !important`,
        minHeight: "68px !important",
        [theme.breakpoints.down("sm")]: {
            flexWrap: "wrap !important",
            padding: `${theme.spacing(1.5, 2)} !important`,
            gap: `${theme.spacing(1)} !important`,
            minHeight: "unset !important",
            paddingBottom: `${theme.spacing(1.5)} !important`,
        },
    },
    brand: {
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        textDecoration: "none",
        transition: "opacity 200ms ease",
        "&:hover": {
            opacity: 0.8,
        },
    },
    searchWrapper: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        maxWidth: 400,
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            order: 3,
            width: "100%",
            flex: "none",
            maxWidth: "none",
        },
    },
    actions: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        flexShrink: 0,
        [theme.breakpoints.down("sm")]: {
            gap: theme.spacing(0.5),
        },
    },
    userName: {
        fontWeight: "600 !important",
        whiteSpace: "nowrap",
        color: theme.palette.primary.main,
        fontSize: "0.9rem !important",
    },
}));
