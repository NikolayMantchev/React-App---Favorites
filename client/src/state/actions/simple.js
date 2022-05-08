

const request = () => ({ type: 'REQUEST' })
const success = payload => ({ type: 'SUCCESS', payload })
const update = () => ({ type: 'UPDATE' })
const delAction = payload => ({ type: 'DELETE', payload })
const failure = payload => ({ type: 'FAILURE', payload })
const like = payload => ({ type: 'LIKE', payload })
const search = payload => ({ type: 'SEARCH', payload })

export {
	request,
	success,
	update,
	delAction,
	like,
	failure,
	search
}