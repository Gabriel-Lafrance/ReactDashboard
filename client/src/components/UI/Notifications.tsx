import { Popover, Transition } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/24/outline"
import { CheckIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"

export const Notifications = () => {

    return (
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
                    <a className="text-action hover:text-secondary hover:bg-dark-light p-2 rounded-2xl text-xs border-[1px] border-action hover:border-dark" href="#">Mark all as read</a>
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
    )

}