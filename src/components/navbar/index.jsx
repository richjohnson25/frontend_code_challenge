'use client'

import { FaSearch } from "react-icons/fa";

import Image from "next/image"
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="flex justify-center items-center py-4 px-8 gap-8 border-b-2 border-orange-500">
            <div className="flex basis-1/3">
                <Link href={'/'}>
                    <Image src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/logo.svg' width={150} height={150} alt="Japfa Logo"/>
                </Link>
            </div>
            <div className="basis-1/3 justify-center flex gap-8">
                <Link href={'/about'}>
                    <h1>ABOUT US</h1>
                </Link>
                <Link href={'/products'}>
                    <h1>PRODUCTS</h1>
                </Link>
                <div>TEAMS</div>
            </div>
            <div className="flex basis-1/3 justify-end pr-8">
                <div>
                    <FaSearch />
                </div>
            </div>
        </div>
    )
}