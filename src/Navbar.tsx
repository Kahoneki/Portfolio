import { useLocation } from "react-router-dom"

function Navbar()
{
    let location = useLocation()
return (
    <>
    <div className="flex justify-between h-16 items-center">
        <a href="./" className={(location.pathname == "/" ? "hidden " : "") + "flex-1 text-center"}>Home</a>
        <a href="./about" className="flex-1 text-center">About</a>
        <a href="./portfolio" className="flex-1 text-center">Portfolio</a>
        <a href="./contact" className="flex-1 text-center">Contact</a>
    </div>
    </>
)
}

export default Navbar