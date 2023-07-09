
import { Dialog } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Thumbs from "./Thumbs"

import { useFetchUserInfoQuery, useCreatePostMutation } from '../../../../../redux/slices/sspost';


export default function Upload({ handleClose, open, id, open2, setOpen2, mast }) {


  const [handle, data] = useCreatePostMutation()


  console.log(data)
  console.log(data.status)
  const { data: data1 } = useFetchUserInfoQuery("64356264fb99aceedccc28d2")

  const [inputValue, setInputValue] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  try {
    if (data.status === 'fulfilled') {

      setOpen2(true)
    }
  } catch (err) {
    console.log(err)
    return "Error"
  }


  const handle1 = async () => {
    if (selectedImage && inputValue) {

      await handle({ id: "64356264fb99aceedccc28d2", description: inputValue, image: previewImage })

    }







  }

  return (
    <>
      <Dialog open={open} fullWidth maxWidth="lg">
        <div className='flex align-middle flex-wrap justify-between w-full'>
          <div className="min-w-[300px] lg:min-w-[60%]">
            <div className="flex">

              <button onClick={handleClose} color="primary" className=''>
                <CloseIcon />
              </button>
              <div className="text-[2.5rem] text-center mr-10 my-3">Create New Post!</div>
            </div>
            <div className='min-h-[400px]'>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {previewImage && (
                <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              )}
            </div>
          </div>
          <div className="h-[580px] min-w-[300px] bg-slate-300 lg:min-w-[40%]">

            <div className="h-[100px]  bg-yellow-200 flex items-center">


              <div className=' w-[50px] h-[50px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>

            </div>

            <input type="text" className="h-[5rem] w-full bg-transparent" placeholder="Enter Description" value={inputValue} onChange={handleInputChange} />

            <div className="flex justify-center mb-6 mt-10 ">
              <button onClick={handle1} className='text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]'>Post</button>
            </div>

          </div>

        </div>




      </Dialog>

      {open2 === true ? <Thumbs mast={mast} open={open2} /> : ""}
    </>
  );
}
