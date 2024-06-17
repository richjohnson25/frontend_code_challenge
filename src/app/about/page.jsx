'use client'

import { Timeline } from "@mantine/core";
import Image from "next/image";

export default function AboutUsPage(){
    return (
        <>
            <div name="AboutUs">
                <section className="bg-red-100" style={{ width: '100%', height: '400px', position: 'relative' }}>
                    <Image
                        src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/company-at-glace/cover_w1440_h450_banner_board2_1440.jpg'
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Header Section"
                    />
                    <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                        <h1 className="text-orange-500 text-5xl font-bold drop-shadow-lg">About Japfa Comfeed Indonesia</h1>
                    </div>
                </section>
                <section className="flex flex-col bg-white px-40 py-4 gap-4">
                    <div className="flex flex-col bg-white py-4 gap-4">
                        <h1 className="text-orange-500 text-3xl font-bold">About Us</h1>
                        <p>
                            PT Japfa Comfeed Indonesia, Tbk is one of Indonesia's largest agri-food Companies that has been producing vital animal protein staples for the nation since 1975.
                        </p>
                        <p>
                            The key to our success is our total solution approach for multiple distribution channels across Indonesia. We create value for our industry partners through an integrated 
                            production chain that includes animal feed manufacturing, poultry breeding, commercial production of broilers, fish, shrimp and beef as well as value added food processing. 
                            Each subsidiary of our company is in charge of the respective poultry, seafood, and beef business lines.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col bg-white items-center py-8">
                    <h1 className="text-orange-500 text-3xl font-bold pb-8">Our History</h1>
                    <div style={{ width: '50%' }}>
                        <Timeline bulletSize={24} active={9} color="#f97316" lineWidth={2}>
                            <Timeline.Item title="1971" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Founded on 18 January as PT Java Palletizing Factory, Ltd (PT Japfa), with the focus on the commercial marketing of pellet main products.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="1975" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Started the livestock feed business operations</h1>
                            </Timeline.Item>
                            <Timeline.Item title="1982" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Officially launched a chicken breeding operation</h1>
                            </Timeline.Item>
                            <Timeline.Item title="1989" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Was listed on Jakarta Stock Exchange</h1>
                            </Timeline.Item>
                            <Timeline.Item title="1990" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Took over PT Comfeed Indonesia's assets and changed its name to PT Japfa Comfeed Indonesia.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="1992" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Acquired chicken breeding and processing companies (PT Multibreeder Adirama Indonesia and PT Ciomas Adisatwa) and a shrimp pond and processing company, PT Suri Tani Pemuka.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2008" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Acquired PT Santosa Agrindo on January 15</h1>
                                <h1 className="text-sm">Our subsidiary, PT Ciomas Adisatwa, acquired PT Vaksindo Satwa Nusantara on September 2</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2011" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Construction of new production facilities across Java and acquisition of commercial farms</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2012" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Merged with PT Multibreeder Adirama Indonesia Tbk (MBAI) and its subsidiaries, PT Multiphala Adiputra (MPA) and PT Hidon, on July 1.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2018" className="text-orange-500 text-xl">
                                <h1 className="text-sm">On April 30, PT Multi Makanan Permai (MMP) and Ciomas acquired the shares of PT Santosa Utama Lestari (SUL), covering 80% of its ownership of PT Sentra Satwatama Indonesia.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2019" className="text-orange-500 text-xl">
                                <h1 className="text-sm">On June 27, SUL and Ciomas acquired the shares of PT Celebes Agro Semesta (CAS).</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2020" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Acquired PT So Good Food.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2021" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Issued a US$350 million Sustainability-Linked Bond (SLB) with a 5.375% coupon on March 23, the SLB will mature in 2026.</h1>
                            </Timeline.Item>
                            <Timeline.Item title="2022" className="text-orange-500 text-xl">
                                <h1 className="text-sm">Secured a 5-year term Sustainable Linked Loan/SLL of Rp1.42 trillion with BNI on June 17.</h1>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </section>
                <section className="flex flex-col bg-white items-center py-8">
                    <h1 className="text-orange-500 text-3xl font-bold pb-8">Meet Our Team</h1>
                </section>
                <section className="flex flex-col bg-white items-center py-8">
                    <h1 className="text-orange-500 text-3xl font-bold pb-8">Our Culture</h1>
                    <div style={{ position: 'relative' }}>
                        <Image
                            src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/vision/cover_w960_h340_img_center_visi-misi.jpg'
                            width={1000}
                            height={500}
                            alt="Values"
                        />
                        <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                            <h1 className="text-orange-500 text-3xl font-bold drop-shadow-lg">Values</h1>
                            <h3 className="text-white text-xl font-bold drop-shadow-lg">Growing Towards Mutual Prosperity</h3>
                        </div>
                    </div>
                    <div>
                        <p>Central to the success of PT Japfa Comfeed Indonesia Tbk (Company) is a strong belief in the nurturing of mutually rewarding relationships based on trust and integrity. 
                            With all its stakeholders, the Company takes the pro-active stance of developing "win-win" relationships. Our tagline is "Growing Towards Mutual Prosperity".
                        </p>
                        <ul className="list-disc">
                            <li>With shareholders, the Company's goal is to achieve consistently superior investment returns.</li>
                            <li>With business partners, the Company works in close co-operation, reinforcing each other's core competencies.</li>
                            <li>With customers, the Company focuses on delivering superior products and services at competitive prices. It aims to exceed customers' expectations.</li>
                            <li>With suppliers, it offers fair and ethical business deals.</li>
                            <li>With employees, it places major emphasis on identifying and developing programs that bring out the best in everyone.</li>
                            <li>With the community, the Company pledges to remain a responsible corporate citizen.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}