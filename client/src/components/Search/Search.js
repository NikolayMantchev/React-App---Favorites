import React, { useEffect, useState, useContext } from 'react';
import { StateContext } from "../../state/context";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';
import useStyles from "./styles";
import useAsyncActions from "../../state/asyncActions/post";
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