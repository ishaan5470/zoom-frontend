import React, { useState, useEffect } from "react";
import UserSection from "./leftSection/UserSection";
import NotificationArea from "./midSection/NotificationArea";
import SearchArea from "./rightSection/SearchArea";

import io from "socket.io-client";

const Notification = () => {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:9900");

    socket.on("notification", (data) => {
      console.log("Notification:", data.message);
      setMessage(data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
