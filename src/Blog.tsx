import Navbar from "./Navbar"

function Blog()
{
return (
    <>
    <div className="flex flex-col h-screen">
        <Navbar></Navbar>
        <div className="flex flex-row w-screen h-full bg-green-500">

            {/*Contents Left*/}
            <div className="w-1/6 bg-red-500">
                
            </div>
            
            {/*Main Page*/}
            <div className="w-full bg-blue-500">
                <h1 className="font-extrabold text-4xl">Under Development</h1>
            </div>
            
            {/*Contents Right*/}
            <div className="w-1/6 bg-orange-500">
            
            </div>
        </div>

        {/* <div className="w-4/5 mx-auto h-64 my-auto relative -top-16 md:-top-24 lg:-top-32 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Contact me here!</h1>
            <div className="flex flex-row w-1/2 mx-auto justify-center gap-x-8 md:gap-x-16 lg:gap-x-48">
                <a href="https://www.linkedin.com/in/ava-imray-1106a9237/">
                    <img src="Images/linkedin icon.png" className="w-[8rem] pt-6"></img>
                </a>
                <a href="https://bsky.app/profile/kahoneki.bsky.social">
                    <img src="Images/bluesky icon.png" className="w-[9rem] pt-6"></img>
                </a>
            </div>
        </div> */}
    </div>
    </>
)
}

export default Blog
