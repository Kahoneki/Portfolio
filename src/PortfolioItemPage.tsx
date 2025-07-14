import Navbar from "./Navbar"
import { useParams } from "react-router-dom"

function PortfolioItemPage()
{
    const { projectName } = useParams<{ projectName: string }>()

    const itemPageInfo = [
        // OpenGL Render Engine
        {
            title:"OpenGL Render Engine (Neki)",
            topLevelImgPath: "OpenGL Render Engine.png",
            topLevelDescription: [
                "Neki is an in-the-works render engine built in OpenGL with GLFW/GLAD and GLM.\nThis engine will encompass all of my current and future OpenGL projects. As more features are implemented, this page will be updated.",
                "Currently contains:\n- 3D Rendering\n- First Person Camera\n- Blinn-Phong Specular Lighting Model (+ Rim Lighting and Custom Materials)\n- Bindless Textures\n- Normal Maps\n- Stencil-Buffer Portal Rendering\n- Postprocessing Pipeline\n- External 3D Model Loading\n\nTo do:\n- Dynamic Tessellation\n- GPU Instancing (and grass rendering)\n- More Material Types\n- Water Rendering (with sum of sines / potentially FFT)\n- Boids\n- More Post Processing Effects (e.g. Depth of Field, Fisheye)\n- Anti-Aliasing (support for multiple types)\n\nTo do (Advanced):\n- Particle Simulations\n- Volumetric Effects (e.g.: Fog, Clouds, Atmosphere)"
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"3DRendering_Camera_Material.jpg",
                    description: [
                        "3D Rendering, First-Person Camera, Custom Materials.",
                        "In this image, the colour property on the cube's material has been enabled and set to green. The material information is sent to the static material shader preset via a buffer."
                    ]
                },
                {
                    imgPath:"BindlessTextures.jpg",
                    description: [
                        "Bindless textures",
                        "These cubes have their albedo texture property enabled and have been provided a bindless texture handle by the asset manager class. The handle is passed to the material buffer using either a 64-bit uint (if supported) or two 32-bit uints.",
                        "Bindless textures allow for more textures to be used in a single shader pass than would otherwise be permitted with texture units alone."
                    ]
                },
                {
                    imgPath:"BlinnPhongSpecular.jpg",
                    description: [
                        "Lights using the Blinn-Phong Specular lighting model",
                        "Light data for all lights in a scene is passed to the active shader via a buffer which contains position; ambient, diffuse, and specular colours; and intensity",
                        "Added the blinng phong standard shader preset"
                    ]
                },
                {
                    imgPath:"MultipleLights_Attenuation.jpg",
                    description: [
                        "Up to 800 simultaneous lights and attenuation based on distance from source",
                        "Runs in realtime at 60+ FPS with per-frame randomised light updates"
                    ]
                },
                {
                    imgPath:"RimLighting.jpg",
                    description: [
                        "Rim lighting with customisable-intensity",
                        "The cube is being lit from behind and the top face is being viewed from a grazing angle resulting in rim lighting."
                    ]
                },
                {
                    imgPath:"NormalTextures.jpg",
                    description: [
                        "Normal-texture maps",
                        "This cube has its material's normal property set to active and a bindless texture has been set as the cube's normal texture.",
                        "Normal maps require using the TBN matrix to convert the texture from tangent space into the object's local space for the specific fragment's transformation."
                    ]
                },
                {
                    imgPath:"Portals.jpg",
                    description: [
                        "Stencil-buffer portal rendering",
                        "These two portals have been added to the scene and linked together. When the renderer draws objects in the scene, the stencil buffer is used to create masks of the portals' outlines. When the portals are drawn, the scene is re-rendered but only inside the mask for the respective portal. During this second pass, the view matrix is transformed to view the other portal from the same relative transformation as it is viewing the portal which is currently being drawn.",
                        "This process is described more in-depth in the portfolio page \"Portal Renderer\". Advances on the old method include a more robust method for testing player-portal collisions, leading to more seamless movement through the portals.",
                    ]
                },
                {
                    imgPath:"Desaturated_Vignette.jpg",
                    description: [
                        "Post-processing pipeline",
                        "The camera used in the above scene has been given saturation and vignette post-processing effects. The scene is being rendered to an offscreen framebuffer, after the renderer has finished with the first pass, it initiates the post-processing pass which goes through all the active effects and runs the corresponding compute shader.",
                        "The current system treats all the effects as one large multi-pass effect, and hence has built-in support for more complex multi-pass effects such as depth of field. It also has support for providing required user-specified data to the shader via a buffer through a class the user can interface through (e.g.: the Saturation class gives the ability to set the strength of the saturation).",
                    ]
                },
                {
                    imgPath:"OpenGL Render Engine.png",
                    description: [
                        "3D model loading",
                        "The above scene demonstrates loading a model (Sponza) using Assimp. As models are loaded, their textures are automatically supplied to the corresponding textures in the shader (e.g.: a model's albedo textures are automatically made resident for the shader and exposed through the material struct. Same for normal and specular maps.",
                        "In addition, this point marked a change in verbosity in the lighting and material controls. Prior to this, almost everything was configurable (e.g.: an object's material's ambient light colour). It took a long time to set up all the controls in a way which looked nice, and so because of this (and because of lack of physical plausibility), I decided to cut back on the controls available."
                    ]
                },
            ],
        },

        // Online Multiplayer PS5 Game
        {
            title:"Online Multiplayer PS5 Game",
            topLevelImgPath: "Online Multiplayer PS5 Game.png",
            topLevelDescription: [
                "For our 2nd year module \"CMP208: Games Programming and Systems Architecture\", we used the PlayStation 5 Development Kits to create a game in a group. The in-house framework we had to use was still under development for much of the module (and still is!) and didn't have support for many of the things our team were wanting to include - notably it took many weeks for 3D model support to be added, and many more to get support for textures, so a lot of our time was spent interfacing directly with the PS5 hardware.",
                "The following are a list of features:\n-Cross-Platform Development for x64 and Prospero (PS5 SDK)\n-Entity-Component-System (ECS) paradigm\n-Modular input framework supporting complex cross-platform input mappings to queryable actions\n-Custom PS5 trigger and haptic effects\n-Complex and realistic 3D Physics with collisions (Jolt)\n-Online multiplayer in a P2P LAN environment featuring rollback netcode architecture\n-Custom Rendering with HLSL and PSSL shaders\n-File reading/writing for long-term progression\n-Music and audio system\n-Procedural map generation\n-Procedural planets/asteroids",
                "My main contributions to the project involved:\n-Overhauling the in-house renderer to add multi-pass support for shadows and postprocessing\n-Managing project deadlines and overseeing completion of tasks through Notion\n-Writing a modular input framework for complex cross-platform input mappings, trigger resistivity, and haptic feedback\n-Writing a custom tooling batch script and utility class to make the process of linking textures with a mesh easier (which the in-house framework would've otherwise required we had done manually)\n-Gameplay programming for key systems such as combat, crafting, harvesting, players, upgrades\n-Audio programming using PlayStation's dedicated software",
                "Please note that due to Sony's NDA, the code for this project is private and details I can share are limited. As a team, we are looking into ways of abstracting the PS5 code into a separate project so that the bulk of the code (and low-level x64) can be made public."
            ],
            //imgPath automatically prefixed with title attribute from above as folder name
            describedImages: [
                {
                    imgPath:"Title Screen.png",
                    description: [
                        "Title screen with options to host a local game, join a local game, play singleplayer, or open the options menu to change video and audio settings."
                    ]
                },
                {
                    imgPath:"Gameplay 1.jpeg",
                    description: [
                    ]
                },
                {
                    imgPath:"Gameplay 2.jpeg",
                    description: [
                        "Gameplay showcasing highly-customisable postprocessed raymarched volumetric fog designed to expand in stages to create a fog-of-war gameplay mechanic.",
                    ]
                },
            ],
        },

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
                "It uses a client-server model with a combined TCP/UDP protocol and a sophisticated structure to maintain synchronisation between clients. The server runs on an oracle linux web instance.",
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
                <img src="Images/favicon.png" className="mt-16 mx-auto flex-1 h-1/6 w-1/6"></img>
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
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
                
                {/* Image */}
                <div className="bg-contentSeparator h-full max-h-[600px] p-6 m-4 rounded-3xl lg:sticky top-20">
                    <img src={"Images/Thumbnails/" + portfolioItem.topLevelImgPath} className="w-full h-full rounded-xl object-cover"></img>
                </div>

                {/* Description */}
                <div className="flex flex-col m-4 p-4 gap-y-4 justify-center bg-contentSeparator rounded-3xl">
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
                            <div className="bg-contentSeparator p-6 ml-4 mb-4 mr-4 rounded-3xl">
                                <img src={"Images/PortfolioItemImages/" + portfolioItem.title + "/" + di.imgPath} className="w-full h-full rounded-xl"></img>
                            </div>

                            {/* Description */}
                            { di.description.length > 0 &&
                                <div className="flex flex-col m-4 mt-0 p-4 gap-y-4 bg-contentSeparator rounded-3xl">
                                {
                                    di.description.map(d => (
                                        <p className="flex-1 p-4 bg-linkHover rounded-3xl">{d}</p>
                                    ))
                                }
                                </div>
                            }

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
