import { HashRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import PortfolioItemPage from "./PortfolioItemPage"
import Blog from "./Blog"
import BlogPost from "./BlogPost"
import Navbar from "./Navbar"


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

  <HashRouter>
  {/* Main page */}
  <div className="bg-background text-text h-full min-h-screen">
    {/* Page content */}
    <div>

      <ScrollToTopOnSiteChange></ScrollToTopOnSiteChange>

      {/* HashRouter element will be replaced with Route element for appropriate path lookup
      (e.g.: if url path="/", it will be replaced with Home element) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectName" element={<PortfolioItemPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost/>} />
        
        {/* Fallback */}
        <Route path="*" element={
            <div className="flex flex-col">
                <Navbar></Navbar>
                <img src="Images/favicon.png" className="mt-16 mx-auto flex-1 h-1/6 w-1/6"></img>
                <p className="font-bold mx-auto mt-8 text-4xl text-center">Error 404: Page not found!</p>
            </div>
        }/>

      </Routes>
    </div>
  </div>
  </HashRouter>

  </>
)
}

export default App
