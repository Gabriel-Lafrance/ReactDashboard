import { Menu, Transition } from "@headlessui/react"
import { CogIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { Fragment } from "react"
import profile from "../../assets/profilepic.png"

export const AccountMenu = () =>{
    return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
        <Menu.Button className=" inline-flex w-full justify-center items-center text-action ho ">
            <picture>
                <img 
                className="rounded-full h-[50px] mx-2 md:mr-4  border-[1px] border-action shadow-2xl"
                src={profile}
                alt="Your profile picture"/>
            </picture>
        </Menu.Button>
    </div>
    <Transition as={Fragment}
    enter="transition ease-out duration-300" enterFrom="transform scale-95" enterTo="transform scale-100"
    leave="transition ease-in scale-100" leaveFrom="transfrom scale-100" leaveTo="transfrom scale-95">
        <Menu.Items className=" absolute right-0 w-56 z-50 mt-2 origin-top-right bg-secondary rounded-2xl shadow-2xl">
            <div className="px-2">
                {/* In case of real usage, we could create those by mapping over and create them one by one */}
                <Menu.Item>
                    <Link href="#" className="flex justify-center hover:bg-dark-light hover:text-secondary text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[1px] border-action hover:border-dark">
                        <UserIcon className=" h-6 w-6 mr-2"/>
                        My Account
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="#" className="flex justify-center hover:bg-dark-light hover:text-secondary text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[1px] border-action hover:border-dark">
                        <CreditCardIcon className=" h-6 w-6 mr-2"/>
                        Payments
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  href="#" className="flex justify-center hover:bg-dark-light hover:text-secondary text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[1px] border-action hover:border-dark">
                        <CogIcon className=" h-6 w-6 mr-2"/>
                        Settings
                    </Link>
                </Menu.Item>
            </div>
        </Menu.Items>
    </Transition>
</Menu>
)}