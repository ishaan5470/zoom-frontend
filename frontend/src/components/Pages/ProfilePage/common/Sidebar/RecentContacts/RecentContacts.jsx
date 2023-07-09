import React from "react";
import List from "./List/List.jsx";
import Postype from "./List/Postype.jsx";
export default function RecentContacts() {
  return (
    <div className="mt-[20px] bg-white rounded-xl max-h-[500px] ml-3 mr-1 shadow shadow-black xl:flex xl:flex-col hidden">
      <List />
      <Postype />
    </div>
  );
}
