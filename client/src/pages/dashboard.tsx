import { ClockIcon, CloudArrowDownIcon, CpuChipIcon } from "@heroicons/react/24/solid"

export const Dashboard = () => {
    return (
    <div className="mx-16 w-auto h-[100vh]">
        <p className="text-white text-lg font-bold mt-8">My Dashboard</p>
        <div className=" h-1 bg-white w-full mb-8 mt-2"/>

        <div className="h-fit">
            <div className="grid lg:grid-cols-3 gap-5 my-16">
                <div className="rounded-2xl bg-green-400 h-32 shadow-sm flex justify-center items-center border-2 border-white">
                     <div className=" w-full h-24 flex justify-center mt-8">
                        <ClockIcon className="h-16 w-16 text-green-800 mr-4"/>
                        <span className="text-secondary font-medium text-lg my-[2%]">Uptime : 99.9%</span>
                     </div>
                </div>
                <div className="rounded-2xl bg-red-400 h-32 shadow-sm flex justify-center items-center border-2 border-white">
                     <div className=" w-full h-24 flex justify-center mt-8">
                        <CloudArrowDownIcon className="h-16 w-16 text-red-800 mr-4"/>
                        <span className="text-secondary font-medium text-lg my-[2%]">Stockage : 99.9%</span>
                     </div>
                </div>
                <div className="rounded-2xl bg-yellow-400 h-32 shadow-sm flex justify-center items-center border-2 border-white">
                     <div className=" w-full h-24 flex justify-center mt-8">
                        <CpuChipIcon  className="h-16 w-16 text-yellow-800 mr-4"/>
                        <span className="text-secondary font-medium text-lg my-[2%]">CPU Usage : 49.99%</span>
                     </div>
                </div>
            </div>
        </div>
        <div className="h-4/6">
            <div className="grid col-1 bg-white rounded-2xl h-5/6 shadow-sm"></div>
        </div>

    </div>
    )

}