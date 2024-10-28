import Navbar from "./Navbar"
import { useParams } from "react-router-dom"

function PortfolioItemPage()
{
    const { index } = useParams<{ index: string }>()
    const i = parseInt(index ?? "0", 10)

    const itemPageInfo = [
        {
            title:"Dynamic Tesselation",
            topLevelImgPath: "Earth Renderer.jpg",
            topLevelDescription: [
                "Tesselation is the process of subdividing a mesh patch, creating more vertices. These new vertices are interpolated between the input vertices (the \"control points\") and can therefore be modified just like any other vertex, letting us effectively control the detail of the mesh by adjusting the number of subdivisions.",
                "We can dynamically adjust the level of detail based on the linearised distance from the camera by making the number of subdivisions for a particular patch be a function of this distance.",
                // "This project features a 43200x21600 topography map of the Earth, a 43200x21600 bathymetry map, and a 43200x21600 colour map. All images were split into 8 parts which are stitched together at runtime. Without dynamic level-of-detail, this would not be possible (and indeed it runs incredibly slow when dynamic LOD is turned off).",
            ],
            describedImages: [
                {
                    imgPath:"Boids.jpg",
                    description:"Boids?!"
                },
                {
                    imgPath:"Limb 4 Limb.png",
                    description:"LIMBS!!"
                }
            ]
        }

    ]

    return (
        <>
        <div className="flex-col h-screen">
            <Navbar></Navbar>

            {/* Single entry (image + description) */}
            <div className="flex-1 flex flex-row">
                
                {/* Image */}
                <div className="bg-contentSeparator p-6 w-1/2 h-full m-4 rounded-3xl">
                    <img src={"/Images/Thumbnails/" + itemPageInfo[i].topLevelImgPath} className="w-full h-full rounded-xl"></img>
                </div>

                {/* Description */}
                <div className="flex-1 flex flex-col h-1/2 mt-4 mr-4 p-4 gap-y-4 bg-contentSeparator rounded-3xl">
                    <h1 className="h-1/5 p-4 bg-linkHover rounded-3xl text-4xl font-bold">{itemPageInfo[i].title}</h1>
                    {
                        itemPageInfo[i].topLevelDescription.map(d => (
                            <p className="flex-1 p-4 bg-linkHover rounded-3xl">{d}</p>
                        ))
                    }
                </div>
                
            </div>
        </div>
        </>
    )
}

export default PortfolioItemPage