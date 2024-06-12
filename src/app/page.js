'use client'
import { Carousel } from "@mantine/carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import '@mantine/carousel/styles.css';
import { Card } from "@mantine/core";

export default function Home() {
  return (
    <main className="relative px-20">
      <Carousel
      nextControlIcon={<div className="bg-orange-500 text-white p-3 rounded-full absolute"><FaArrowRight /></div>}
      previousControlIcon={<div className="bg-orange-500 text-white p-3 rounded-full absolute"><FaArrowLeft /></div>}>
        <Carousel.Slide>
          <div className="bg-red-100" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Image
              src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/carousels/cover_w1440_h820_dsc00249-edited-1.jpg'
              fill
              style={{ objectFit: 'cover' }}
              alt="priority"
            />
            <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
              <h1 className="text-orange-500 text-5xl font-bold drop-shadow-lg">Welcome to Japfa Comfeed Indonesia</h1>
              <p className="text-white text-center text-xl drop-shadow-lg px-12">We are one of Indonesia's largest agri-food Companies with the mission to be the leading dependable provider of affordable protein foods in Indonesia.</p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full">More About Us</button>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="bg-red-100" style={{ width: '100%', height: '600px', position: 'relative' }}>
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
          <div className="bg-red-100" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Image
              src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/carousels/cover_w1440_h820_1440-shrimp-pond-bomo.jpg'
              fill
              style={{ objectFit: 'cover' }}
              alt="priority"
            />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="bg-red-100" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Image
              src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/carousels/cover_w1440_h820_homepage_banner_beef_1440.jpg'
              fill
              style={{ objectFit: 'cover' }}
              alt="priority"
            />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="bg-red-100" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Image
              src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/carousels/cover_w1440_h820_main_banner_consumer_1440.jpg'
              fill
              style={{ objectFit: 'cover' }}
              alt="priority"
            />
          </div>
        </Carousel.Slide>
      </Carousel>
      <section className="flex flex-col">
        <div className="flex justify-between gap-8 px-4 py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Company Overview</h1>
            <p className="text-xl font-bold">PT Japfa Comfeed Indonesia, Tbk is one of Indonesia's largest agri-food Companies that has been producing vital animal protein staples for the nation since 1975.</p>
            <p>We founded this company in 1971 under the name PT Java Palletizing Factory, Ltd (PT Japfa), with focus on the commercial marketing of pellet main products.
              However, we started our livestock feed business in 1975 and chicken breeding operation in 1982.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full" style={{ width: '20%' }}>Read More</button>
          </div>
          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <Image
              src='https://annualreport.id/assets/4JAPFA-1509695140.jpg'
              fill
              style={{ objectFit: 'cover' }}
              alt="priority"
            />
          </div>
        </div>
        <div>
          <h1>Our Team</h1>
        </div>
        <div>
          <h1>Our Values</h1>
        </div>
      </section>
      <section>
        <h1>Our Products</h1>
        <div className="flex">
          <Card>
            <Card.Section withBorder>
              <Image
                src="https://poultry.extension.org/wp-content/uploads/2019/02/shutterstock_531404539-1024x684.jpg"
                width={300}
                height={150}
                alt="Poultry"
              />
            </Card.Section>
            <h3>Poultry</h3>
            <p>The struggle that we started since 1975 has led us to become the leading Total Poultry Solutions Provider in Indonesia.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full" style={{ width: '20%' }}>Read More</button>
          </Card>
          <Card>
            <Card.Section withBorder>
              <Image
                src="https://www.cameronsseafood.com/wp-content/uploads/2020/01/caliseafood.jpg"
                width={300}
                height={150}
                alt="Seafood"
              />
            </Card.Section>
            <h3>Seafood</h3>
            <p>Established since 1987, STP focused on aqua feed mills, shrimp & fish hatchery and grow-out farming and seafood processing for local and global market.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full" style={{ width: '20%' }}>Read More</button>
          </Card>
          <Card>
            <Card.Section withBorder>
              <Image
                src="https://www.mychicagosteak.com/steak-university/wp-content/uploads/2019/05/raw-steak-compressor.jpg"
                width={300}
                height={150}
                alt="Beef"
              />
            </Card.Section>
            <h3>Beef</h3>
            <p>JAPFA runs an integrated cattle breeding business under its subsidiary, PT Santosa Agrindo (Santori).</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full" style={{ width: '20%' }}>Read More</button>
          </Card>
          <div>Beef</div>
          <div>Consumer Goods</div>
        </div>
      </section>
      <section>
        <h1>Testimonials</h1>
      </section>
    </main>
  );
}
