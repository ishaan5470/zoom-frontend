import React from "react";

function InfoCard(props) {
  return (
    <div>
      <div className="Card bg-[#f1f1f1] rounded-xl px-[40px] shadow-lg ">
        <div>
          <h1 className="text-xl font-bold mb-3 text-[#003d4d]">
            {props.heading}
          </h1>
          <span className="decoration-gray-700 text-base text-xl font-bold mb-3 text-[#003d4d]">
            {props.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
