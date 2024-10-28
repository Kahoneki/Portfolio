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

        //
        {
            title:"",
            topLevelImgPath: "",
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
                    <h1 className="h-1/5 p-4 bg-linkHover rounded-3xl text-4xl font-bold">{itemPageInfo[i].title}</h1>
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