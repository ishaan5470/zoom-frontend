import { Dialog, DialogContent } from '@mui/material';

export default function Thumbs({ mast, open }) {
  return (
    <>
      <Dialog open={open} onClose={mast} fullWidth maxWidth="sm" className='backdrop-blur-sm'>
        <div className='flex mx-auto text-3xl mt-3'>
          Your Post Has Been Shared
        </div>
        <DialogContent>
          <div className="flex flex-col items-center gap-12 my-4">
            <div className="bg-white h-[150px] w-[150px] "><img src="Images/conf.png" alt="" /></div>

            <div className="flex justify-center mb-6 mt-10 ">
              <button onClick={mast} className='text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]'>Close</button>

            </div>
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}

