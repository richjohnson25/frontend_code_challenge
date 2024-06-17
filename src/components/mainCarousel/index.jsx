'use client'

import { Carousel } from "@mantine/carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import '@mantine/carousel/styles.css';
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function MainCarousel(){
    const autoplay = useRef(Autoplay({ delay: 5000 }))

    return (
        <Carousel
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={<div className="bg-orange-500 text-white p-3 rounded-full absolute"><FaArrowRight /></div>}
        previousControlIcon={<div className="bg-orange-500 text-white p-3 rounded-full absolute"><FaArrowLeft /></div>}>
            <Carousel.Slide>
            <div className="bg-red-100" style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Image
                src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/carousels/cover_w1440_h820_dsc00249-edited-1.jpg'
                fill
                style={{ objectFit: 'cover' }}
                alt="priority"
                />
                <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                <h1 className="text-orange-500 text-5xl font-bold drop-shadow-lg">Welcome to Japfa Comfeed Indonesia</h1>
                <p className="text-white text-center text-xl drop-shadow-lg px-12">We are one of Indonesia's largest agri-food Companies that has been producing vital animal protein staples for the nation since 1975.</p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full">More About Us</button>
                </div>
            </div>
            </Carousel.Slide>
            <Carousel.Slide>
            <div className="bg-red-100" style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Image
                src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/vision/cover_w1440_h450_1440-visi-misi.jpg'
                fill
                style={{ objectFit: 'cover' }}
                alt="priority"
                />
                <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                <h1 className="text-orange-500 text-5xl font-bold drop-shadow-lg">Our Vision and Mission</h1>
                <p className="text-white text-center text-xl drop-shadow-lg px-12">To be the leading dependable provider of affordable protein foods in Indonesia by building on the foundation of our excellent teamwork and proven experience for the benefit of all stakeholders.</p>
                </div>
            </div>
            </Carousel.Slide>
            <Carousel.Slide>
            <div className="bg-red-100" style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Image
                src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/our-network/cover_w1440_h450_tw1440_th450_x10_y160_1440x820_operational_network_banner_1-1.png'
                fill
                style={{ objectFit: 'cover' }}
                alt="priority"
                />
                <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                <h3 className="text-orange-500 text-5xl font-bold drop-shadow-lg">Our Tagline</h3>
                <h1 className="text-white text-center text-3xl drop-shadow-lg px-12">Growing Towards Mutual Prosperity</h1>
                <h3 className="text-white text-center text-xl drop-shadow-lg px-12">Our tagline is indeed the cornerstone of success for PT Japfa Comfeed Indonesia Tbk.</h3>
                </div>
            </div>
            </Carousel.Slide>
        </Carousel>
    )
}