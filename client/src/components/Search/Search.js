import React from 'react';
import { StateContext } from "../../state/context";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';
import useStyles from "./styles";

const SearchAppBar = () => {

	const classes = useStyles();
	const searchVaule = ''


	return (
		<Paper>
			<div className={classes.root}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						// onSubmit={}
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