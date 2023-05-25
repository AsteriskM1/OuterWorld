"use client"

import { logo, close, menu } from "@/assets"
import { navLinks } from "@/constants"
import Image from "next/image"
import SubHeading from "./ui/SubHeading"
import Link from "next/link"
import { useState } from "react"



const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(false)
  return (
    <nav className="tab:mt-12 mob:mt-0 mt-6 flex w-full justify-between items-center">
        <div className="mob:ml-12 ml-6">
            <Link href='/'>
                <Image src={logo} alt="logo" className="mob:w-[48px] mob:h-[48px] w-[40px] h-[40px]" />
            </Link>
        </div>
        <div className="w-[540px] h-[1px] bg-white bg-opacity-25 relative left-12 z-10 tab:block hidden" />
        <div className="tab:w-[830px] w-[450px] h-[96px] backdrop-blur-2xl bg-opacity-[0.04] bg-white mob:flex hidden items-center top-0">
            <ul className="flex flex-1 tab:ml-14 ml-7">
            {navLinks.map((item, index) => (
                <li
                    className="tab:ml-10 ml-8 tracking-[2.7px]"
                    key={index}
                >
                    <Link href={`${item.id}`} className={`hover-underline-animation-2`}><SubHeading type={'nav'} className="flex flex-row"><span className="mr-1 font-bold tab:flex hidden">{0}{index}</span>{item.title}</SubHeading></Link>
                </li>
            ))}
            </ul>
        </div>
        <div className="mob:hidden flex flex-1 justify-end items-center z-10">
            <Image 
                src={toggle ? close : menu}
                alt={toggle ? 'close' : 'menu'}
                width={24}
                height={21}
                className="object-contain z-[1] mr-6"
                onClick={() => setToggle((prev) => !prev)}
            />
            <div
                className={`${toggle ? 'flex' : 'hidden'} p-2 absolute min-w-[254px] h-screen top-0 backdrop-blur-2xl bg-opacity-[0.04] bg-white`}
            >
                <ul className="list-none flex flex-col justify-start items-start flex-1 relative left-1 top-28 ">
                    {navLinks.map((item, index) => (
                    <li
                        className="tab:ml-10 ml-8 tracking-[2.7px] mb-8"
                        key={index}
                    >
                        <a href={`${item.id}`}><SubHeading type={'nav'} className="flex flex-row"><span className="mr-3 font-bold flex">{0}{index}</span>{item.title}</SubHeading></a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar