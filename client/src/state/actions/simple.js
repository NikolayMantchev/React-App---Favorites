import {REQUEST, SUCCESS, FAILURE, UPDATE, DELETE, LIKE} from '../../constants/actionTypes'

const request = () => ({ type: REQUEST})
const success = payload => ({type: SUCCESS, payload})
const update = () => ({type: UPDATE })
const delAction = payload => ({type: DELETE, payload})
const failure = payload => ({type: FAILURE, payload})
const like = payload => ({type: LIKE, payload})

export {
	request,
	success,
	update,
	delAction,
	like,
	failure
}