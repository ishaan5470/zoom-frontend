
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';

const JobCard = () => {

    const Skills = () => {
        return (
            <div className="bg-[#f1f1f1] w-fit inline-flex px-5 py-1 rounded-full justify-center items-center mx-1 my-1 text-xs cursor-default">
                Figma
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-3 bg-[#f9f9f9] rounded-xl p-5 w-[480px] cursor-default shadow-md shadow-gray-400">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <h1 className="text-xl font-bold">Website Designer</h1>
                        <p>Kamaal Company</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <ShareIcon />
                    </div>
                </div>
                <div className="flex justify-around items-center w-full">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-lg font-semibold"><LocationOnIcon />Location</span>
                        <span>Work From Home</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-lg font-semibold"><DateRangeIcon />Start Date</span>
                        <span>Immediately</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-lg font-semibold"><img src="Images/Money.png" alt="money" className="inline" />CTC</span>
                        <span>12 LPA</span>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-lg font-semibold">Skills</h2>
                    <div>
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />

                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div><button className="bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-2 px-8 rounded-full mr-4">Accept</button>
                        <button className="bg-[#e7f0f1] text-[#145665] py-2 px-8 rounded-full">Decline</button></div>

                    <div>
                        {/* <div className="bg-[#f1f1f1] w-fit inline-flex px-5 py-1 rounded-full justify-center items-center mx-1 my-1">
                        
                            Full Time
                        </div> */}
                        <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobCard
