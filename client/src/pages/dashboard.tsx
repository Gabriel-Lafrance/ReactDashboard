import { ClockIcon, CloudArrowDownIcon, CpuChipIcon } from "@heroicons/react/24/solid"

export const Dashboard = () => {
    return (
    <div className="mx-16 w-auto h-[100vh]">
        <p className="text-action text-lg font-bold mt-8">My Dashboard</p>
        <div className=" h-1 bg-action w-full mb-8 mt-2"/>

        <div className="h-fit">
            <div className="grid lg:grid-cols-3 gap-5 my-16">
                {/* In case of real usage, we could create those by mapping over and create them one by one */}
                <div className="rounded-2xl bg-green-400 h-40 shadow-sm flex justify-center items-center border-2 border-white">
                     <div className=" w-full h-24 flex flex-col items-center justify-center pb-2">
                        <ClockIcon className="h-16 w-16 text-green-800"/>
                        <span className="text-secondary font-medium text-base sm:text-lg  md:text-base 2xl:text-lg">Uptime : 99.9%</span>
                     </div>
                </div>
                <div className="rounded-2xl bg-red-400 h-40 shadow-sm flex justify-center items-center border-2 border-white">
                     <div className=" w-full h-24 flex flex-col items-center justify-center pb-2">
                        <CloudArrowDownIcon className="h-16 w-16 text-red-800"/>
                        <span className="text-secondary font-medium text-base sm:text-lg md:text-base 2xl:text-lg">Stockage : 99.9%</span>
                     </div>
                </div>
                <div className="rounded-2xl bg-yellow-400 h-40 shadow-sm flex justify-center items-center border-2 border-white">
                     <div className="w-full h-24 flex flex-col items-center justify-center pb-2">
                        <CpuChipIcon  className="h-16 w-16 text-yellow-800 "/>
                        <span className="text-secondary font-medium text-base sm:text-lg md:text-base 2xl:text-lg">CPU : 49.9%</span>
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