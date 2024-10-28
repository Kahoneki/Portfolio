import Navbar from "./Navbar"
import { useParams } from "react-router-dom"

function PortfolioItemPage()
{
    const { index } = useParams<{ index: string }>()
    const i = parseInt(index ?? "0", 10)

    const itemPageInfo = [
        // Dynamic Tesselation
        {
            title:"Dynamic Tesselation",
            topLevelImgPath: "Earth Renderer.jpg",
            topLevelDescription: [
                "Tesselation is the process of subdividing a mesh patch, creating more vertices. These new vertices are interpolated between the input vertices (the \"control points\") and can therefore be modified just like any other vertex, letting us effectively control the detail of the mesh by adjusting the number of subdivisions.",
                "We can dynamically adjust the level of detail based on the linearised distance from the camera by making the number of subdivisions for a particular patch be a function of this distance.",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"Tesselated Plane.jpg",
                    description: [
                        "Tesselated Plane with Dynamic Level of Detail.",
                        "Care must be taken to ensure seams of neighbouring patches line up by both having the same outer tesselation level."
                    ]
                },
                {
                    imgPath:"Dynamic LOD With Terrain.jpg",
                    description: [
                        "Displacing terrain according to heightmap",
                    ]
                },
                {
                    imgPath:"Topography.jpg",
                    description: [
                        "43200x21600 tesselated topography map of Earth",
                    ]
                },
                {
                    imgPath:"Bathymetry.jpg",
                    description: [
                        "43200x21600 Tesselated bathymetry map of Earth",
                    ]
                },
                {
                    imgPath:"Cartoon Colours.jpg",
                    description: [
                        "Colour-mixed map of Earth in discrete intervals based on height data",
                    ]
                },
                {
                    imgPath:"Realistic Colours.jpg",
                    description: [
                        "43200x21600 realistic colour map of Earth",
                    ]
                },
            ],
        },

        //Ocean Wave Simulation
        {
            title:"Ocean Wave Simulation",
            topLevelImgPath: "Ocean Wave Simulation.jpg",
            topLevelDescription: [
                "'Sum of Sines' is a famous algorithm for faking water waves in a real-time context. It involves adding up random sine waves of differing amplitudes, frequencies, directions, and speeds to use as heightmap data.",
                "'Lambertian Diffuse + Blinn Phong Specular' is a classic lighting model that involves summing an ambient light component to imitate global illumination with a diffuse component and a specular component to imitate reflections.",
                "In this project, I combine both Sum of Sines and Lambertian Diffuse + Blinn Phong Specular alongside a skybox and fresnel to control the reflections.",
                "I am aware of and interested in looking into more advanced models such as utilising the Fast Fourier Transform.",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"Wave Progress 1.jpeg",
                    description: [
                        "3D perspective camera with a subdivided plane being vertically displaced according to a sine wave.",
                    ]
                },
                {
                    imgPath:"Wave Progress 2.jpeg",
                    description: [
                        "Summing up multiple (2) sine waves going in different directions.",
                    ]
                },
                {
                    imgPath:"Wave Progress 3.jpeg",
                    description: [
                        "Waves of differing amplitude, frequency, direction, and speed.",
                        "Lambertian diffuse shading also added at this point.",
                    ]
                },
                {
                    imgPath:"Wave Progress 4.jpeg",
                    description: [
                        "Chose more appropriate colours and wave parameters",
                        "Added backface culling",
                    ]
                },
                {
                    imgPath:"Wave Progress 5.jpeg",
                    description: [
                        "First attempt at specular reflections",
                    ]
                },
            ],
        },

        //Online Multiplayer Fighting Game
        {
            title:"Online Multiplayer Fighting Game",
            topLevelImgPath: "Limb 4 Limb.png",
            topLevelDescription: [
                "For my 1st year C++ Games Programming coursework project, I made an online real-time fighting game in SFML.",
                "It uses a client-server model with a combined TCP/UDP protocol and a (somewhat) sophisticated structure to maintain synchronisation between clients. The server runs on an oracle linux web instance.",
                "In addition, this project makes use of databases to allow users to create accounts and have their online ranking saved to the server, as well as send match invitations to their friends. The database is handled using the SQLite library.",
                "It also features 5 levels of AI difficulty to choose between for a singleplayer mode and a local mode for both players to play on the same computer.",
                "This project achieved an A+ and was put on the \"Hall of Fame\" to serve as an exemplary project for students the following year.",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
            ],
        },

        //Boids
        {
            title:"Boids",
            topLevelImgPath: "Boids.jpg",
            topLevelDescription: [
                "This algorithm is a common method for simulating flocking behaviour found in birds, fish, bees, etc. By applying just a few simple rules, a very realistic-seeming emergent system is formed.",
                "A compute shader invocation can be ran for each individual boid as the action of one boid on a particular frame does not influence the action of any other boid on the same frame.",
                "This utilises the immense parallel processing power of the GPU - such an algorithm would not be possible if ran sequentially.",
                "This algorithm also makes use of ping-pong buffering to avoid read-write syncing issues",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
            ],
        },

        //Grass Renderer
        {
            title:"Grass Renderer",
            topLevelImgPath: "Grass Renderer.jpg",
            topLevelDescription: [
                "The main time-bottleneck of rendering lots of meshes in real-time is CPU-GPU communication. To be able to render a dense grass field such as this (4 million blades), making millions of draw calls a frame will simply not suffice.",
                "An instanced draw call will combine multiple draw calls into a single one (i.e. rather than \"Hey draw this. Hey draw this again. Hey draw this again. Hey draw this aga-\", you could simply say \"Hey draw this 4 million times\"), eliminating the CPU-GPU communication bottleneck.",
                "Throughout this project, I learnt how to overcome challenges that are encountered when instancing on the GPU - namely, not having access to CPU-side per-instance information like positional data. The solution for this project was to use the bit-representation of the instance id to generate an x and z position."
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"Grass Progress 1.jpeg",
                    description: [
                        "Created a strip-geometry plane generation algorithm with dynamic x-y resolution and size parameters.",
                    ]
                },
                {
                    imgPath:"Grass Progress 2.jpeg",
                    description: [
                        "Added height to terrain with perlin noise texture lookup.",
                    ]
                },
                {
                    imgPath:"Grass Progress 3.PNG",
                    description: [
                        "Added GPU-instanced grass blades.",
                        "The number of instances is an even power of 2 so that the bit representation of the instance ID can be split in half to serve as both the x and z position of each individual blade.",
                    ]
                },
                {
                    imgPath:"Grass Progress 4.PNG",
                    description: [
                        "Added colour to grass blades linearly interpolated based on height between a bottom green colour and a top yellow colour.",
                        "Implementation of a GPU RNG hash function to give each grass blade a random x-z offset to avoid uniformity."
                    ]
                },
                {
                    imgPath:"Grass Progress 5.PNG",
                    description: [
                        "More dense grass field.",
                        "Plane colour made to match bottom of grass colour",
                        "Random height scaling",
                    ]
                },
            ],
        },

        //Portal Renderer
        {
            title:"Portal Renderer",
            topLevelImgPath: "Portal Renderer.jpg",
            topLevelDescription: [
                "",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"",
                    description: [
                        "",
                    ]
                },
            ],
        },

        //Unity Voxel Engine
        {
            title:"Unity Voxel Engine",
            topLevelImgPath: "TotallyNotMinecraft.jpg",
            topLevelDescription: [
                "",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"",
                    description: [
                        "",
                    ]
                },
            ],
        },

        //Post-Processing
        {
            title:"Post-Processing",
            topLevelImgPath: "Post Processing.jpg",
            topLevelDescription: [
                "",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"",
                    description: [
                        "",
                    ]
                },
            ],
        },

        //Depth of Field
        {
            title:"Depth of Field",
            topLevelImgPath: "Depth of Field.jpg",
            topLevelDescription: [
                "",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"",
                    description: [
                        "",
                    ]
                },
            ],
        },

    ]

    return (
        <>
        <div className="flex-col">
            <Navbar></Navbar>

            {/* Single entry (image + description) */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 mb-8">
                
                {/* Image */}
                <div className="bg-contentSeparator h-full p-6 m-4 rounded-3xl">
                    <img src={"/Images/Thumbnails/" + itemPageInfo[i].topLevelImgPath} className="w-full h-full rounded-xl"></img>
                </div>

                {/* Description */}
                <div className="flex flex-col h-full m-4 p-4 gap-y-4 bg-contentSeparator rounded-3xl">
                    <h1 className="h-1/5 pl-4 py-8 bg-linkHover rounded-3xl text-4xl font-bold">{itemPageInfo[i].title}</h1>
                    {
                        itemPageInfo[i].topLevelDescription.map(d => (
                            <p className="flex-1 p-4 bg-linkHover rounded-3xl">{d}</p>
                        ))
                    }
                </div>
                
            </div>

            {/* Group of all described image entries */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                itemPageInfo[i].describedImages.map(di => (
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col">

                            {/* Image */}
                            <div className="bg-contentSeparator p-6 m-4 rounded-3xl">
                                <img src={"/Images/PortfolioItemImages/" + itemPageInfo[i].title + "/" + di.imgPath} className="w-full h-full rounded-xl"></img>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col m-4 mt-0 p-4 gap-y-4 bg-contentSeparator rounded-3xl">
                            {
                                di.description.map(d => (
                                    <p className="flex-1 p-4 bg-linkHover rounded-3xl">{d}</p>
                                ))
                            }
                            </div>

                        </div>
                    </div>
                ))
            }
            </div>

        </div>
        </>
    )
}

export default PortfolioItemPage
