

import SearchIcon from '@mui/icons-material/Search';


export default function Landing() {




    return (

        <div className="relative">

            <div className="flex flex-col pt-10 lg:pt-0 justify-center  items-center h-[calc(100vh-80px)] lg:flex-row">
                <img src="Images/backgroundImg.png" alt="background" className="absolute top-0 left-0 max-w-[1400px] md:max-w-full md:w-[100vw] h-full" />
                <div className="lg:h-[calc(100vh-80px)] w-full lg:w-[60%] z-10 flex flex-col mb-[15rem] md:mb-[10rem] items-start justify-center pl-5 lg:pl-20 gap-8 md:gap-5">

                    <h1 className="text-[3rem] leading-tight md:leading-snug md:text-6xl font-bold text-[#003d4d] ">
                        Shadowing Opportunity to<br /> Learn and Explore

                    </h1>
                    <p className="text-md md:text-xl mb-10 w-[80%] md:w-[60%] tracking-wider">


                        Shadowing opportunity enables to observe and learn from experienced professionals in their desired field. This can be a valuable learning experience as it allows individuals to gain insight into the day-to-day work and tasks involved in a particular job.
                    </p>
                    <div className='flex flex-col items-center w-fit py-5 px-10 gap-5 rounded-xl 2xl:rounded-full bg-white shadow-sm shadow-gray-500 2xl:flex-row'>
                        <div className="flex flex-col justify-center 2xl:border-r-2 border-gray-400  text-lg">
                            <label className="font-semibold">Title</label>
                            <input className="2xl:mr-5 outline-none" placeholder="Enter Job Title" />
                        </div>
                        <div className="flex flex-col justify-center text-lg">
                            <label className="font-semibold">Location </label>
                            <input placeholder="Enter Location" className="outline-none" />
                        </div>
                        <div className="ml-10">
                            <button className="bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full text-lg"><SearchIcon /> Search</button>
                        </div>

                    </div>
                </div>
                <div className="lg:h-[calc(100vh-80px)] w-fit lg:w-[40%] h-fit relative">
                    <img src="Images/bg11.png" alt="Hiring" className=" h-[500px] 2xl:h-[640px] absolute lg:bottom-80 right-0" />

                </div>
            </div>
        </div>

    )
}
