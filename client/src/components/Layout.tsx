import React, { Fragment } from "react"
import { Transition } from "@headlessui/react"
import { SideBar } from "./Sidebar"
import { TopBar} from "./Topbar"

type Props = {
    children?: React.ReactNode,
  }

export const Layout = ({children} : Props) => {
{}
    const [showNav,setShowNav] = React.useState<boolean>(true);
    const [isMobile,setIsMobile] = React.useState<boolean>(false);

    function handleResize(){
        if (innerWidth <= 640){
            setShowNav(false);
            setIsMobile(true);
        } else {
            setShowNav(true);
            setIsMobile(false);
        }
    }

    React.useEffect(() => {
        if (typeof window != undefined){
            addEventListener("resize", handleResize);
        }

        return () => {
            removeEventListener("resize" , handleResize);
        }
    },[]);

    return (
        <>
            <TopBar showNav={showNav} setShowNav={setShowNav}/>
            <Transition
             as={Fragment}
             show={showNav}
             enter="transform transition duration-300"
             enterFrom="-translate-x-full"
             enterTo="translate-x-0"
             leave="transform transition duration-300 ease-in-out"
             leaveFrom="translate-x-0"
             leaveTo="-translate-x-full"
            >
            <SideBar props={setShowNav} />
            </Transition>
            <main className={`pt-16 transition-all duration-300 ${showNav && !isMobile ? "pl-48 md:56" : ""}`}>
                <div className="">
                    {children}
                </div>
            </main>
        </>
    )
}