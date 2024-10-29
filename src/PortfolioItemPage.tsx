import Navbar from "./Navbar"
import { useParams } from "react-router-dom"

function PortfolioItemPage()
{
    const { projectName } = useParams<{ projectName: string }>()

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
                "The stencil buffer is a screenspace texture that can be attached to a framebuffer. Unlike the colour and depth buffer, it holds arbitrary data that can be used for any purpose.",
                "In this program, I render the scene as usual, then render portal A while writing a 1 into the stencil buffer for every rendered pixel; this effectively creates a portal-shaped silhouette of 1s in the buffer - this silhouette is otherwise known as a mask.",
                "Then, the scene is rendered again but from the perspective of portal B, and only where there is a 1 in the stencil buffer. Only part of the scene will therefore be rendered: the part inside the portal mask.",
                "Note that care must be taken to ensure that the position of the camera during the second pass lines up with what the player expects to see through the portal. This is achieved by effectively mapping the player's transform relative to portal A and applying it to the transform of portal B. This gives us the location and rotation of the view matrix from which the scene should be rendered for the second pass.",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
            ],
        },

        //Unity Voxel Engine
        {
            title:"Unity Voxel Engine",
            topLevelImgPath: "TotallyNotMinecraft.jpg",
            topLevelDescription: [
                `Based on Minecraft, this Unity Project features:
- Procedurally generated multi-octave voxel terrain.
- Infinite terrain implemented in chunks over multiple threads.
- Voxel-based occlusion culling algorithm.
- Tree generation algorithm.
- Raycasting and face highlighting.
- UV mapping with texture atlas.
- Opaque and transparent block types.
- Block placing and breaking.
- F3 debug menu.
- Character controller with ground + flight controls.`,
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
            ],
        },

        //Post-Processing
        {
            title:"Post-Processing",
            topLevelImgPath: "Post Processing.jpg",
            topLevelDescription: [
                "Deferred rendering is the practice of rendering your scene to a separate framebuffer (i.e.: not the one that gets displayed to the user), then using the colour buffer from the offscreen framebuffer as a normal texture, it can be drawn to the default framebuffer as a quad on the screen.",
                "Doing this allows you to add a post-processing pass on your scene, effects such as saturation, fog, and vignetting are applied at this stage and are implemented in the picture on the left.",
                "This project also features MSAA which is an anti-aliasing technique that splits pixels into a number of smaller subpixel sample points that, when intersected by a polygon, will run a single fragment shader invocation that affects all intersected points and save the colour into the intersecting subpixels. Once the whole scene has been rendered, the colour data stored in each sample point is blended together, creating an anti-aliased effect where polygons that intersect with more of the sample points (taking up more of the pixel) will have a greater effect on the final colour.",
                "On top of this, this project also taught me about the many ways of controlling MSAA such as setting sample-alpha-coverage, mask-inversion, sample-rate-shading, multi-sampled textures and framebuffers, etc.",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
            ],
        },

        //Depth of Field
        {
            title:"Depth of Field",
            topLevelImgPath: "Depth of Field.jpg",
            topLevelDescription: [
                "A prefix sum is an algorithm which takes as input an array of numbers and returns a new array of numbers where each element is the sum of all the elements up to that point in the original list. Given the algorithm's sequential tallying nature, at first glance, it would seem to not lend itself very well to being parallelised. However, this is in fact an extremely parallelisable algorithm with a parallel time complexity of O(log(n)). This algorithm has been used here to generate a convincing depth of field effect.",
                "By deferring the rendering of each frame, we can grab the colour data and run a 2D parallel prefix sum on it. This is done by running two passes of the parallel prefix sum and at the end of each iteration, transposing the image. This means that at the end of the first pass, it's in the correct orientation for the second pass, and after the second pass it has been transposed twice and hence is back to its original orientation.",
                "By running the 2D parallel prefix sum, we have now created what is known as a Summed Area Table (SAT). With a given SAT, it is possible to extract a sub-SAT for any rectangle within the table that represents the SAT of that rectangle! In other words, this sub-SAT contains the same data as if we had run the 2D parallel prefix sum specifically on that smaller region. This allows us to compute the 2D prefix sum of any sub rectangle within the image.",
                "At this point, it's possible to blur the frame by choosing a \"kernel size\" (aka the radius of the rectangle). Then, for each pixel, we can create a sub-SAT to get the sum of all pixels in a rectangle centered around it, and since we have the area of the rectangle (double the kernel size squared), we can divide by the area and get the average colour. By doing this for every pixel in the image, we get a blurred image where the blur strength is proportional to the kernel size.",
                "Since we have access to the depth information in the scene, we can use it to create a variable kernel size that differs between pixels. The kernel size can be expressed as a function of a pixel's depth, and a provided constant focal distance and focal depth. Such a function should take pixels whose depth values are at the focal depth and return a kernel size of 0.5 (meaning a box diameter of 1 and hence no blurring for that pixel) and linearly increase the kernel size the further a pixel is from the focal distance at a rate inversely proportional to the focal depth.",
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
            ],
        },

    ]

    let portfolioItem = itemPageInfo.find(info => info.title == projectName)

    if (portfolioItem == undefined) {
        console.log(("Page not found"));
        
        return (
            <>
            <div className="flex flex-col">
                <Navbar></Navbar>
                <img src="/Images/favicon.png" className="mt-16 mx-auto flex-1 h-1/6 w-1/6"></img>
                <p className="font-bold mx-auto mt-8 text-4xl text-center">Error 404: Page not found!</p>
            </div>
            </>
        )
    }

    return (
        <>
        <div className="flex flex-col">
            <Navbar></Navbar>

            {/* Single entry (image + description) */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 mb-8">
                
                {/* Image */}
                <div className="bg-contentSeparator h-full max-h-[600px] p-6 m-4 rounded-3xl sticky top-20">
                    <img src={"/Images/Thumbnails/" + portfolioItem.topLevelImgPath} className="w-full h-full rounded-xl object-cover"></img>
                </div>

                {/* Description */}
                <div className="flex flex-col h-full m-4 p-4 gap-y-4 justify-center bg-contentSeparator rounded-3xl">
                    <h1 className="pl-4 py-8 bg-linkHover rounded-3xl text-4xl font-bold">{portfolioItem.title}</h1>
                    {
                        portfolioItem.topLevelDescription.map(d => (
                            <p className="flex-1 p-4 bg-linkHover rounded-3xl whitespace-pre-wrap">{d}</p>
                        ))
                    }
                </div>
                
            </div>

            {/* Group of all described image entries */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                portfolioItem.describedImages.map(di => (
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col">

                            {/* Image */}
                            <div className="bg-contentSeparator p-6 m-4 rounded-3xl">
                                <img src={"/Images/PortfolioItemImages/" + portfolioItem.title + "/" + di.imgPath} className="w-full h-full rounded-xl"></img>
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
