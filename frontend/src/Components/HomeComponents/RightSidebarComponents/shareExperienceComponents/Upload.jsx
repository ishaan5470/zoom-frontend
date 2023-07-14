import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import Thumbs from "./Thumbs";
import { useCreatePostMutation } from "../../../../redux/api/sspost";
import { useSelector } from "react-redux";
import axios from "axios";

const Upload = ({id, typeOfPost, handleClose, open1, open2, setOpen2, mast }) => {
  // const [handle, data] = useCreatePostMutation();
  const [createPost, data] = useCreatePostMutation();

  const { userId, userName } = useSelector((state) => state.user);
  // console.log(data)
  // console.log(data.status)
  // const { data: data1 } = useFetchUserInfoQuery("64356264fb99aceedccc28d2")

  const [inputValue, setInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [contentType, setContentType] = useState(undefined);

  useEffect(() => {
    if (typeOfPost.photos) {
      setContentType("images/*");
    } else if (typeOfPost.videos) {
      setContentType("video/mp4");
    } else if (typeOfPost.projects) {
      setContentType("application/pdf");
    }
  }, [typeOfPost]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // try {
  //   if (data.status === "fulfilled") {
  //     setOpen2(true);
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return "Error";
  // }

  const handle1 = async () => {
    console.log("selected image : ",selectedImage);
    console.log("input value : ",inputValue);
    if (selectedImage && inputValue) {
      // const url = await handle({
      //   userName,
      //   postDescription: inputValue,
      //   contentType,
      // }).unwrap();
      // console.log(url);
      // // const done = await axios({
      // //   method:"put",
      // //   url:url,
      // //   data:{
      // //     postImage:SourceBuffer(selectedImage)
      // //   },
      // // },
      // // )
      // const formData = new FormData();
      // formData.append("postImage", selectedImage);
      // const done = await axios.put(url, formData);
      // console.log(done);
    const formData = new FormData();
    formData.append("photo", selectedImage);
    await axios
      .post("http://localhost:8000/skills/createpost", formData)
      .then((response) => {
        console.log("hello", response.data);
      })

      .catch((error) => {
        console.error(error);
      });
    createPost(formData);
    }
  };

  return (
    <>
      <Dialog open={open1} fullWidth maxWidth="md">
        <div className="flex align-middle flex-wrap justify-between w-full">
          <div className="min-w-[300px] lg:min-w-[60%] flex flex-col items-center">
            <div className="flex items-center gap-4 pl-10">
              <button onClick={handleClose} color="primary">
                <ArrowBackIosIcon />
              </button>
              <div className="text-[2.5rem] text-center mr-10 my-3 text-[#003d4d] font-semibold">
                Create New Post!
              </div>
            </div>
            <div className="h-[400px] w-[400px] flex flex-col items-center justify-center border-2 border-dashed border-[#003d4d]">
              <div className="flex justify-around items-center">
                {typeOfPost.photos && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="inputField"
                  />
                )}
                {typeOfPost.videos && (
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleImageChange}
                    className="inputField"
                  />
                )}
                {typeOfPost.projects && (
                  <input
                    type="file"
                    accept="aplication/pdf,application/msword"
                    onChange={handleImageChange}
                    className="inputField"
                  />
                )}
                {preview && (
                  <button
                    className="inline"
                    onClick={() => {
                      setSelectedImage(null);
                      setPreview(null);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                )}
              </div>
              <div>
                {preview
                  ? (typeOfPost.photos && (
                      <img
                        src={preview}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    )) ||
                    (typeOfPost.videos && (
                      <video
                        src={preview}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                        controls
                      />
                    )) ||
                    (typeOfPost.projects && (
                      <object
                        data={preview}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        aria-label="This object displays an PDF file"
                      />
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className="h-[580px] w-full bg-[#f1f1f1] lg:w-[36%] flex flex-col items-center pt-4">
            <div className="h-[100px] flex items-center">
              <div className="w-full mx-1 object-cover bg-transparent rounded-[100px] px-10">
                <img
                  src="/Images/profilePic.png"
                  className="rounded-full h-[50px] object-cover inline"
                  alt="ProfileImg"
                />
                <span className="ml-6 text-lg font-semibold text-[#003d4d]">
                  First Last Name
                </span>
              </div>
            </div>
            <textarea
              autoFocus
              rows={15}
              type="text"
              className="w-[90%] bg-transparent p-2 outline-none"
              placeholder="Enter Description"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div className="flex justify-center mb-6 mt-10 ">
              <button
                onClick={handle1}
                className="text-white border-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#003D4D] to-[#57A7B3]"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      {open2 === true ? <Thumbs mast={mast} open={open2} /> : ""}
    </>
  );
};

export default Upload;
