import Navbar from "./Navbar"
import { Link } from "react-router-dom"

function About()
{
return (
    <>
    {/* Whole screen */}
    <div className="flex flex-col h-full">
        <Navbar></Navbar>

        {/* Main content width */}
        <div className="h-full mb-20 px-4 md:px-10 lg:px-24">


            {/* Intro strip */}
            <div>
                <div className="flex flex-row">
                    <img src="Images/me full edited.PNG" className="rounded-full mr-2 lg:mx-4 w-1/3 lg:w-1/2 mt-8 my-auto border-solid border-sidebar border-4 shadow-[0px_0px_15px_10px] shadow-sidebar"></img>
                    <div className="mt-16 lg:mt-48 ml-2">
                        <h1 className="text-2xl lg:text-8xl font-bold inline">Hey, I'm Ava!</h1>
                        <img src="Images/favicon.png" className="w-6 lg:w-32 inline relative -top-2 -right-2 lg:-top-10 lg:-right-4"></img>
                        <p className="text-lg lg:text-3xl mt-3 lg:mt-0 lg:ml-2 relative -top-4">A Graphics Programmer from Dundee.</p>
                        <p className="hidden lg:block text-md ml-2 relative -top-2">Passionate about pushing the limits of technology through high-performance computing. I predominantly focus on leveraging the power of the GPU to solve complex problems in real-time graphics and simulation, always aiming to deepen my understanding and expand my skills in the vast and ever-expanding field.</p>
                    </div>
                </div>
                <p className="block lg:hidden mt-8 lg:mt-0 text-md ml-2 relative -top-2">Passionate about pushing the limits of technology through high-performance computing. I predominantly focus on leveraging the power of the GPU to solve complex problems in real-time graphics and simulation, always aiming to deepen my understanding and expand my skills in the vast and ever-expanding field.</p>
            </div>
            {/* End of intro strip */}


            <div className="h-[4px] my-12 bg-sidebar"></div>


            {/* Project highlights */}
            <div className="px-4">

                <h2 className="text-4xl font-bold">Project Highlights</h2>

                <div className="text-lg pt-2">
                    <p>My portfolio features a mix of projects that showcase my journey in high-performance computing. It mostly consists of graphics projects, for which a few of my personal favourites include:</p>
                    <ul className="list-disc pl-8 text-base">
                        <li><span className="font-bold">Vulkan/DX12 RHI Game Engine: </span>An API-agnostic render backend for my game engine 'Neki' featuring dynamic rendering and out-of-core data streaming</li>
                        <li><span className="font-bold">Highly-Optimised Portal Renderer: </span>Utilises an advanced stencil buffer rendering technique for improved performance over traditional portal-rendering methods.</li>
                        <li><span className="font-bold">Depth-of-Field Shader Effect: </span>Implements dynamic focal distance and depth, using parallel prefix sums to generate summed area tables for a box blur.</li>
                        <li><span className="font-bold">Grass Renderer: </span>Explores hardware limitations of CPU-GPU communication and demonstrates the power of GPU instancing to address these challenges.</li>
                    </ul>

                    <br></br>

                    <p>While graphics is my main focus, I've also explored in a few other areas of high-performance computing, namely:</p>
                    <ul className="list-disc pl-8 text-base">
                        <li><span className="font-bold">Real-Time Online Fighting Game (1st Year Project): </span>Features a robust client-server architecture using a combined TCP/UDP protocol, featuring an account system with an SQLite backend; this is now being used as an exemplary project for future students taking this module.</li>
                        <li><span className="font-bold">Online Multiplayer PS5 Game: </span>Interfacing directly with PS5 hardware to create a realtime online action-rts game with a multi-pass render pipeline</li>
                        <li><span className="font-bold">Voxel Engine in Unity: </span>Covers the fundamentals of multithreading, chunking, multi-octave noise, procedural generation, and texture atlasing.</li>
                    </ul>

                    <br></br>

                    <p>See more projects at <Link className="font-bold hover:underline" to="/portfolio">Portfolio</Link></p>
                </div>
            </div>
            {/* End of project highlights */}


            <div className="h-[4px] my-12 bg-sidebar"></div>


            {/* Skills */}
            <div className="px-4">
                
                <h2 className="text-4xl font-bold">Technical Skills</h2>
                
                <div className="pt-4">
                    <h3 className="text-2xl font-bold">Graphics</h3>
                    <ul className="text-lg columns-1 md:columns-2 lg:columns-3 list-none">
                        <li>Vulkan</li>
                        <li>DirectX 12</li>
                        <li>OpenGL</li>
                        <li>Nvidia Nsight</li>
                        <li>RenderDoc</li>
                        <li>Data Streaming</li>
                        <li>GPGPU</li>
                        <li>Culling Techniques</li>
                        <li>Dynamic Tesselation</li>
                        <li>PBR Lighting</li>
                        <li>Procedural Generation</li>
                        <li>GPU Instancing</li>
                        <li>Stencil Buffer Rendering</li>
                        <li>Post-Processing</li>
                    </ul>
                </div>

                <div className="pt-6">
                    <h3 className="text-2xl font-bold">Miscellaneous</h3>
                    <ul className="text-lg columns-1 md:columns-2 lg:columns-3 list-none">
                        <li>Git/GitHub</li>
                        <li>Unity</li>
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Network Programming</li>
                        <li>Oracle Web Computing</li>
                        <li>Secure Shell (SSH)</li>
                        <li>Linux Servers</li>
                        <li>SQLite</li>
                        <li>Multithreading</li>
                        <li>SFML</li>
                        <li>Tailwind</li>
                        <li>React.js</li>
                        <li>Vite</li>
                    </ul>
                </div>

                <div className="pt-6">
                    <h3 className="text-2xl font-bold">Languages</h3>
                    <ul className="text-lg columns-1 list-none">
                        <li>C++</li>
                        <li>C#</li>
                        <li>HTML/CSS/JavaScript</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            {/* End of skills */}


            <div className="h-[4px] my-12 bg-sidebar"></div>


            {/* Education */}
            <div className="px-4">
                
                <h2 className="text-4xl font-bold">Education</h2>
                
                {/* University */}
                <div className="pt-4">
                    <h3 className="text-2xl font-bold">BSc (Hons) Computer Games Technology - Abertay University</h3>
                    <p className="text-lg italic">September 2023 - Present</p>
                    <p className="text-lg font-bold">GPA: 4.4 / 4.5</p>
                    <ul className="list-none">
                        
                        <li>
                            <h4 className="font-bold underline">1st Year:</h4>
                            <div className="pl-2">
                                <p><span className="font-semibold">Class Representative: </span>Nominated to bring forth student feedback and advocate for curriculum improvements.</p>
                                <h5 className="font-semibold">Grades:</h5>
                                <ul className="list-disc pl-6">
                                    <li>MAT101 (Applied Mathematics 1) - A+</li>
                                    <li>CMP102 (Software Design) - A+</li>
                                    <li>CMP101 (Computer Hardware, Architecture, and Operating Systems) - A</li>
                                    <li>CMP104 (Programming With C++) - A</li>
                                    <li>CMP105 (Games Programming with C++) - A</li>
                                </ul>
                            </div>
                        </li>

                        <br></br>

                        <li>
                            <h4 className="font-bold underline">2nd Year:</h4>
                            <div className="pl-2">
                                <p><span className="font-semibold">Alexander D G Kydd Prize Winner: </span>Awarded for being the best overall student in 2nd year of the Faculty of Design, Informatics, and Business</p>
                                <p><span className="font-semibold">A D D McKay Senior Prize Winner: </span>Awarded for achieving a high level of performance in Mathematics for 2nd year of the BSc (Hons) Computer Games Technology course</p>
                                <p><span className="font-semibold">Internal Events Manager (Abertay Game Development Society): </span>Organised events to foster collaboration and knowledge between disciplines (more information further down).</p>
                                <p><span className="font-semibold">Class Representative: </span>Re-nominated to continue advocating for student interests and providing feedback to faculty.</p>
                                <h5 className="font-semibold">Grades:</h5>
                                <ul className="list-disc pl-6">
                                    <li>CMP203 (Graphics Programming) - A+</li>
                                    <li>CMP201 (Data, Structures, and Algorithms 1) - A+</li>
                                    <li>MAT201 (Applied Mathematics 2) - A+</li>
                                    <li>CMP202 (Data, Structures, and Algorithms 2) - A+</li>
                                    <li>CMP208 (Games Programming and Systems Architecture) - A</li>
                                </ul>
                            </div>
                        </li>

                        <br></br>

                        <li>
                            <h4 className="font-bold underline">3rd Year:</h4>
                            <div className="pl-2">
                                <p><span className="font-semibold">Class Representative: </span>Re-nominated to continue advocating for student interests and providing feedback to faculty.</p>
                                <h5 className="font-semibold">Grades:</h5>
                                <ul className="list-disc pl-6">
                                    <li>CMP301 (Graphics Programming with Shaders) - Grade Pending</li>
                                    <li>CMP304 (Artificial Intelligence) - Grade Pending</li>
                                    <li>CMP316 (Game Engine Development) - Grade Pending</li>
                                    <li>DES315 (Professional Project) - Grade Pending</li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
                {/* End of university */}

                {/* High school */}
                <div className="pt-12">
                    <h3 className="text-2xl font-bold">High School - Westhill Academy</h3>
                    <p className="text-lg italic">August 2017 - June 2023</p>
                    <p className="text-lg font-bold">GPA: 4.92 / 5.0</p>
                    <p><span className="font-semibold">Coding Club: </span>Founded the coding club in S6, sparking interest in computing and leading workshops for younger students.</p>
                    <p><span className="font-semibold">Maths Ambassador: </span>Served as a Maths Ambassador in S6, running events to encourage engagement in Mathematics and helping to teach primary school students</p>
                    <p><span className="font-semibold">Career Ready: </span>Took part in a program designed to give students real-world industry experience through mentorship, masterclasses, and a month long internship (more information further down).</p>

                    <h4 className="font-semibold">Grades:</h4>
                    <ul className="list-disc pl-6">
                        <li><span className="font-semibold">Advanced Higher: </span>Computing (B), Mathematics (A)</li>
                        <li><span className="font-semibold">Higher: </span>Computing (A), Mathematics (A), Physics (A), French (A), Music (A), Spanish (A)</li>
                        <li><span className="font-semibold">National 5: </span>NPA Computer Game Development (A), Computing (A), Mathematics (A), Physics (A), Music (A), Spanish (A), English (A)</li>
                    </ul>
                </div>
                {/* End of high school */}

            </div>


            {/* End of education */}


            <div className="h-[4px] my-12 bg-sidebar"></div>


            {/* Employment history */}
            <div className="px-4">
                
                <h2 className="text-4xl font-bold">Employment History</h2>
                
                {/* TechnipFMC */}
                <div className="pt-4">
                    <h3 className="text-2xl font-bold">Software Engineer Intern, TechnipFMC</h3>
                    <p className="text-lg italic">June 2022 - July 2022</p>
                    <ul className="list-disc pl-6">
                        <li>Underwent a 4-week-long internship focused on automating the manual process of graph cropping through the development of computer vision applications in Python, utilising libraries such as NumPy, OpenCV, and Pillow.</li>
                        <li>Successfully transitioned the graph cropping process from manual to automated, significantly improving efficiency and accuracy.</li>
                        <li>Gathered requirements by directly consulting with the engineering department to ensure the software met their needs and aligned with the functionality of a larger software package.</li>
                        <li>This experience enhanced my technical and problem solving skills while also boosting my confidence and teamworking abilities in a professional environment.</li>
                    </ul>
                </div>
                {/* End of TechnipFMC */}

                {/* P&J Live */}
                <div className="pt-4">
                    <h3 className="text-2xl font-bold">Event Staff, P&J Live</h3>
                    <p className="text-lg italic">December 2021 - September 2023</p>
                    <ul className="list-disc pl-6">
                        <li>Worked collaboratively to create a positive customer experience at live events, honing skills in organisation and attention to detail.</li>
                        <li>Enhanced problem-solving abilities by adapting to changing situations and addressing guest needs on the spot.</li>
                        <li>Strengthened time management skills while managing multiple tasks in a fast-paced environment.</li>
                    </ul>
                </div>
                {/* End of P&J Live */}

            </div>
            {/* End of employment history */}


            <div className="h-[4px] my-12 bg-sidebar"></div>


            {/* AGDS */}
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="px-4 w-full lg:w-3/5 ">
                    <h2 className="text-4xl font-bold">Abertay Game Development Society</h2>
                    <div className="pt-4">
                        <h3 className="text-2xl font-bold">Internal Events Manager</h3>
                        <p className="text-lg italic">May 2024 - June 2025</p>
                        <p>Elected by my peers to lead this position, it was my proud responsibility to take feedback from our members and turn it into awesome and engaging events for a wide and inclusive array of disciplines. I prioritised representation and transparency, ensuring all members felt heard and involved. This role also involved maintaining a good working relationship with companies in the games industry and faculty staff at the University</p>
                        <p>Notable large events I've organised:</p>
                        <ul className="list-disc pl-6">
                            <li>Git/Github Source Control Lecture</li>
                            <li>Freshers Game Jam 2024</li>
                            <li>Halloween Game Jam 2024</li>
                            <li>Art Jam 2025</li>
                            <li>Spring Game Jam 2025</li>
                        </ul>
                    </div>
                </div>

                <img className="lg:w-2/5 object-cover border-solid border-sidebar border-4 shadow-[0px_0px_15px_10px] shadow-sidebar" src="Images/AGDS Freshers Jam.jpeg">

                </img>
            </div>

            {/* End of AGDS */}


            <div className="h-[4px] my-12 bg-sidebar"></div>


        </div>
        {/* End of main content width */}

    </div>
    </>
)
}

export default About
