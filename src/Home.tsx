import Navbar from "./Navbar"

function Home()
{
return (
    <>
    <div className="flex flex-row">
        
        {/* Sidebar */}
        <div className="h-screen w-1/4 bg-sidebar p-6 space-y-4">
        <img className="rounded-full aspect-square w-2/3 mx-auto mt-10 border-solid border-background border-4 shadow-[0px_0px_15px_10px] shadow-background" src="Images/me.jpg"></img>
        <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis! Fuga sint error nihil officiis pariatur labore deleniti
            odio eos hic officia est recusandae quo iure, temporibus quidem fugiat aspernatur!
        </p>
        </div>

        {/* Main content */}
        <div className="bg-background flex-1">
            <Navbar></Navbar>
        </div>
    
    </div>
    </>
)
}

export default Home