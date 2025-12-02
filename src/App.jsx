import { Route, Routes } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import Main from "../components/main"
import About from "./pages/About"
import Partners from "./pages/Partners"
import Charts from "./pages/Charts"
import Social from "./pages/Social"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/social" element={<Social />} />
            </Routes>
            <Footer />
        </div>
    ) 
}

export default App
