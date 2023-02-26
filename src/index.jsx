import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import FicheLogement from "./pages/Fiche-Logement"
import APropos from "./pages/A-Propos"
import ErrorPage from "./pages/Error-page"
// import ErrorPage2 from "./pages/ErrorPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "../src/index.css"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//     ],
//   },
// ])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/logement/:id",
//     element: <FicheLogement />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/a-propos",
//     element: <APropos />,
//   },
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="logement/:id" element={<FicheLogement />} />
        <Route path="error-page" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
