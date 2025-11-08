import Navbar from "./Navbar"
import { Link } from "react-router-dom";

function PortfolioItem({large, path, objContain, paddingX, projectName, description, repoLink, youtubeLink}: {large: boolean, path:string, objContain:boolean, paddingX?:number, projectName:string, description:string, repoLink?:string, youtubeLink?:string})
{
    return (
        <Link to={"/portfolio/" + projectName}
        className={"group rounded-3xl bg-contentSeparator hover:bg-sidebar transition-all duration-300 p-4 lg:p-6 flex flex-col" + (large ? " sm:col-span-2 sm:row-span-2" : "")}>
            
            {/* Image + overlay + description container */}
            <div className="relative w-full">

                {/* Image */}
                <img src={"Images/Thumbnails/" + path} className={"w-full h-full aspect-[2.15/1] rounded-xl " + (objContain ? "object-contain" : "object-cover") + " px-" + paddingX}></img>
                
                {/* Conditionally render GitHub and YouTube icons */}
                {
                    repoLink && (
                        <img src="Images/github.svg" className={"absolute z-9 bottom-3 right-3 w-10 h-10" + (large ? " sm:bottom-6 sm:right-6 sm:w-20 sm:h-20" : " ")} alt="Contains public GitHub repository"/>
                    )
                }
                {
                    youtubeLink && (
                        <img src="Images/youtube.png" className={"absolute z-9 bottom-3 left-3 h-10" + (large ? " sm:bottom-6 sm:right-6 sm:h-20" : " ")} alt="Contains YouTube video demonstration"/>
                    )
                }

                {/* Gradient overlay */}
                <div className="rounded-xl absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 hidden group-hover:block transition-all duration-300"></div>
            
                {/* Description */}
                <p className={"absolute -bottom-12 px-4 text-center text-thumbnailHoverDescription opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-300" + (large ? " text-sm sm:text-4xl" : " text-sm md:text-lg")}>{description}</p>
            </div>

            {/* Wrapper div to vertically center the title */}
            <div className="flex flex-grow items-center justify-center">
                <p className={"text-center font-bold pt-4 transition-all duration-300 text-lg" + (large ? " sm:text-2xl md:text-4xl lg:text-5xl" : " sm:text-xl")}>{projectName}</p>
            </div>
        </Link>
    )
}

function Portfolio()
{

    const thumbnails = [
        {
            large: true,
            link: "/neki",
            path: "Neki.png",
            objContain: false,
            paddingX: 20,
            title: "Vulkan + DX12 Game Engine (Neki)",
            description: "Game engine built on top of a Vulkan/DX12 RHI layer with online support and out-of-core rendering (Windows/Linux)",
            repoLink: "https://github.com/Kahoneki/Neki",
        },
        {
            large: false,
            link: "/opengl-render-engine",
            path: "OpenGL Render Engine.png",
            objContain: false,
            paddingX: 0,
            title: "OpenGL Render Engine (NekiGL)",
            description: "Render engine built from the ground up in OpenGL using GLFW/GLAD and GLM",
            repoLink: "https://github.com/Kahoneki/OpenGL-Render-Engine",
        },
        {
            large: false,
            link: "/limb-4-limb",
            path: "Limb 4 Limb.png",
            objContain: false,
            paddingX: 0,
            title: "Online Multiplayer Fighting Game",
            description: "C++/SFML real-time online fighting game featuring client-server networking architecture, SQL-backed account system, and Al-driven opponents.",
            repoLink: "https://github.com/Kahoneki/Limb-4-Limb",
            youtubeLink: "https://youtu.be/uM-ZlpQ_S8c",
        },
        {
            large: false,
            link: "/earth-renderer",
            path: "Earth Renderer.jpg",
            objContain: false,
            title: "Dynamic Tesselation",
            description: "GLSL tesselation shader with dynamic level-of-detail on large Earth topography and bathymetry dataset",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Tesselation",
            youtubeLink: "https://youtu.be/_hhvRQ-iITQ",
        },
        {
            large: false,
            link: "/ocean-wave-simulation",
            path: "Ocean Wave Simulation.jpg",
            objContain: false,
            paddingX: 0,
            title: "Ocean Wave Simulation",
            description: "Sum of sines height displacement + Lambertian diffuse & blinn phong specular lighting model + Skybox for reflections",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/3D",
            youtubeLink: "https://youtu.be/hGlmlG_OGyY",
        },
        {
            large: false,
            link: "/boids",
            path: "Boids.jpg",
            objContain: false,
            paddingX: 0,
            title: "Boids",
            description: "Flocking simulation via Boids algorithm with GPGPU GLSL",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Boids",
            youtubeLink: "https://youtu.be/JbbAuV2iqbg",
        },
        {
            large: false,
            link: "/grass-renderer",
            path: "Grass Renderer.jpg",
            objContain: false,
            paddingX: 0,
            title: "Grass Renderer",
            description: "Demonstration of instanced draw calls, noise heightmap lookup, and dynamic stripified plane generation algorithm",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Data",
            youtubeLink: "https://youtu.be/9_qga-DnfJg",
        },
        {
            large: true,
            link: "/online-ps5-game",
            path: "Online Multiplayer PS5 Game.png",
            objContain: false,
            paddingX: 0,
            title: "Online Multiplayer PS5 Game",
            description: "Cross-Platform action-rts game for Windows and the PS5 featuring online P2P LAN support, custom shaders, and realistic 3D physics",
        },
        {
            large: false,
            link: "/portal-renderer",
            path: "Portal Renderer.jpg",
            objContain: false,
            paddingX: 0,
            title: "Portal Renderer",
            description: "Implementation of an advanced stencil buffer rendering technique",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Portals",
            youtubeLink: "https://youtu.be/KOPil_RIRA4",
        },
        {
            large: false,
            link: "/unity-voxel-engine",
            path: "TotallyNotMinecraft.jpg",
            objContain: false,
            paddingX: 0,
            title: "Unity Voxel Engine",
            description: "Procedurally generated multi-octave chunked voxel terrain with multithreading and face-occlusion",
            repoLink: "https://github.com/Kahoneki/Minecraft-Clone",
        },
        {
            large: false,
            link: "/post-processing",
            path: "Post Processing.jpg",
            objContain: false,
            paddingX: 0,
            title: "Post-Processing",
            description: "Off-screen multi-pass-rendering with MSAA anti-aliasing, saturation, fog, and vignetting",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Data",
        },
        {
            large: false,
            link: "/depth-of-field",
            path: "Depth of Field.jpg",
            objContain: false,
            paddingX: 0,
            title: "Depth of Field",
            description: "Multi-pass-rendering algorithm making use of 2D parallel prefix sums, ping-pong buffering, and summed area tables",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Compute%20Shaders",
            youtubeLink: "https://youtu.be/53Yq-Uiqcok",
        },

      ];

return (
    <>
    <Navbar></Navbar>
    <div className="p-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Click to learn more!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:gap-8 md:pt-10 md:px-24">
        {
            thumbnails.map(t => (
                <PortfolioItem large={t.large} key={t.title} path={t.path} objContain={t.objContain} paddingX={t.paddingX} projectName={t.title} description={t.description} repoLink={t.repoLink} youtubeLink={t.youtubeLink}></PortfolioItem>
            ))
        }
        </div>
    </div>
    </>
)
}

export default Portfolio