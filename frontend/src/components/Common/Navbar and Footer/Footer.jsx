import React from "react";
import { Link } from "react-router-dom";
import { Instagram, LinkedIn, Facebook, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#003d4d] to-[#57a7b3] py-11 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:pr-32">
        <div className="text-gray-400">
          <h3 className="text-lg text-white font-medium mb-4 ml-10">About Us</h3>
          <p className="mb-4 ml-10 text-white">ZealYug is India's first innovative hiring platform that connects job seekers and employers based on one’s skills, experiences, stories and talent more than resume.</p>
          <div><img src="images/LOGO.png" className="h-[80px] ml-10 mb-5" alt="Logo" /></div>
        </div>
        <div className="text-white ml-10">
          <h3 className="text-lg font-medium mb-4">Important Links</h3>
          <ul className="mb-4">
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">Find Work</a></li>
            <li className="mb-2"><a href="#">Find Talent</a></li>
            <li className="mb-2"><a href="#">Post Now</a></li>
          </ul>
        </div>
        <div className="text-white ml-10">
          <h3 className="text-lg font-medium mb-4">Contact Info</h3>
          <p className="mb-4 text-white">  Janakpuri Delhi</p>
          <p className="mb-4 text-white">+91 9319692389</p>
          <p className="mb-4 text-white">zealyug.hr@gmail.com</p>
        </div>
        <div className="text-white ml-10">
          <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-4 text-white">Sign up for our newsletter to stay up to date. <div className="flex justify-center items-center mt-8">

            <input type="email" placeholder="Enter your Email here" className="min-w-[200px] border border-gray-400 rounded-full py-4 px-6" />
            <button class="rounded-full bg-[#003D4D] py-2 px-4">Send

            </button>
    
          </div>
          </p>
          <p className="text-white">Social Links:-  <Facebook fontSize="large" color="white" /> <Twitter fontSize="large" color="white" />  <LinkedIn fontSize="large" color="white" />  <Instagram fontSize="large" color="white" /> </p>
        </div>
      </div>
      <div className="ml-10 text-left text-white "> Copyright© 2023 : </div>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

    </footer>
  );
}

export default Footer;