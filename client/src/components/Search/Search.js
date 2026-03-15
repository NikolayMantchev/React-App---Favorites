import { useContext } from 'react';
import { StateContext } from "../../state/context";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from "./styles";
import { search } from '../../state/actions/simple';

const SearchAppBar = () => {
	const classes = useStyles();
	const { dispatchPost: dispatch } = useContext(StateContext);

	const setSearch = (event) => {
		dispatch(search(event.target.value));
	};

	return (
		<div className={classes.wrapper} role="search">
			<SearchIcon className={classes.icon} aria-hidden="true" />
			<InputBase
				onChange={setSearch}
				placeholder="Search favorites..."
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search favorites' }}
			/>
		</div>
	);
};

export default SearchAppBar;
