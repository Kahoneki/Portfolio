import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import PortfolioItemPage from "./PortfolioItemPage"
import Contact from "./Contact"


function ScrollToTopOnSiteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]) //Dependency = pathname, so when pathname changes, this useEffect() function will run

  return null
}


function App() {
return (
  <>

  <BrowserRouter>
  {/* Main page */}
  <div className="bg-background text-text h-full min-h-screen">
    {/* Page content */}
    <div>

      <ScrollToTopOnSiteChange></ScrollToTopOnSiteChange>

      {/* BrowserRouter element will be replaced with Route element for appropriate path lookup
      (e.g.: if url path="/", it will be replaced with Home element) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectName" element={<PortfolioItemPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </div>
  </BrowserRouter>

  </>
)
}

export default App
