import { Bars3Icon} from "@heroicons/react/24/solid";
import { Notifications } from "./UI/Notifications";
import { AccountMenu } from "./UI/AccountMenu";

type TopBarProps = {
    showNav : boolean,
    setShowNav : any,
}

export const TopBar = ( props : TopBarProps ) => {
    return (
        <div className={`fixed w-full h-16 flex justify-between items-center transition-all duration-300 align-middle bg-secondary drop-shadow-xl ${props.showNav ? "pl-56" : " "}`}>
            <div className="mx-2 md:mr-auto">
                <div className=" bg-secondary rounded-full p-2 text-action hover:text-secondary hover:bg-dark-light cursor-pointer border-[1px] border-action hover:border-dark"
                    onClick={() => props.setShowNav(!props.showNav)}> 
                    <Bars3Icon className="h-8 w-8"/>
                </div>
            </div>
            <div className=" flex items-center justify-center  place-items-center pr-2  mt-2">
                <Notifications/>
                <AccountMenu/>
            </div>
        </div>
    )


}