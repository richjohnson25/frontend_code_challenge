'use client'
import Image from "next/image";
import '@mantine/carousel/styles.css';
import ProductCard from "@/components/card";
import TestimonyCard from "@/components/testimony";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const MainCarousel = dynamic(() => import('../../components/mainCarousel/index'), { ssr: false })

export default function Home() {
  // Fetching data user dari randomuser.me
  const [teamMembers, setTeamMembers] = useState([]);

  async function fetchTeamMembers(){
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=3`)
      setTeamMembers(response.data.results)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  return (
    <main className="relative">
      <MainCarousel />
      <section className="flex flex-col items-center mx-12 gap-4 py-4">
        <h1 className="text-3xl font-bold">Company Overview</h1>
        <div className="grid grid-cols-2 gap-8 px-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">About Us</h1>
              <p>PT Japfa Comfeed Indonesia, Tbk is one of Indonesia's largest agri-food Companies that produces various animal protein staples.
              We create value for our industry partners through an integrated production chain that includes animal feed manufacturing, poultry breeding, commercial production of broilers, 
              fish, shrimp and beef as well as value added food processing.</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">History</h1>
              <p>We founded this company in 1971 under the name PT Java Palletizing Factory, Ltd (PT Japfa), with focus on the commercial marketing of pellet main products.
              However, we started our livestock feed business in 1975 and chicken breeding operation in 1982.</p>
            </div>
          </div>
          <div>
            <Image
              src='https://annualreport.id/assets/4JAPFA-1509695140.jpg'
              width={1000}
              height={300}
              alt="overview"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mx-12 gap-4 py-4">
        <h1 className="text-3xl font-bold">Meet Our Teams</h1>
        <p className="text-lg">JAPFA has a lot of teams operating in different divisions and subsidiaries of the company, with each division being in charge of the head of said division. Below are some of the most important people in the company.</p>
        <div className="flex gap-4">
          {
            teamMembers.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={item.picture.large}
                    width={150}
                    height={150}
                    alt="Team Member"
                  />
                  <h2 className="text-xl">{item.name.first} {item.name.last}</h2>
                </div>
              )
            })
          }
        </div>
      </section>

      {/*Bagian produk di halaman ini menggunakan refactoring pada komponen ProductCard*/}
      <section className="flex flex-col items-center mx-12 gap-4 py-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="text-lg">The company offers various types of products and services that are integrated from upstream to downstream.</p>
        <div className="grid grid-cols-4 gap-4 px-20">
          <ProductCard imageUrl='https://poultry.extension.org/wp-content/uploads/2019/02/shutterstock_531404539-1024x684.jpg'
          productName='Poultry'
          description='The struggle that we started since 1975 has led us to become the leading Total Poultry Solutions Provider in Indonesia.' />
          <ProductCard imageUrl='https://www.cameronsseafood.com/wp-content/uploads/2020/01/caliseafood.jpg'
          productName='Seafood'
          description='STP focused on aqua feed mills, shrimp & fish hatchery and grow-out farming and seafood processing for local and global market.' />
          <ProductCard imageUrl='https://www.mychicagosteak.com/steak-university/wp-content/uploads/2019/05/raw-steak-compressor.jpg'
          productName='Beef'
          description='JAPFA runs an integrated cattle breeding business under its subsidiary, PT Santosa Agrindo (Santori).' />
          <ProductCard imageUrl='https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/32/95/15/IGFfHDKS6CPnncOlPbdT_DSC_0263.jpg'
          productName='Consumer Goods'
          description='JAPFA Food as a downstream identity, strives to deliver the highest quality products and service that can proudly serve B2B and B2C.' />
        </div>
      </section>

      {/*Bagian testimoni di halaman ini menggunakan refactoring pada komponen TestimonyCard*/}
      <section className="flex flex-col items-center mx-12 gap-4 py-4">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <div className="flex flex-col items-center gap-4">
          <TestimonyCard customerName='Customer 1'
          comment='Daging sapi mentah ini benar-benar berkualitas sehingga restoran kami bisa membuat steak dengan kualitas yang terjangkau.' />
          <TestimonyCard customerName='Customer 2'
          comment='Pelanggan restoran kami sangat suka dengan pilihan ikan dan seafood yang segar.' />
          <TestimonyCard customerName='Customer 3'
          comment='Bakso ikan dan dimsumnya memiliki rasa yang sangat enak di mulut sehingga saya ingin beli lagi.' />
          <TestimonyCard customerName='Customer 4'
          comment='Daging ayam mentah ini benar-benar empuk sehingga saya sangat menyukainya.' />
          <TestimonyCard customerName='Customer 5'
          comment='Saya suka dengan pilihan daging sapi yang empuk, tidak alot, dan dipotong dengan sangat rapi sehingga mudah dikunyah.' />
        </div>
      </section>
    </main>
  );
}
