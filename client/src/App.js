import React, { useReducer, useMemo } from 'react'
import { Container, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

const theme = createTheme()

const App = () => {
  const [post, dispatchPost] = useReducer(postReducer, initialPostState)

  const value = useMemo(() => ({
    post,
    dispatchPost
  }), [post])

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={value}>
        <BrowserRouter>
          <Container maxWidth="xl">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signin" element={<SignInForm/>}/>
              <Route path="/signup" element={<SignUpForm/>}/>
              <Route path="/post" element={<Form/>}/>
              <Route path="/post/:id" element={<Form/>}/>
              <Route path="/myfavorites" element={<MyFavorites/>}/>
            </Routes>
          </Container>
        </BrowserRouter>
      </StateContext.Provider>
    </ThemeProvider>
  )
}
export default App
