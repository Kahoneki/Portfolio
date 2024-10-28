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
