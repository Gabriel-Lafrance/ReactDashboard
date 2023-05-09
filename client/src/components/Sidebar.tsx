import React from "react";
import Link from "next/link";
import { HomeIcon, PresentationChartLineIcon, CircleStackIcon, ServerIcon, BugAntIcon } from "@heroicons/react/24/solid";
import { usePathname } from 'next/navigation';

import logo from "../assets/logo.png"


export const SideBar = React.forwardRef<any, any>((props, ref) => {
    
    const path = usePathname()
    
    return (
        <div ref={ref} className="fixed w-48 md:w-56 h-full bg-white shadow-xl">
            <div className="flex justify-center mt-6 mb-8">
                <picture>
                    <img 
                    className=" w-24 md:w-32 h-auto"
                    src={logo} 
                    alt="My logo" />
                </picture>
            </div>
            <div className="flex flex-col">
                <Link href="/" className="">
                    <div className={`py-3 mx-3 mb-3 rounded-xl text-center cursor-pointer items-center transition-colors flex flex-row justify-center border-[1px] border-action hover:border-dark
                     ${
                        path == "/" 
                        ? " bg-action text-secondary"
                        : " text-action hover:text-secondary hover:bg-dark-light" 
                    }`}>
                    <HomeIcon className="h-5 w-5 mr-2"/>
                    <p className=" mr-5">Home</p>
                    </div>
                </Link>
                <Link href="/" className="">
                    <div className={`py-3 mx-3 mb-3 rounded-xl text-center cursor-pointer items-center transition-colors flex flex-row justify-center border-[1px] border-action hover:border-dark
                     ${
                        path == "" 
                        ? " bg-action text-secondary"
                        : " text-action hover:text-secondary hover:bg-dark-light" 
                    }`}>
                    <PresentationChartLineIcon className="h-5 w-5 mr-2"/>
                    <p className=" mr-5">Stats</p>
                    </div>
                </Link>
                <Link href="/" className="">
                    <div className={`py-3 mx-3 mb-3 rounded-xl text-center cursor-pointer items-center transition-colors flex flex-row justify-center border-[1px] border-action hover:border-dark
                     ${
                        path == "/" 
                        ? " bg-action text-secondary"
                        : " text-action hover:text-secondary hover:bg-dark-light" 
                    }`}>
                    <ServerIcon className="h-5 w-5 mr-2"/>
                    <p className=" mr-5">Server</p>
                    </div>
                </Link>
                <Link href="/" className="">
                    <div className={`py-3 mx-3 mb-3 rounded-xl text-center cursor-pointer items-center transition-colors flex flex-row justify-center border-[1px] border-action hover:border-dark
                     ${
                        path == "/" 
                        ? " bg-action text-secondary"
                        : " text-action hover:text-secondary hover:bg-dark-light" 
                    }`}>
                    <BugAntIcon className="h-5 w-5 mr-2"/>
                    <p className=" mr-5">Errors</p>
                    </div>
                </Link>
            </div>
        </div>
    )
});

 SideBar.displayName = "SideBar";