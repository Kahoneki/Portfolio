import Navbar from "./Navbar"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import {Link}  from "react-router-dom";

// Import Swiper styles
import 'swiper/swiper-bundle.css';

function Home()
{

    const carousel = [
        {
            path: "OpenGL Render Engine.png",
            title: "OpenGL Render Engine (Neki)",
            description: "Render Engine built from the ground up in OpenGL using GLFW/GLAD and GLM"
        },
        {
            path: "Online Multiplayer PS5 Game.png",
            title: "Online Multiplayer PS5 Game",
            description: "Cross-Platform action-rts game for Windows and the PS5 featuring online P2P LAN support, custom shaders, and realistic 3D physics"
        },
        {
            path: "Earth Renderer.jpg",
            title: "Dynamic Tesselation",
            description: "GLSL tesselation shader with dynamic level-of-detail on large Earth topography and bathymetry dataset"
        },
        {
            path: "Limb 4 Limb.png",
            title: "Online Multiplayer Fighting Game",
            description: "C++/SFML real-time online fighting game featuring client-server networking architecture, SQL-backed account system, and Al-driven opponents."
        },
        {
            path: "Ocean Wave Simulation.jpg",
            title: "Ocean Wave Simulation",
            description: "Sum of sines height displacement + Lambertian diffuse & blinn phong specular lighting model + Skybox for reflections"
        },
        {
            path: "Depth of Field.jpg",
            title: "Depth of Field",
            description: "Multi-pass-rendering algorithm making use of 2D parallel prefix sums, ping-pong buffering, and summed area tables"
        },
        {
            path: "Boids.jpg",
            title: "Boids",
            description: "Flocking simulation via Boids algorithm with GPGPU GLSL"
        },
        {
            path: "Grass Renderer.jpg",
            title: "Grass Renderer",
            description: "Demonstration of instanced draw calls, noise heightmap lookup, and dynamic stripified plane generation algorithm"
        },
        {
            path: "Portal Renderer.jpg",
            title: "Portal Renderer",
            description: "Implementation of an advanced stencil buffer rendering technique"
        },
        {
            path: "TotallyNotMinecraft.jpg",
            title: "Unity Voxel Engine",
            description: "Procedurally generated multi-octave chunked voxel terrain with multithreading and face-occlusion"
        },
        {
            path: "Post Processing.jpg",
            title: "Post-Processing",
            description: "Off-screen multi-pass-rendering with MSAA anti-aliasing, saturation, fog, and vignetting"
        },

      ];


// Check for aspect ratio - if vertical display, render differently
// console.log(screen.availWidth / screen.availHeight)
if (screen.availWidth / screen.availHeight < 1.25 || screen.availWidth < 600 || screen.availHeight < 600) {
// Vertical
return (
    <>  
    <div className="flex flex-col">
        {/* Top */}
        <Navbar></Navbar>
        <div className="pt-10 bg-sidebar px-6 flex flex-col justify-center">
        <img className="rounded-full aspect-square w-2/3 mx-auto border-solid border-background border-4 shadow-[0px_0px_15px_10px] shadow-background" src="Images/me.jpg"></img>
        <ul className="mt-8 font-medium pl-4 pt-4 space-y-8 list-disc">
            <li>Graphics Programmer specialising in GPGPU and high-performance compute applications</li>
            <li>2nd year student studying BSc (Hons) Computer Games Technology @ Abertay University</li>
            <li>Passionate about leveraging GPU capabilities beyond traditional rendering for computational challenges.</li>
        </ul>

        {/* Contacts */}
        <div className="flex justify-between items-center mt-4 mb-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ava-imray-1106a9237/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline ml-5">
                LinkedIn
            </a>

            {/* GitHub */}
            <a href="https://github.com/Kahoneki" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline mr-10">
                GitHub
            </a>
        </div>

        </div>

        {/* Swiper */}
        <div className="text-black pt-8 px-8 mb-4 w-full flex-1 bg-background border-solid border-contentSeparator border-t-[8px]">
        <Swiper className="h-full"
        modules={[Autoplay, Pagination]}
        autoplay={{
            delay: 6000, // Set delay in ms
            disableOnInteraction: false, // Continues autoplay after user interaction
            }}
        pagination
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        
        {
            carousel.map(c => (
                <SwiperSlide>
                    <Link to={"/portfolio/" + c.title}>
                        <img className="object-cover h-5/6 w-full rounded-xl" src={"Images/Thumbnails/" + c.path}></img>
                        <p className="mt-4 text-center text-text font-bold">{c.title}</p>
                        <p className="text-center text-text mb-6">{c.description}</p>
                    </Link>
                </SwiperSlide>
            ))
        }
        </Swiper>
        </div>
    </div>
    </>
)
}
else {
//Horizontal
return (
    <>
    <div className="flex flex-row">
        
        {/* Sidebar */}
        <div className="h-screen w-1/4 bg-sidebar px-6 flex flex-col justify-center">
        <img className="rounded-full aspect-square w-2/3 mx-auto border-solid border-background border-4 shadow-[0px_0px_15px_10px] shadow-background" src="Images/me.jpg"></img>
        <ul className="mt-8 font-medium pl-4 pt-4 space-y-8 list-disc">
            <li>Graphics Programmer specialising in GPGPU and high-performance compute applications</li>
            <li>2nd year student studying BSc (Hons) Computer Games Technology @ Abertay University</li>
            <li>Passionate about leveraging GPU capabilities beyond traditional rendering for computational challenges.</li>
        </ul>

        {/* Contacts */}
        <div className="flex justify-between items-center mt-8">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ava-imray-1106a9237/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline ml-5">
                LinkedIn
            </a>

            {/* GitHub */}
            <a href="https://github.com/Kahoneki" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline mr-10">
                GitHub
            </a>
        </div>

        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-3/4">
            <Navbar></Navbar>
            <div className="text-black pt-8 px-8 w-full flex-1 bg-background border-solid border-contentSeparator border-t-[8px] border-l-[8px]">
            <Swiper className="h-full"
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
                delay: 6000, // Set delay in ms
                disableOnInteraction: false, // Continues autoplay after user interaction
                }}
            navigation
            pagination
            spaceBetween={50}
            slidesPerView={1.25}
            centeredSlides={true}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            
            {
                carousel.map(c => (
                    <SwiperSlide>
                        <Link to={"/portfolio/" + c.title}>
                            <img className="object-cover h-5/6 w-full rounded-xl" src={"Images/Thumbnails/" + c.path}></img>
                            <p className="mt-4 text-center text-text font-bold">{c.title}</p>
                            <p className="text-center text-text">{c.description}</p>
                        </Link>
                    </SwiperSlide>
                ))
            }
            </Swiper>
            </div>
        </div>
    </div>
    </>
)
}

}

export default Home
