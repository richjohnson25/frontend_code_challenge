'use client'

import { Timeline } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AboutUsPage(){
    // Fetching data user dari randomuser.me
    const companyPositions = ['President Commissioner', 'Commissioner', 'President Director']
    const [teamMembers, setTeamMembers] = useState([]);

    async function fetchTeamMembers(){
        try {
            const response = await axios.get('https://randomuser.me/api/?results=3')
            setTeamMembers(response.data.results)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTeamMembers()
    }, [])

    if(teamMembers === null) return <div>Loading...</div>

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
                    {/*Render anggota tim berdasarkan posisi jabatan di perusahaan*/}
                    <div className="w-full flex flex-row justify-center items-center gap-8">
                        {
                            teamMembers.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col items-center gap-2">
                                        <Image
                                            src={item.picture.large}
                                            width={150}
                                            height={150}
                                            alt="Team Member"
                                        />
                                        <h1 className="text-2xl font-bold">{companyPositions[index]}</h1>
                                        <h2 className="text-xl">{item.name.first} {item.name.last}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="flex flex-col bg-white items-center gap-4 py-4">
                    <h1 className="text-orange-500 text-3xl font-bold">Our Culture</h1>
                    <div className="text-lg">
                        <p>Central to the success of PT Japfa Comfeed Indonesia Tbk (Company) is a strong belief in the nurturing of mutually rewarding relationships based on trust and integrity. </p>
                    </div>
                    <div className="w-[1000px] flex flex-col px-8 py-4 border-4 border-orange-500 gap-4 bg-orange-200">
                        <h4 className="text-sm font-bold">Our Vision and Mission</h4>
                        <p className="text-lg">To be the leading dependable provider of affordable protein foods in Indonesia by building on the foundation of our excellent teamwork and proven experience for the benefit of all stakeholders.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/ico-values-1.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Leading</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Top of mind</li>
                                <li>Reference point by Industry</li>
                                <li>A continuing process</li>
                                <li>Ahead of competition</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-[500px] gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/ico-values-2.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Dependable</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Dependable to all partners, farmers, consumers & staff</li>
                                <li>Consistent, traceable, good quality, safe, disease free products</li>
                                <li>Responsible to the community & environment</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/vision/group-611.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Affordable</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Cater mainly to the masses</li>
                                <li>Not the cheapest, but good value</li>
                                <li>Role of alleviaton of food shortages</li>
                                <li>Ahead of competition</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-[500px] gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/vision/group-617.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Protein Foods</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Emphasis on poultry, livestock & marine proteins</li>
                                <li>Including key upstream operations of feed, livestock breeding & raising, vaccines etc.</li>
                                <li>Food grade, for human consumption</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-[500px] gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/vision/group-613.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Excellent Teamwork</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Co-operate & support each other even without being asked</li>
                                <li>Seamless coordination</li>
                                <li>Operate as 1 unit</li>
                                <li>Differences in opinions encouraged but move as a team</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/vision/group-614.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Proven Experience</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Experienced in farming and emerging economies</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-[500px] gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/icon-stakeholder-group-615.svg'
                                    width={60}
                                    height={60}
                                    alt="values"
                                />
                                <h3 className="text-xl font-bold">Steakholders</h3>    
                            </div>
                            <ul className="list-disc">
                                <li>Staff</li>
                                <li>Customers</li>
                                <li>Suppliers</li>
                                <li>Contract Farmers</li>
                                <li>Shareholders</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}