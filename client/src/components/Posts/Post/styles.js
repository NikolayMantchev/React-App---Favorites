import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "14px !important",
        height: "100%",
        position: "relative",
        background: "#fff",
        boxShadow: "0 1px 6px rgba(30, 41, 59, 0.08) !important",
        transition: "transform 200ms ease, box-shadow 200ms ease !important",
        overflow: "hidden",
        "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 6px 20px rgba(30, 41, 59, 0.12) !important",
        },
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "#F1F5F9",
        cursor: "pointer",
    },
    overlay: {
        position: "absolute",
        top: "12px",
        left: "12px",
        color: "white",
    },
    overlay2: {
        position: "absolute",
        top: "12px",
        right: "12px",
        color: "white",
    },
    title: {
        padding: "12px 16px 0 !important",
        fontWeight: "700 !important",
        color: "#1E293B",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "16px",
    },
    cardActions: {
        padding: "8px 16px 14px !important",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));
