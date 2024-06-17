'use client'

import { FaSearch } from "react-icons/fa";

import Image from "next/image"
import Link from "next/link";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import HamburgerMenu from "../hamburger";

export default function Navbar(){
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className="flex justify-center items-center py-4 px-8 gap-8 border-b-2 border-orange-500">
            <div className="flex basis-1/2 lg:basis-1/3">
                <Image src='https://d1be5sn7lppxuh.cloudfront.net/assets/files/images/logo.svg' width={150} height={150} alt="Japfa Logo"/>
            </div>
            <div className="hidden lg:flex lg:basis-1/3 lg:justify-center lg:gap-4">
                <Link href={'/'}>
                    <h1>HOME</h1>
                </Link>
                <Link href={'/about'}>
                    <h1>ABOUT US</h1>
                </Link>
                <Link href={'/products'}>
                    <h1>PRODUCTS</h1>
                </Link>
                <Link href={'/teams'}>
                    <h1>TEAMS</h1>
                </Link>
            </div>
            <div className="flex basis-1/2 lg:hidden justify-end">
                <Drawer opened={opened} onClose={close} position="right">
                    <div className="justify-center flex flex-col gap-4">
                        <Link href={'/'}>
                            <h1>HOME</h1>
                        </Link>
                        <Link href={'/about'}>
                            <h1>ABOUT US</h1>
                        </Link>
                        <Link href={'/products'}>
                            <h1>PRODUCTS</h1>
                        </Link>
                        <Link href={'/teams'}>
                            <h1>TEAMS</h1>
                        </Link>
                    </div>
                </Drawer>
                <button onClick={open}><HamburgerMenu /></button>
            </div>
            <div className="hidden lg:flex lg:basis-1/3 justify-end items-center gap-4 pr-8">
                <FaSearch />
                <h2 className="text-lg">EN|ID</h2>
            </div>
        </div>
    )
}