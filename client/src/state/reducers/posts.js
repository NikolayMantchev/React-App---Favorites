import {editState} from '../../common/helpers'

export default (state, action) => {
  const { type, payload } = action

  const edit = editState(state)

  const actions = {
    request: () => edit({ fetching: true }),
    'success': () => edit({
      posts: payload,
      fetching: false,
      error: ''
    }),
    update: () => edit({
      fetching: false,
      error: ''
    }),
    'delete': () => edit({
      fetching: false,
      error: '',
      posts: state.posts.filter(p => p._id !== payload)
    }),
    like: () =>
      edit({
        fetching: false,
        error: '',
        posts: [...state.posts.filter(p => p._id !== payload._id), payload]
      }),

    search: () => edit({
      search: payload
    }),
    failure: () => edit({
      error: payload,
      fetching: false
    })
  }

  const defaultFn = () => state
  const actionFn = actions[type.toLowerCase()] || defaultFn

  return actionFn()
}
