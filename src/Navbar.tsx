import { useLocation } from "react-router-dom"


function NavbarItem({href, children, pathname}: {href: string, children: React.ReactNode, pathname: string})
{
    return (
        <a className={"h-full flex-1 flex items-center justify-center text-xl hover:font-bold hover:bg-linkHover hover:text-2xl transition-all duration-300 " + ((pathname == href) ? "font-bold" : "")} href={href}>{children}</a>
    )
}


function Navbar()
{
    let location = useLocation()

return (
    <>
    <div className="flex flex-row justify-between h-16 w-full items-center bg-sidebar sticky top-0 z-10">

        {location.pathname == "/" ? <></> : <NavbarItem href="/" pathname={location.pathname}>Home</NavbarItem>}
        <NavbarItem href="/about" pathname={location.pathname}>About</NavbarItem>
        <NavbarItem href="/portfolio" pathname={location.pathname}>Portfolio</NavbarItem>
        <NavbarItem href="/contact" pathname={location.pathname}>Contact</NavbarItem>
    
    </div>
    </>
)
}

export default Navbar