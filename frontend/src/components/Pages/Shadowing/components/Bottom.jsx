

export default function Bottom() {
    return (
        <>
            <div className="w-full bg-[#f9f9f9] py-[10rem] px-1">
                <h1 className="text-center font-bold text-4xl mb-20 text-[#003d4d]">We Have more Oppurtunities!!</h1>
                <div className="grid grid-cols-1 justify-center items-center px-20 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 01 */}
                    <div className="w-full shadow-md flex flex-col  my-4 rounded-[2rem] relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
                        <h2 className="text-3xl text-[#395376] font-bold text-center z-10">Work With Professionals</h2>
                        <img src="Images/b1.png" className="absolute h-full w-full top-0 " alt="search" />
                        <img src="Images/p1.png" className="absolute bottom-0 left-0 right-0" alt="search" />
                    </div>

                    {/**02 */}
                    <div className="w-full shadow-md flex flex-col  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
                        <h2 className="text-2xl text-[#395376] font-bold text-center z-10">Work with Self-Employed</h2>
                        <img src="Images/b2.png" className="absolute h-full w-full top-0 left-0" alt="search" />
                        <img src="Images/p2.png" className="absolute bottom-0 left-0" alt="search" />
                    </div>

                    {/**03 */}
                    <div className="w-full shadow-md flex flex-col  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
                        <h2 className="text-2xl text-[#395376] font-bold text-center z-10">Work with Influencers</h2>
                        <img src="Images/b3.png" className="absolute h-full w-full top-0 left-0" alt="search" />
                        <img src="Images/p3.png" className="absolute bottom-0 left-0" alt="search" />
                    </div>
                </div>
            </div>


            <div className="w-full bg-[#f9f9f9] py-[10rem] px-1">
                <h1 className="text-center font-bold text-4xl mb-20 text-[#003d4d]">Hey! We got these for You.</h1>
                <div className="grid grid-cols-1 justify-center items-center px-20 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 01 */}
                    <div className="w-full shadow-md flex flex-col  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
                        <h2 className="text-3xl text-[#395376] font-bold text-center z-10">Internships</h2>
                        <img src="Images/b4.png" className="absolute h-full w-full top-0 left-0" alt="search" />
                        <img src="Images/p4.png" className="absolute bottom-0 left-0" alt="search" />
                    </div>

                    {/**02 */}
                    <div className="w-full shadow-md flex flex-col  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
                        <h2 className="text-2xl text-[#395376] font-bold text-center z-10">Shadowing Work</h2>
                        <img src="Images/b5.png" className="absolute h-full w-full top-0 left-0" alt="search" />
                        <img src="Images/p5.png" className="absolute bottom-0 left-0" alt="search" />
                    </div>

                    {/**03 */}
                    <div className="w-full shadow-md flex flex-col  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
                        <h2 className="text-2xl text-[#395376] font-bold text-center z-10">Challenges</h2>
                        <img src="Images/b6.png" className="absolute h-full w-full top-0 left-0" alt="search" />
                        <img src="Images/p6.png" className="absolute bottom-0 left-0" alt="search" />
                    </div>
                </div>
            </div>



        </>
    )
}
