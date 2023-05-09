
export const Dashboard = () => {
    return (
    <div className="mx-16 w-auto h-[100vh]">
        <p className="text-white text-lg font-bold mt-8">My Dashboard</p>
        <div className=" h-1 bg-white w-full mb-8 mt-2"/>

        <div className="h-fit">
            <div className="grid lg:grid-cols-3 gap-5 mb-16">
            <div className="rounded bg-white h-40 shadow-sm"></div>
            <div className="rounded bg-white h-40 shadow-sm"></div>
            <div className="rounded bg-white h-40 shadow-sm"></div>
            </div>
        </div>
        <div className="  h-4/6">
            <div className="grid col-1 bg-white h-full shadow-sm"></div>
        </div>

    </div>
    )

}