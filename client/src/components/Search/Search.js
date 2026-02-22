import React, { useContext } from 'react';
import { StateContext } from "../../state/context";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';
import useStyles from "./styles";

import { search } from '../../state/actions/simple';
const SearchAppBar = () => {

	const classes = useStyles();
	const { dispatchPost: dispatch } = useContext(StateContext);


	const setSearch = (event) => {
		dispatch(search(event.target.value))
	}


	// const searchedResult = posts.filter((p)=> p.title.include(filter))

	return (
		<Paper>
			<div className={classes.root}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						onChange={setSearch}
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}

					/>
				</div>
			</div>
		</Paper>
	);
}

export default SearchAppBar