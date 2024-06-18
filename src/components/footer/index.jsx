'use client'
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

import Link from "next/link";

export default function Footer(){
    return (
        <div className="flex flex-col justify-center items-center p-8 gap-8 bg-gray-950">
            <section className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col text-gray-500 gap-4">
                    <h1 className="text-xl font-bold text-orange-500">CONTACT US</h1>
                    <h3 className="text-lg font-bold text-orange-500">Head Office</h3>
                    <div className="flex flex-row gap-4">
                        <GrLocation className="size-6" />
                        <div>
                            <h4 className="font-bold">PT Japfa Comfeed Indonesia Tbk.</h4>
                            <p>Wisma Millenia Lt. 7<br />
                            Jl. MT. Haryono Kav. 16<br />
                            Jakarta 12810, Indonesia</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <IoCallOutline className="size-6" />
                        <p>021-2854 5680 (Hunting)</p>
                    </div>
                </div>
                <div className="flex flex-col text-gray-500 gap-4">
                    <h1 className="text-xl font-bold text-orange-500">USEFUL LINKS</h1>
                    <div className="text-lg">
                        <Link href={'/'}>
                            <h1>Home</h1>
                        </Link>
                        <Link href={'/about'}>
                            <h1>About Us</h1>
                        </Link>
                        <Link href={'/products'}>
                            <h1>Products</h1>
                        </Link>
                        <Link href={'/teams'}>
                            <h1>Teams</h1>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col text-gray-500 gap-4">
                    <h1 className="text-xl font-bold text-orange-500">FOLLOW US</h1>
                    <div className="flex flex-row gap-4 text-3xl">
                        <div className="hover:text-orange-500"><FaInstagram /></div>
                        <div className="hover:text-orange-500"><FaFacebookSquare /></div>
                        <div className="hover:text-orange-500"><FaLinkedin /></div>
                        <div className="hover:text-orange-500"><FaYoutube /></div>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-xs font-bold text-gray-500">
                    Copyright &copy; 2024 PT Japfa Comfeed Indonesia Tbk.<br />
                    This website is made during the second Code Challenge at Purwadhika Digital School and is not intended for commercial purposes. It does not impersonate the official JAPFA Comfeed website.
                </p>
            </section>
        </div>
    )
}