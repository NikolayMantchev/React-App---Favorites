import { get, post, del, put } from './endpoint'
import useToken from '../common/useToken'

const getPosts = () => get('/posts')

export default function useService() {
  const { token} = useToken();
  const addPost = p => post('/posts', {body: JSON.stringify(p)}, token)
  const editPost = p => put(`/posts/${p._id}`, {body: JSON.stringify(p)}, token)
  const deletePost = id => del(`/posts/${id}`, {}, token )
  const likePost = id => put(`/posts/like/${id}`, {}, token)

  return {
    getPosts,
    addPost,
    editPost,
    likePost,
    deletePost
  }
}