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
            path: "Neki.png",
            title: "Vulkan + DX12 Game Engine (Neki)",
            description: "High Performance game engine built on top of a Vulkan/DX12 RHI layer with online support and out-of-core rendering (Windows/Linux)"
        },
        {
            path: "Online Multiplayer PS5 Game.png",
            title: "Online Multiplayer PS5 Game",
            description: "Cross-Platform action-rts game for Windows and the PS5 featuring online P2P LAN support, custom shaders, and realistic 3D physics"
        },
        {
            path: "OpenGL Render Engine.png",
            title: "OpenGL Render Engine (NekiGL)",
            description: "Render Engine built from the ground up in OpenGL using GLFW/GLAD and GLM"
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
            path: "Portal Renderer.jpg",
            title: "Portal Renderer",
            description: "Implementation of an advanced stencil buffer rendering technique"
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


        return (
        <>
            {/* Main container. Column by default (for mobile). Row for large screens (lg:). */}
            <div className="flex flex-col lg:flex-row">

                {/* Sidebar/top info section. By default, it's just a block with padding. On large screens (lg:), it becomes a fixed-width, full-height sidebar. */}
                <div className="w-full bg-sidebar px-6 pt-10 flex flex-col justify-center lg:h-screen lg:w-1/4 lg:p-6">
                    <img className="rounded-full aspect-square w-2/3 mx-auto border-solid border-background border-4 shadow-[0px_0px_15px_10px] shadow-background" src="Images/me.jpg" alt="A photo of Ava Imray"></img>
                    <ul className="mt-8 font-medium pl-4 pt-4 space-y-8 list-disc">
                        <li>Graphics Programmer specialising in GPGPU and high-performance compute applications</li>
                        <li>3rd year student studying BSc (Hons) Computer Games Technology @ Abertay University</li>
                        <li>Passionate about leveraging GPU capabilities beyond traditional rendering for computational challenges.</li>
                    </ul>

                    {/* Socials */}
                    <div className="flex justify-between items-center my-4 lg:my-8">
                        <a href="https://www.linkedin.com/in/ava-imray-1106a9237/" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline ml-5">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Kahoneki" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline mr-10">
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Navbar and carousel */}
                <div className="flex flex-col flex-1 w-full lg:w-3/4">
                    <Navbar />
                    {/* Carousel section */}
                    <div className="text-black pt-8 px-8 w-full flex-1 bg-background border-solid border-contentSeparator border-t-[8px] lg:border-l-[8px]">
                        <Swiper className="h-full"
                            modules={[Autoplay, Navigation, Pagination]}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            navigation
                            pagination
                            spaceBetween={50}
                            slidesPerView={1} //Mobile default
                            breakpoints={{
                                //On screens 1024px and up, show 1.25 slides
                                1024: {
                                    slidesPerView: 1.25,
                                }
                            }}
                            centeredSlides={true}
                            loop={true}
                        >
                            {
                                carousel.map(c => (
                                    <SwiperSlide key={c.title}>
                                        <Link to={"/portfolio/" + c.title}>
                                            <img className="object-containh-[50vh] lg:h-5/6 aspect-video rounded-xl bg-sidebar" src={"Images/Thumbnails/" + c.path} alt={c.title}></img>
                                            <p className="mt-4 text-center text-text font-bold">{c.title}</p>
                                            <p className="text-center text-text mb-6">{c.description}</p>
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

export default Home
