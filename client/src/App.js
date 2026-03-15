import { useReducer, useMemo } from 'react'
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#E11D48",
      light: "#FB7185",
      dark: "#9F1239",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2563EB",
      light: "#60A5FA",
      dark: "#1D4ED8",
      contrastText: "#fff",
    },
    background: {
      default: "#FFF1F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B",
      secondary: "#475569",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeightMedium: 600,
    h5: { fontWeight: 700 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
})

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
          <Container component="div" maxWidth="xl">
            <Navbar/>
            <main>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<SignInForm/>}/>
                <Route path="/signup" element={<SignUpForm/>}/>
                <Route path="/post" element={<Form/>}/>
                <Route path="/post/:id" element={<Form/>}/>
                <Route path="/myfavorites" element={<MyFavorites/>}/>
              </Routes>
            </main>
          </Container>
        </BrowserRouter>
      </StateContext.Provider>
    </ThemeProvider>
  )
}
export default App
