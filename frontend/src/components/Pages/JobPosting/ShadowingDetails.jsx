import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ArrowForward } from "@mui/icons-material";
import MailLockIcon from "@mui/icons-material/MailLock";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../../redux/slices/jobPostSlice";

const WorkList = ["Office", "Remote", "Hybrid"];

const leftSideBenefits = [
  "Certificate",
  "Flexible work hours",
  "Performance Bonus",
];

const RightSideBenefits = [
  "Snacks & Beverages",
  "5 days a week",
  "Transport allowance",
];

export default function ShadowingDetails({ jobType }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const [countries, setCountries] = useState([
    "India",
    "Sri Lanka",
    "Australia",
  ]);
  const [states, setStates] = useState(["Delhi", "Sydney", "colombo"]);
  const [cities, setCities] = useState(["Delhi", "Sydney", "colombo"]);

  // use form hook used
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    resetField,
  } = useForm({
    mode: "all",
    defaultValues: {
      jobType: jobType,
      JobProfile: "",
      Skills: [],
      WorkType: "",
      Location: { country: "", state: "", city: "", pincode: "" },
      ExperienceLevel: "",
      ExpectedSalary: "",
      Benefits: [],
      NoOfOpenings: "",
      NoticePeriod: { No: "", duration: "" },
      SalaryType: {
        Price: { fixed: "", range: "", negotiable: "Negotiable" },
        Type: "Fixed",
      },
    },
  });

  const selectedOption = watch("SalaryType.Type");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Skills",
  });

  const onSubmit = (data) => {
    data.Skills.splice(data.Skills.length - 1, 1);
    data.StartDate = data.StartDate.toISOString().substr(0, 10);
    const { ...all } = data;
    const PostJob = { jobType, ...all };
    dispatch(setFormData(PostJob));
    navigate("/jobsummary");
  };

  // Function to handle adding a skill
  const [length, setLength] = useState(0);

  const handleAddSkill = () => {
    append({ skill: "" });
    setLength(length + 1);
  };

  // Function to handle deleting a skill
  const handleDeleteSkill = (index) => {
    remove(index);
    setLength(length - 1);
  };

  // setting value back when clicking on edit on job post summary
  useEffect(() => {
    if (formData) {
      Object.keys(formData).forEach((field) =>
        setValue(field, formData[field])
      );
    }
  }, [formData, setValue]);

  return (
    <>
      {/* Shadowing */}

      <div>
        <div className="mt-5 w-full flex flex-col justify-center items-center mb-4">
          <span className="font-semibold text-xl text-[#003d4d]">
            New to ZealYug. Learn More about Shadowing
          </span>
          <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3 w-[65%] px-10">
            <div className="m-2 mb-8">
              <span className="font-semibold text-xl text-[#003d4d]">
                What is Shadowing?
              </span>
              <p>
                Shadowing opportunity on ZealYug refers to the chance for job
                seekers or students to observe and learn from experienced
                professionals in their desired field. This can be a valuable
                learning experience as it allows individuals to gain insight
                into the day-to-day work and tasks involved in a particular job.
              </p>
            </div>
            <div className="m-2">
              <span className="font-semibold text-xl text-[#003d4d]">
                What can Job Seekers provide in return of Shadowing?
              </span>
              <p>
                Well, for starters, they can bring their unique perspective and
                enthusiasm to the table. They can also offer their own knowledge
                and skills, even if they're just starting out. And who knows,
                maybe they'll even teach their mentor a thing or two! With
                ZealYug, the possibilities are endless.
              </p>
              <br />
              <p>
                Build up a Leadership and Mentorship Quality in You with
                providing Shadowing Opportunity. Get Support with your Task and
                daily work activites.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center mb-4">
          <div className="w-[65%]">
            <span className="self-start ml-3 font-semibold text-lg text-[#003d4d]">
              Shadowing Details
            </span>
            <div className="bg-white p-5 rounded-xl shadow-md shadow-gray-300 mt-3 w-full px-10">
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-8 bg-white p-5 md:p-8 rounded-xl shadow-md shadow-gray-300 mt-3 w-full">
                  {/* JobProfile */}
                  <div className="flex flex-col justify-center">
                    <label
                      className="text-xl font-semibold text-[#000000C9]"
                      htmlFor="JobProfile"
                    >
                      Job Profile
                    </label>
                    <input
                      className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                      placeholder="eg. UI/UX designer"
                      {...register("JobProfile", {
                        required: "Field required",
                      })}
                      id="JobProfile"
                    />
                    <p className="text-red-600 text-lg  tracking-widest">
                      {errors.JobProfile?.message}
                    </p>
                  </div>

                  {/* skillsRequired */}
                  <div className="flex flex-col">
                    <label
                      className="text-xl font-semibold text-[#000000C9]"
                      htmlFor="SkillsRequired"
                    >
                      Skills Required
                    </label>
                    <div className="flex flex-col gap-3">
                      <div className=" flex justify-between gap-3 max-md:flex-col ">
                        <input
                          className="flex-1 md:w-3/4 py-2 rounded-md border border-[#003d4d] px-5"
                          type="text"
                          placeholder="Input skill"
                          // {...register(`Skills.${length}.skill`, {
                          //   required: true,
                          // })}
                          {...register(`Skills.${length}.skill`)}
                        />
                        <button
                          className="w-full  md:w-1/6  md:text-lg font-semibold px-5 py-2 bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white rounded-full"
                          type="button"
                          onClick={handleAddSkill}
                        >
                          Skill+
                        </button>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {fields.map((field, index) => {
                          if (field.skill == undefined || field.skill == "")
                            return;
                          return (
                            <div key={field.id} className="flex gap-5">
                              <span className="flex gap-3 justify-between bg-[#E7F0F1] text-[#003D4D] px-3.5 py-1 text-lg font-semibold rounded-full">
                                {field.skill}

                                <button
                                  type="button"
                                  onClick={() => handleDeleteSkill(index)}
                                >
                                  <AiOutlineCloseCircle className="font-semibold text-lg" />
                                </button>
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* WorkType */}
                  <div>
                    <label className="text-xl font-semibold text-[#000000C9]">
                      Work Type
                    </label>
                    <div className="grid grid-cols-3 gap-2 md:gap-10 mt-4">
                      {WorkList.map((work) => {
                        return (
                          <>
                            <label
                              key={work}
                              htmlFor={work}
                              className="flex justify-between items-center sm:text-xl border  border-[#003d4d] px-1 sm:px-3 py-2 rounded-xl hover:bg-[#57a7b320] max-md:w-full"
                            >
                              {work}
                              <input
                                id={work}
                                name="WorkType"
                                {...register("WorkType", {
                                  required: "select one",
                                })}
                                value={work}
                                type="radio"
                                className="md:w-5 md:h-5  m-0 text-[#003d4d] border-4 rounded-full focus:outline-none focus:ring-0"
                              />
                            </label>
                          </>
                        );
                      })}
                    </div>
                    <p className="text-red-600 text-lg tracking-widest">
                      {errors.WorkType?.message}
                    </p>
                  </div>

                  {/* location */}
                  <div className=" flex items-start gap-4 justify-between max-lg:grid grid-cols-2 max-lg:gap-10 ">
                    <div className="flex flex-col justify-center w-1/2 max-lg:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        Country
                      </label>
                      <select
                        className="md:py-2 rounded-md border border-[#003d4d] md:px-5"
                        {...register("Location.country", {
                          required: "field required",
                        })}
                      >
                        <option disabled value="">
                          Select Country
                        </option>
                        {countries &&
                          countries.map((country) => (
                            <option key={country.id} value={country}>
                              {country}
                            </option>
                          ))}
                      </select>
                      <p className="text-red-600 text-lg  ">
                        {errors.Location?.country?.message}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 max-lg:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        State
                      </label>
                      <select
                        {...register("Location.state", {
                          required: "field required",
                        })}
                        className="py-2 rounded-md border border-[#003d4d] px-5"
                      >
                        <option disabled value="">
                          Select State
                        </option>
                        {states &&
                          states.map((state) => (
                            <option key={state.id} value={state}>
                              {state}
                            </option>
                          ))}
                      </select>
                      <p className="text-red-600 text-lg ">
                        {errors.Location?.state?.message}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 max-lg:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        City
                      </label>
                      <select
                        className="py-2 rounded-md border border-[#003d4d] px-5"
                        {...register("Location.city", {
                          required: "field required",
                        })}
                      >
                        <option disabled value="">
                          Select City
                        </option>
                        {cities &&
                          cities.map((city) => (
                            <option key={city.id} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                      <p className="text-red-600 text-lg ">
                        {errors.Location?.city?.message}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 max-lg:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        Pincode
                      </label>
                      <input
                        className="py-2 rounded-md border border-[#003d4d] px-5 "
                        inputMode="numeric"
                        type="number"
                        placeholder="eg. 2277001"
                        {...register("Location.pincode", {
                          required: "field required",
                        })}
                      />
                      <p className="text-red-600 text-lg ">
                        {errors.Location?.pincode?.message}
                      </p>
                    </div>
                  </div>

                  {/* No of opeings and start date */}
                  <div className="flex  items-start  justify-between gap-10 max-sm:flex-col">
                    <div className="flex flex-col justify-center w-1/2 max-sm:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        Number Of Openings
                      </label>
                      <input
                        className=" py-2 rounded-md border border-[#003d4d] px-5 w-full"
                        type="number"
                        placeholder="eg. 2"
                        {...register("NoOfOpenings", {
                          required: "field required.",
                          valueAsNumber: true,
                        })}
                      />
                      <p className="text-red-600 text-lg  tracking-widest">
                        {errors.NoOfOpenings?.message}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 max-sm:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        Start Date
                      </label>
                      <input
                        className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                        type="date"
                        {...register("StartDate", {
                          required: "field required.",
                          valueAsDate: true,
                        })}
                      />
                      <p className="text-red-600 text-lg  tracking-widest">
                        {errors.StartDate?.message}
                      </p>
                    </div>
                  </div>

                  {/* NoticePeriod */}
                  <div className="flex items-start  justify-between gap-10 max-sm:flex-col">
                    <div className="flex flex-col justify-center w-1/2 max-sm:w-full">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        Notice Period
                      </label>
                      <input
                        className="py-2 rounded-md border border-[#003d4d] px-5"
                        type="number"
                        placeholder="eg. 2"
                        {...register("NoticePeriod.No", {
                          required: "field required",
                          valueAsNumber: true,
                        })}
                      />
                      <p className="text-red-600 text-lg  tracking-widest">
                        {errors.NoticePeriod?.No?.message}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 max-sm:w-full max-sm:-mt-10">
                      <label className="text-xl font-semibold text-[#000000C9] invisible">
                        Days/Months
                      </label>
                      <select
                        className="py-2 rounded-md border border-[#003d4d] px-5"
                        id="NoticePeriod"
                        {...register("NoticePeriod.duration", {
                          required: "field required.",
                        })}
                      >
                        <option value="">Select...</option>

                        <option value="Days">Days</option>
                        <option value="Months">Months</option>
                      </select>
                      <p className="text-red-600 text-lg tracking-widest">
                        {errors.NoticePeriod?.duration?.message}
                      </p>
                    </div>
                  </div>

                  {/* ExperienceLevel */}
                  <div className="flex flex-col justify-center">
                    <label
                      for="ExperienceLevel"
                      className="text-xl font-semibold text-[#000000C9]"
                    >
                      Experience Level
                    </label>
                    <select
                      className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                      {...register("ExperienceLevel", {
                        required: "field required",
                      })}
                      id="ExperienceLevel"
                    >
                      <option value="">Select...</option>
                      <option value="Fresher">Fresher</option>
                      <option value="1 year">1 year</option>
                      <option value="2+ year">2+ year</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                    <p className="text-red-600 text-lg  tracking-widest">
                      {errors.ExperienceLevel?.message}
                    </p>
                  </div>

                  {/* ExpectedSalary */}
                  <div className="flex flex-col justify-center">
                    <label className="text-xl font-semibold text-[#000000C9]">
                      Expected Salary
                    </label>
                    <input
                      className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                      placeholder="Rs 50,000"
                      {...register("ExpectedSalary", {
                        required: "field required",
                        valueAsNumber: true,
                      })}
                    />
                    <p className="text-red-600 text-lg  tracking-widest">
                      {errors.ExpectedSalary?.message}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="flex flex-col justify-center">
                    <label className="text-xl font-semibold text-[#000000C9]">
                      Responsibilities
                    </label>
                    <textarea
                      className="w-full py-2 rounded-md border border-[#003d4d] px-5"
                      rows="5"
                      placeholder="Write Responsibilities for selected Candidates"
                      {...register("Responsibilities", {
                        required: "field required",
                      })}
                    />
                    <p className="text-red-600 text-lg  tracking-widest">
                      {errors.Responsibilities?.message}
                    </p>
                  </div>

                  {/* SalaryType */}
                  <div className="flex flex-col justify-start">
                    <label className="text-xl font-semibold text-[#000000C9]">
                      Salary Type
                    </label>

                    {/* SalaryType selection */}
                    <div className="flex items-start gap-10 mt-3 justify-between max-sm:flex-col max-sm:gap-5">
                      <div className="w-1/2 max-sm:w-full">
                        <div className="flex w-full items-center gap-5 justify-between  border border-[#003d4d] p-3 rounded-xl">
                          <MailLockIcon
                            style={{
                              fontSize: "2.5rem",
                              color: "#003d4d",
                            }}
                          />
                          <select
                            {...register("SalaryType.Type", {
                              required: "field required.",
                            })}
                            className="border-none focus:ring-0 w-full"
                            type="text"
                          >
                            <option disabled value="">
                              Select...
                            </option>
                            <option value="Fixed">Fixed</option>
                            <option value="Negotiable">Negotiable</option>
                            <option value="Range">Range</option>
                          </select>
                        </div>
                      </div>

                      <div className="w-1/2 grid max-sm:w-full">
                        {selectedOption === "Fixed" && (
                          <div>
                            <input
                              type="number"
                              {...register("SalaryType.Price.fixed", {
                                required: "Field fixed",
                              })}
                              className="border-box w-full rounded-xl p-5 appearance-none border-[#003d4d] focus:ring-0"
                              placeholder="e.g. 50,000"
                            />
                            <p className="text-red-600">
                              {errors.SalaryType?.Price?.fixed?.message}
                            </p>
                          </div>
                        )}

                        {selectedOption === "Range" && (
                          <div>
                            <input
                              type="text"
                              {...register("SalaryType.Price.range", {
                                required: "Field required",
                                pattern: {
                                  value: /^[0-9]+-[0-9]+$/,
                                  message:
                                    "Invalid format. Please use the format 'minimum-maximum'.",
                                },
                              })}
                              className="border-box w-full p-5 rounded-xl appearance-none border-[#003d4d] focus:ring-0"
                              placeholder="e.g. 30,000-50,000"
                            />
                            <p className="text-red-600">
                              {errors.SalaryType?.Price?.range?.message}
                            </p>
                          </div>
                        )}

                        {selectedOption === "Negotiable" && (
                          <div>
                            <input
                              className="border-box rounded-xl w-full p-5 appearance-none border border-[#003d4d] focus:ring-0"
                              value="Negotiable"
                              readOnly
                              placeholder="Negotiable"
                              {...register("SalaryType.Price.negotiable")}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-5">
                      <label className="text-xl font-semibold text-[#000000C9]">
                        Benefits
                      </label>
                      <div className="w-full mt-3  flex justify-between px-8 py-4 box-border rounded-xl border border-[#003D4D4D] max-md:flex-col gap-5 ">
                        <div className="grid text-xl gap-5">
                          {leftSideBenefits.map((benefit) => (
                            <label key={benefit} className="flex gap-3">
                              <input
                                type="checkbox"
                                className="w-5 h-5 m-0 text-[#003d4d]  border-4 rounded-md focus:outline-none focus:ring-0"
                                value={benefit}
                                {...register("Benefits")}
                              />
                              {benefit}
                            </label>
                          ))}
                        </div>
                        <div className="grid text-xl gap-5">
                          {RightSideBenefits.map((benefit) => (
                            <label
                              key={benefit}
                              className="flex items-center gap-3"
                            >
                              <input
                                type="checkbox"
                                className="w-5 h-5 m-0 text-[#003d4d] border-4 rounded-md focus:outline-none focus:ring-0"
                                value={benefit}
                                {...register("Benefits", {
                                  required: "check at least one",
                                })}
                              />
                              {benefit}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-red-600 ">{errors.Benefits?.message}</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-1/4 flex gap-5 mt-6 items-center text-3xl px-9 py-3 bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white rounded-full"
                  >
                    <span>Next</span> <ArrowForward />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
