import Navbar from "./Navbar"

function Home()
{
return (
    <>
    <div className="flex">
        
        {/* Sidebar */}
        <div className="h-screen w-1/4 bg-red-700">
        
        </div>

        {/* Main content */}
        <div className="bg-green-500 flex-1">
            <Navbar></Navbar>
        </div>
    
    </div>
    </>
)
}

export default Home