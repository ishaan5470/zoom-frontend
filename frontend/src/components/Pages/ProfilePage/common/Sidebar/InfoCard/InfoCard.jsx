import React from "react";

function InfoCard({ data, tab }) {
  return (
    // <div>
    //   <div className="Card bg-[#f1f1f1] rounded-xl px-[40px] shadow-lg ">
    //     <div>
    //       <h1 className="text-xl font-bold mb-3 text-[#003d4d]">
    //         {props.heading}
    //       </h1>
    //       <span className="decoration-gray-700 text-base text-xl font-bold mb-3 text-[#003d4d]">
    //         {props.description}
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div>
      {tab == "Education" && (
        <div className="ml-[30px]">
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">College Name :</span>{" "}
            {data.college}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]"> Degree :</span>{" "}
            {data.degree}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Stream :</span>{" "}
            {data.stream}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Duration :</span>{" "}
            {data.educationStartDate} - {data.educationEndDate}
          </p>
        </div>
      )}
      {tab == "Job" && (
        <div className="ml-[30px]">
          <h1 className="text-[#003d4d] font-[700] mb-[10px]">JOB DETAILS</h1>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Job Profile :</span>{" "}
            {data.jobProfile}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]"> Organization :</span>{" "}
            {data.jobOrganization}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Location :</span>{" "}
            {data.jobLocation}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Duration :</span>{" "}
            {data.jobStartDate} - {data.jobEndDate}
          </p>
        </div>
      )}
      {tab == "Certification" && (
        <div className="ml-[30px]">
          <h1 className="text-[#003d4d] font-[700] mb-[10px]">INTERNSHIP DETAILS</h1>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Profile :</span>{" "}
            {data.internshipProfile}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]"> Organization :</span>{" "}
            {data.internshipOrganization}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Location :</span>{" "}
            {data.internshipLocation}
          </p>
          <p className="mb-[7px]">
            <span className="font-[700] text-[#003d4d]">Description :</span>{" "}
            {data.internshipDescription}
          </p>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
