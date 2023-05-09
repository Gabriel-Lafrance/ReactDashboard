import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Bars3Icon, CheckIcon, ChevronDownIcon, UserIcon, BugAntIcon, CogIcon, CreditCardIcon} from "@heroicons/react/24/solid";
import {  BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import profile from "../assets/profilepic.png"

type TopBarProps = {
    showNav : boolean,
    setShowNav : any,
}

export const TopBar = ( props : TopBarProps ) => {
    return (
        <div className={`fixed w-full h-16 flex justify-between items-center transition-all duration-300 align-middle bg-action drop-shadow-xl 
        ${props.showNav 
            ? "pl-56"
            : " "}`}>
            <div className="mx-2 md:mr-auto">
                <div className=" bg-secondary rounded-full p-2 text-action hover:text-secondary hover:bg-dark-light cursor-pointer border-[1px] border-action hover:border-dark"
                     onClick={() => props.setShowNav(!props.showNav)}> 
                    <Bars3Icon className="h-8 w-8"/>
                </div>
            </div>
            <div className=" flex items-center justify-center  place-items-center pr-2  mt-2">
                <Popover className="relative">
                    <Popover.Button className="outline-none mx-2 cursor-pointer text-dark">
                    <div className=" bg-secondary rounded-full  p-2 text-action hover:text-secondary hover:bg-dark-light cursor-pointer border-[1px] border-action hover:border-dark"> 
                        <BellIcon className="h-8 w-8 "/>
                    </div>
                    </Popover.Button>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform scale-95"
                    enterTo="transform scale-100"
                    leave="transition ease-in scale-100"
                    leaveFrom="transfrom scale-100"
                    leaveTo="transfrom scale-95"
                    >
                    <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-secondary rounded-xl max-w-xs sm:max-w-sm w-screen">
                        <div className="relative p-4 ">
                            <div className="flex justify-between items-center w-full ">
                                <p className="text-dark text-sm font-medium">Notifacations</p>
                                <a className="text-action hover:text-secondary hover:bg-dark-light p-2 rounded-2xl text-xs" href="#">Mark all as read</a>
                            </div>
                            <div className=" mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                                {/* In case of real usage, this would be mapped over and created one by one */}
                                <div className="flex">
                                    <div className=" rounded-full shrink-0 p-4 bg-green-200 flex items-center justify-center">
                                        <CheckIcon className="h-4 w-4  text-green-600"/>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-dark">Notification Title 1</p>
                                        <p className="text-xs text-dark-light truncate">Notification Description 1</p>
                                    </div>
                                </div>
                                <div className="flex">
                                <div className=" rounded-full shrink-0 p-4 bg-green-200 flex items-center justify-center">
                                        <CheckIcon className="h-4 w-4  text-green-600"/>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-dark">Notification Title 1</p>
                                        <p className="text-xs text-dark-light truncate">Notification Description 1</p>
                                    </div>
                                </div>
                                <div className="flex">
                                <div className=" rounded-full shrink-0 p-4 bg-green-200 flex items-center justify-center">
                                        <CheckIcon className="h-4 w-4  text-green-600"/>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-dark">Notification Title 1</p>
                                        <p className="text-xs text-dark-light truncate">Notification Description 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className=" inline-flex w-full justify-center items-center text-secondary ">
                            <picture className="hidden md:block">
                                <img 
                                className="rounded-full h-[50px] mx-2 md:mr-4  border-[1px] border-action shadow-2xl"
                                src={profile}
                                alt="Your profile picture"/>
                            </picture>
                            <span className="hidden md:block text-base font-medium">Gabriel Lafrance</span>
                            <ChevronDownIcon className="mx-2 h-12 w-12  hover:text-dark-light"/>
                        </Menu.Button>
                    </div>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform scale-95"
                    enterTo="transform scale-100"
                    leave="transition ease-in scale-100"
                    leaveFrom="transfrom scale-100"
                    leaveTo="transfrom scale-95"
                    >
                        <Menu.Items className=" absolute right-0 w-56 z-50 mt-2 origin-top-right bg-secondary rounded-2xl shadow-2xl">
                            <div className="px-2">
                                {/* In case of real usage, we could create those by mapping over and create them one by one */}
                                <Menu.Item>
                                    <Link href="#" className="flex justify-center hover:bg-dark-light hover:text-secondary text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[1px] border-action hover:border-dark">
                                        <UserIcon className=" h-4 w-4 mr-2"/>
                                        My Account
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href="#" className="flex justify-center hover:bg-dark-light hover:text-secondary text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[1px] border-action hover:border-dark">
                                        <CreditCardIcon className=" h-4 w-4 mr-2"/>
                                        Payments
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link  href="#" className="flex justify-center hover:bg-dark-light hover:text-secondary text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[1px] border-action hover:border-dark">
                                        <CogIcon className=" h-4 w-4 mr-2"/>
                                        Settings
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )


}