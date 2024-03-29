'use client';

import Image from "next/image";
import Link from "next/link"

export const Navbar = () => {
    const navItems = [
        {
            title: "HOME",
            link: "/",
            isShow: true
        },
        {
            title: "ABOUT",
            link: "/",
            isShow: true
        },
    ]
    return (
        <>
            <div className="flex flex-row item-center w-full px-2 py-6">
                <div className="flex self-start items-center w-auto gap-3">
                    <Link href="/" className="text-sm">
                        TMAGE
                    </Link>
                </div>
                <div className="flex justify-end items-center w-full">
                    <ul className="flex flex-row gap-6 max-lg:hidden">
                        {navItems.map((item, index) => {
                            if (item.isShow) return (
                                <li key={index} className="flex">
                                    <Link href={item.link} className="text-sm">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current cursor-pointer lg:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </div>
        </>
    );
}