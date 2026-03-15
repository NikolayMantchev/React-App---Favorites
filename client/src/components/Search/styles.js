import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	wrapper: {
		display: "flex",
		alignItems: "center",
		gap: theme.spacing(1),
		backgroundColor: "#F8FAFC",
		borderRadius: theme.shape.borderRadius,
		border: "1px solid #E2E8F0",
		padding: theme.spacing(0.5, 1.5),
		width: "100%",
		transition: "border-color 200ms ease, box-shadow 200ms ease",
		"&:focus-within": {
			borderColor: theme.palette.primary.main,
			boxShadow: `0 0 0 3px ${theme.palette.primary.light}33`,
		},
	},
	icon: {
		color: "#94A3B8",
		fontSize: "1.25rem !important",
		flexShrink: 0,
	},
	inputRoot: {
		flex: 1,
		fontSize: "0.9rem !important",
	},
	inputInput: {
		padding: `${theme.spacing(0.5, 0)} !important`,
		"&::placeholder": {
			color: "#94A3B8",
			opacity: 1,
		},
	},
}));
