import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter as Router,
} from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
// import Header from './components/Header';
import ErrorPage from './pages/Error-page/error-page'
// import AppHeader from './components/Header'
import '../src/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/survey',
    element: <Survey />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router> */}
    {/* <AppHeader /> */}
    <RouterProvider router={router} />
    {/* </Router> */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
