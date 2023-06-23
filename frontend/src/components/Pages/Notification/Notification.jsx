import React, { useState } from "react";
import UserSection from "./leftSection/UserSection";
import NotificationArea from "./midSection/NotificationArea";
import SearchArea from "./rightSection/SearchArea";

const Notification = () => {
  return (
    <div className="p-7 mt-5">
      <img
        className="absolute left-0 top-0 w-full h-full -z-50"
        src="images/backgroundImg.png"
        alt="background"
      />
      <div className="flex justify-center gap-20">
        <UserSection />
        <NotificationArea />
        <SearchArea />
      </div>
    </div>
  );
};

export default Notification;
