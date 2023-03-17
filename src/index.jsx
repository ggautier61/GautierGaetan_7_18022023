import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home/home"
import FicheLogement from "./pages/Fiche-Logement/fiche-logement"
import APropos from "./pages/A-Propos/a-propos"
import ErrorPage from "./pages/Error-page/error-page"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import "../src/index.css"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

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
