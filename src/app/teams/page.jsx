'use client'
import axios from "axios";
import Image from "next/image"
import { useEffect, useState } from "react"

export default function TeamsPage(){
    // Fetching data user dari randomuser.me
    const companyPositions = ['President Commissioner', 'Commissioner', 'President Director', 'Vice President Director', 'Director', 'Financial Director', 'Corporate Affairs Director', 'Corporate Secretary']
    const [teamMembers, setTeamMembers] = useState([]);

    async function fetchTeamMembers(){
        try {
            const response = await axios.get('https://randomuser.me/api/?results=8')
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
            <div name="TeamsPage">
                <section name="productsHeader" className="bg-red-100" style={{ width: '100%', height: '400px', position: 'relative' }}>
                    <Image
                        src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/thumb/images/corporate-governance/organization-structure/cover_w1440_h450_banner_so_1440px.jpg'
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Header Section"
                    />
                    <div className="bg-gray-900/50 flex flex-col justify-center items-center gap-8 px-40 absolute inset-0">
                        <h1 className="text-orange-500 text-5xl font-bold">Organization Structure</h1>
                    </div>
                </section>
                {/*Render anggota tim berdasarkan posisi jabatan di perusahaan*/}
                <section className="flex justify-center mx-20 my-6">
                    <div className="w-full flex flex-col items-center">
                        {
                            teamMembers.map((item, index) => {
                                return (
                                    <div key={index} className="w-[500px] h-[200px] flex gap-8">
                                        <img
                                            src={item.picture.large}
                                            alt={`${item.name.first} ${item.name.last}'s Profile`}
                                            className="w-[150px] h-[150px] rounded-full"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-2xl font-bold">
                                                {companyPositions[index]}
                                            </div>
                                            <div>
                                                Name: {item.name.first} {item.name.last}
                                            </div>
                                            <div>
                                                Date of Birth: {new Date(item.dob.date).toLocaleDateString()}
                                            </div>
                                            <div>
                                                Email: {item.email}
                                            </div>
                                            <div>
                                                Phone Number: {item.phone}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}