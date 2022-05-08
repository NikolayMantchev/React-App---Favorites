import React, { useReducer, useMemo } from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import postReducer from './state/reducers/posts'

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import SignInForm from './components/Auth/SignInForm'
import SignUpForm from './components/Auth/SignUpForm'
import MyFavorites from './components/MyFavorites/MyFavorites'
import { StateContext } from './state/context'


const initialPostState = {
  fetching: false,
  error: '',
  posts: [],
  search: ''
}

const App = () => {
  const [post, dispatchPost] = useReducer(postReducer, initialPostState)

  const value = useMemo(() => ({
    post,
    dispatchPost
  }), [post])

  return (
    <StateContext.Provider value={value}>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signin" exact component={SignInForm}/>
            <Route path="/signup" exact component={SignUpForm}/>
            <Route path="/post" exact component={Form}/>
            <Route path="/post/:id" exact component={Form}/>
            <Route path="/myfavorites" exact component={MyFavorites}/>
          </Switch>
        </Container>
      </BrowserRouter>
    </StateContext.Provider>
  )
}
export default App
