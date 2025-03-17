import Navbar from "./Navbar"
import { Link } from "react-router-dom";

function PortfolioItem({path, projectName, description}: {path:string, projectName:string, description:string})
{
    return (
        <Link to={"/portfolio/" + projectName}
        className="group rounded-3xl col-span-2 first:col-span-3 nth-2:col-span-3 bg-contentSeparator hover:bg-sidebar transition-all duration-300 p-4 lg:p-6">
            
            {/* Image + overlay + description container */}
            <div className="h-5/6 relative">

                {/* Image */}
                <img className="w-full h-full aspect-16/9 object-cover rounded-xl" src={"Images/Thumbnails/" + path}></img>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-80 hidden group-hover:block transition-all duration-300"></div>
            
                {/* Description */}
                <p className="absolute -bottom-12 px-2 text-center text-thumbnailHoverDescription opacity-0 group-hover:bottom-2 group-hover:opacity-100 transition-all duration-300">{description}</p>

            </div>

            <p className="text-center font-bold text-base lg:text-xl translate-y-4 transition-all duration-300">{projectName}</p>
        </Link>
    )
}

function Portfolio()
{

    const thumbnails = [
        {
            link: "/opengl-render-engine",
            path: "OpenGL Render Engine.jpg",
            title: "OpenGL Render Engine (Neki)",
            description: "Render Engine built from the ground up in OpenGL using GLFW/GLAD and GLM",
        },
        {
            link: "/online-ps5-game",
            path: "Online Multiplayer PS5 Game.jpg",
            title: "Online Multiplayer PS5 Game",
            description: "Cross-Platform action-rts game for Windows and the PS5 featuring online P2P LAN support, custom shaders, and realistic 3D physics",
        },
        {
            link: "/earth-renderer",
            path: "Earth Renderer.jpg",
            title: "Dynamic Tesselation",
            description: "GLSL tesselation shader with dynamic level-of-detail on large Earth topography and bathymetry dataset",
        },
        {
            link: "/ocean-wave-simulation",
            path: "Ocean Wave Simulation.jpg",
            title: "Ocean Wave Simulation",
            description: "Sum of sines height displacement + Lambertian diffuse & blinn phong specular lighting model + Skybox for reflections",
        },
        {
            link: "/limb-4-limb",
            path: "Limb 4 Limb.png",
            title: "Online Multiplayer Fighting Game",
            description: "C++/SFML real-time online fighting game featuring client-server networking architecture, SQL-backed account system, and Al-driven opponents.",
        },
        {
            link: "/boids",
            path: "Boids.jpg",
            title: "Boids",
            description: "Flocking simulation via Boids algorithm with GPGPU GLSL",
        },
        {
            link: "/grass-renderer",
            path: "Grass Renderer.jpg",
            title: "Grass Renderer",
            description: "Demonstration of instanced draw calls, noise heightmap lookup, and dynamic stripified plane generation algorithm",
        },
        {
            link: "/portal-renderer",
            path: "Portal Renderer.jpg",
            title: "Portal Renderer",
            description: "Implementation of an advanced stencil buffer rendering technique",
        },
        {
            link: "/unity-voxel-engine",
            path: "TotallyNotMinecraft.jpg",
            title: "Unity Voxel Engine",
            description: "Procedurally generated multi-octave chunked voxel terrain with multithreading and face-occlusion",
        },
        {
            link: "/post-processing",
            path: "Post Processing.jpg",
            title: "Post-Processing",
            description: "Off-screen deferred-rendering with MSAA anti-aliasing, saturation, fog, and vignetting",
        },
        {
            link: "/depth-of-field",
            path: "Depth of Field.jpg",
            title: "Depth of Field",
            description: "Deferred-rendering algorithm making use of 2D parallel prefix sums, ping-pong buffering, and summed area tables",
        },

      ];

return (
    <>
    <Navbar></Navbar>
    <h1 className="text-5xl font-bold pt-6 text-center">Click to learn more!</h1>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-4 p-8">
    {
        thumbnails.map(t => (
            <PortfolioItem key={t.title} path={t.path} projectName={t.title} description={t.description}></PortfolioItem>
        ))
    }
    </div>
    </>
)
}

export default Portfolio
