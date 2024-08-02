import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import OfferReq from "./components/OfferReq"
import Navigation from "./components/Navigation"
import "./styles.css"
import Footer from "./components/Footer"
import ScrollToAnchor from "./components/ScrollToAnchor"

const App = () => {

  return (
    <Router>
      <div className="container">
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#palvelut" element={<Home />} />
        <Route path="/#kuvat" element={<Home />} />
        <Route path="/tarjouspyynto" element={<OfferReq />}/>
        <Route path="/#yhteystiedot" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToAnchor />
    </Router>
  )
}

export default App
