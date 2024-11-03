import Navbar from "./Navbar"

function Contact()
{
return (
    <>
    <div className="flex flex-col h-screen">
        <Navbar></Navbar>
        <div className="w-4/5 mx-auto h-64 my-auto relative -top-16 md:-top-24 lg:-top-32 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Contact me here!</h1>
            <div className="flex flex-row w-1/2 mx-auto justify-center gap-x-8 md:gap-x-16 lg:gap-x-48">
                <a href="https://www.linkedin.com/in/ava-imray-1106a9237/">
                    <img src="Images/linkedin icon.png" className="w-[8rem] pt-6"></img>
                </a>
                <a href="https://bsky.app/profile/kahoneki.bsky.social">
                    <img src="Images/bluesky icon.png" className="w-[9rem] pt-6"></img>
                </a>
            </div>
        </div>
    </div>
    </>
)
}

export default Contact
