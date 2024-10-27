import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

function App() {
return (
  <>

  <BrowserRouter>
  {/* Main page */}
  <div className="bg-stone-800 text-stone-50 h-screen">
    {/* Page content */}
    <div>
      {/* BrowserRouter element will be replaced with Route element for appropriate path lookup
      (e.g.: if url path="/", it will be replaced with Home element) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>

  </div>
  </BrowserRouter>
  </>
)
}

export default App
