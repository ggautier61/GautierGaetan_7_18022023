import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter as Router,
} from "react-router-dom"
import Home from "./pages/Home"
// import Header from './components/Header';
import ErrorPage from "./pages/Error-page/error-page"
import AppHeader from "./components/Header"
import "../src/index.css"
import APropos from "./pages/A-Propos"
import FicheLogement from "./pages/Fiche-Logement"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:id",
    element: <FicheLogement />,
  },
  {
    path: "/a-propos",
    element: <APropos />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
    <RouterProvider router={router}>
      <AppHeader />
    </RouterProvider>
    {/* </Router> */}
  </React.StrictMode>
)
