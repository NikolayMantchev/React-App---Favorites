import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: "12px !important",
        margin: "20px 0 !important",
        boxShadow: "0 2px 12px rgba(225, 29, 72, 0.10) !important",
    },
    toolbar: {
        display: "flex !important",
        alignItems: "center !important",
        gap: `${theme.spacing(2)} !important`,
        padding: `${theme.spacing(0, 3)} !important`,
        minHeight: "72px !important",
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
        [theme.breakpoints.down("sm")]: {
            order: 3,
            width: "100%",
            flex: "none",
        },
    },
    actions: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        flexShrink: 0,
        [theme.breakpoints.down("sm")]: {
            gap: theme.spacing(0.5),
            flexWrap: "wrap",
            justifyContent: "flex-end",
        },
    },
    userName: {
        fontWeight: "600 !important",
        whiteSpace: "nowrap",
        color: "#E11D48",
        fontSize: "0.95rem !important",
    },
}));
