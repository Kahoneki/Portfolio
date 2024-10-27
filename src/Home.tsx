import Navbar from "./Navbar"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

function Home()
{

    const carouselFilepaths = ["Boids.jpg", "Earth Renderer.jpg", "Grass Renderer.jpg", "Ocean Wave Simulation.jpg", "Portal Renderer.jpg", "Post Processing.jpg", "TotallyNotMinecraft.jpg"]

return (
    <>
    <div className="flex flex-row">
        
        {/* Sidebar */}
        <div className="h-screen w-1/4 bg-sidebar px-6 flex flex-col justify-center">
        <img className="rounded-full aspect-square w-2/3 mx-auto border-solid border-background border-4 shadow-[0px_0px_15px_10px] shadow-background" src="Images/me.jpg"></img>
        <ul className="mt-8 font-medium pt-4 space-y-8 list-image-[url(Images/strawberry.svg)]">
            <li>Graphics Programmer specialising in GPGPU and high-performance compute applications</li>
            <li>2nd year student studying BSc (Hons) Computer Games Technology</li>
            <li>Passionate about leveraging GPU capabilities beyond traditional rendering for computational challenges.</li>
            <li>Internal Events Manager @ Abertay Game Development Society</li>
        </ul>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-3/4">
            <Navbar></Navbar>
            <div className="text-black p-8 w-full flex-1 bg-background border-solid border-contentSeparator border-t-[8px] border-l-[8px]">
            <Swiper className="h-full"
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
                delay: 3000, // Set delay in ms (3 seconds here)
                disableOnInteraction: false, // Continues autoplay after user interaction
              }}
            navigation
            pagination
            spaceBetween={50}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            
            {
                carouselFilepaths.map(path => (
                    <SwiperSlide><img className="object-cover h-full" src={"/Images/Carousel/" + path}></img></SwiperSlide>
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