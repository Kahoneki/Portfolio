import Navbar from "./Navbar"
import { Link } from "react-router-dom";

function PortfolioItem({large, path, projectName, description, repoLink, youtubeLink}: {large: boolean, path:string, projectName:string, description:string, repoLink?:string, youtubeLink?:string})
{
    return (
        <Link to={"/portfolio/" + projectName}
        className={"group rounded-3xl bg-contentSeparator hover:bg-sidebar transition-all duration-300 p-4 lg:p-6 flex flex-col" + (large ? " sm:col-span-2 sm:row-span-2" : "")}>
            
            {/* Image + overlay + description container */}
            <div className="relative w-full">

                {/* Image */}
                <img className="w-full h-full aspect-[2.15/1] object-cover rounded-xl" src={"Images/Thumbnails/" + path}></img>
                
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
            link: "/opengl-render-engine",
            path: "OpenGL Render Engine.png",
            title: "OpenGL Render Engine (Neki)",
            description: "Render Engine built from the ground up in OpenGL using GLFW/GLAD and GLM",
            repoLink: "https://github.com/Kahoneki/OpenGL-Render-Engine",
        },
        {
            large: false,
            link: "/earth-renderer",
            path: "Earth Renderer.jpg",
            title: "Dynamic Tesselation",
            description: "GLSL tesselation shader with dynamic level-of-detail on large Earth topography and bathymetry dataset",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Tesselation",
            youtubeLink: "https://youtu.be/_hhvRQ-iITQ",
        },
        {
            large: false,
            link: "/ocean-wave-simulation",
            path: "Ocean Wave Simulation.jpg",
            title: "Ocean Wave Simulation",
            description: "Sum of sines height displacement + Lambertian diffuse & blinn phong specular lighting model + Skybox for reflections",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/3D",
            youtubeLink: "https://youtu.be/hGlmlG_OGyY",
        },
        {
            large: true,
            link: "/online-ps5-game",
            path: "Online Multiplayer PS5 Game.png",
            title: "Online Multiplayer PS5 Game",
            description: "Cross-Platform action-rts game for Windows and the PS5 featuring online P2P LAN support, custom shaders, and realistic 3D physics",
        },
        {
            large: false,
            link: "/limb-4-limb",
            path: "Limb 4 Limb.png",
            title: "Online Multiplayer Fighting Game",
            description: "C++/SFML real-time online fighting game featuring client-server networking architecture, SQL-backed account system, and Al-driven opponents.",
            repoLink: "https://github.com/Kahoneki/Limb-4-Limb",
            youtubeLink: "https://youtu.be/uM-ZlpQ_S8c",
        },
        {
            large: false,
            link: "/boids",
            path: "Boids.jpg",
            title: "Boids",
            description: "Flocking simulation via Boids algorithm with GPGPU GLSL",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Boids",
            youtubeLink: "https://youtu.be/JbbAuV2iqbg",
        },
        {
            large: false,
            link: "/grass-renderer",
            path: "Grass Renderer.jpg",
            title: "Grass Renderer",
            description: "Demonstration of instanced draw calls, noise heightmap lookup, and dynamic stripified plane generation algorithm",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Data",
            youtubeLink: "https://youtu.be/9_qga-DnfJg",
        },
        {
            large: false,
            link: "/portal-renderer",
            path: "Portal Renderer.jpg",
            title: "Portal Renderer",
            description: "Implementation of an advanced stencil buffer rendering technique",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Portals",
            youtubeLink: "https://youtu.be/KOPil_RIRA4",
        },
        {
            large: false,
            link: "/unity-voxel-engine",
            path: "TotallyNotMinecraft.jpg",
            title: "Unity Voxel Engine",
            description: "Procedurally generated multi-octave chunked voxel terrain with multithreading and face-occlusion",
            repoLink: "https://github.com/Kahoneki/Minecraft-Clone",
        },
        {
            large: false,
            link: "/post-processing",
            path: "Post Processing.jpg",
            title: "Post-Processing",
            description: "Off-screen multi-pass-rendering with MSAA anti-aliasing, saturation, fog, and vignetting",
            repoLink: "https://github.com/Kahoneki/OpenGL/tree/main/Data",
        },
        {
            large: false,
            link: "/depth-of-field",
            path: "Depth of Field.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:gap-8 md:p-8">
        {
            thumbnails.map(t => (
                <PortfolioItem large={t.large} key={t.title} path={t.path} projectName={t.title} description={t.description} repoLink={t.repoLink} youtubeLink={t.youtubeLink}></PortfolioItem>
            ))
        }
        </div>
    </div>
    </>
)
}

export default Portfolio