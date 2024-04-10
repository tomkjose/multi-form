import React, { useState } from "react";

import LoadingPage from "../components/Loading/Loading";
import Result from "../components/Result/Result";
import { faStar, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    interest: "",
    comfortLevel: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [isInterestSelected, setIsInterestSelected] = useState(false);
  const [isComfortLevelSelected, setIsComfortLevelSelected] = useState(false);

  const calculateProgress = () => {
    switch (step) {
      case 1:
        return 20;
      case 2:
        return 30;
      case 3:
        return 40;
      case 4:
        return 60;
      case 5:
        return 100;
      default:
        return 0;
    }
  };

  const handleRoleClick = (role) => {
    setFormData({ ...formData, role });
    setIsRoleSelected(true);
  };

  const handleInterestClick = (interest) => {
    setFormData({ ...formData, interest });
    setIsInterestSelected(true);
  };

  const handleComfortClick = (comfortLevel) => {
    setFormData({ ...formData, comfortLevel });
    setIsComfortLevelSelected(true);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    console.log(formData);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
    }, 2000);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-full px-2 sm:w-full mx-auto md:w-3/4">
      {!isLoading && (
        <div>
          {step !== 6 && (
            <div className="flex gap-2 items-center ">
              {step > 1 && step < 6 && (
                <button onClick={prevStep} className="pt-2">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="xl"
                    className="text-black-500"
                  />
                </button>
              )}
              <div className="w-full bg-progressbarBg rounded-full h-1.5 mb-4 dark:bg-progressbarBg my-6">
                <div
                  className="bg-progressbar h-1.5 rounded-full dark:bg-progressbar"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col items-center ">
                <h2 className="font-bold py-6 text-2xl ">
                  Which describes you best?
                </h2>
                <p className="">
                  This will help us personalize your experience.
                </p>
              </div>
              <ul className="py-14 flex flex-col w-full sm:w-3/4 mx-auto gap-4">
                <li
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.role === "Student or soon to be enrolled"
                      ? "border-yellow-300"
                      : ""
                  }`}
                  onClick={() =>
                    handleRoleClick("Student or soon to be enrolled")
                  }
                >
                  <img
                    src="images/student.png"
                    alt="student"
                    className="w-16"
                  />
                  <div>
                    <span className="font-bold">Student</span> or soon to be
                    enrolled
                  </div>
                </li>
                <li
                  onClick={() =>
                    handleRoleClick("Professional pursuing a career")
                  }
                  className={`flex gap-2 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.role === "Professional pursuing a career"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img
                    src="images/professional.png"
                    alt="professional"
                    className="w-16"
                  />
                  <span className="font-bold">Professional</span> pursuing a
                  career
                </li>
                <li
                  onClick={() =>
                    handleRoleClick("Parent of a school-age child")
                  }
                  className={`flex gap-2 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.role === "Parent of a school-age child"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img src="images/parent.png" alt="parent" className="w-16" />
                  <span className="font-bold"> Parent</span> of a school-age
                  child
                </li>
                <li
                  onClick={() => handleRoleClick("Lifelong Learner")}
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.role === "Lifelong Learner"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img
                    src="images/learner.png"
                    alt="learner"
                    className="w-16"
                  />
                  <span className="font-bold">Lifelong Learner</span>
                </li>
                <li
                  onClick={() => handleRoleClick("Teacher")}
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.role === "Teacher" ? "border-yellow-300" : ""
                  }`}
                >
                  <img
                    src="images/teacher.png"
                    alt="teacher"
                    className="w-16"
                  />
                  <span className="font-bold">Teacher</span>
                </li>
                <li
                  onClick={() => handleRoleClick("Other")}
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.role === "Other" ? "border-yellow-300" : ""
                  }`}
                >
                  <img src="images/others.png" alt="others" className="w-16" />
                  <span className="font-bold">Other</span>
                </li>
              </ul>
            </div>
          )}
          {step === 2 && (
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col items-center">
                <h2 className=" text-center font-bold py-8 text-2xl">
                  What are you most interested in?
                </h2>
                <p className="text-center ">
                  Choose just one. This will help us get you started (but won't
                  limit your experience)
                </p>
              </div>
              <ul className="py-14 flex flex-col w-full sm:w-3/4 mx-auto gap-4">
                <li
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.interest ===
                    "Learning specific skills to advance my career"
                      ? "border-yellow-300"
                      : ""
                  }`}
                  onClick={() =>
                    handleInterestClick(
                      "Learning specific skills to advance my career"
                    )
                  }
                >
                  <img src="images/graph.png" alt="graph" className="w-16" />
                  Learning specific skills to advance my career
                </li>
                <li
                  onClick={() =>
                    handleInterestClick(
                      "Exploring new topics I'm interested in"
                    )
                  }
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.interest ===
                    "Exploring new topics I'm interested in"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img src="images/globe.png" alt="globe" className="w-16" />
                  Exploring new topics I'm interested in
                </li>
                <li
                  onClick={() =>
                    handleInterestClick("Refreshing my math foundations")
                  }
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.interest === "Refreshing my math foundations"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img
                    src="images/foundation.png"
                    alt="foundation"
                    className="w-16"
                  />
                  Refreshing my math foundations
                </li>
                <li
                  onClick={() =>
                    handleInterestClick(
                      "Exercising my brain to stay updated sharp"
                    )
                  }
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.interest ===
                    "Exercising my brain to stay updated sharp"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img src="images/target.png" alt="target" className="w-16" />
                  Exercising my brain to stay updated sharp
                </li>
                <li
                  onClick={() => handleInterestClick("Something else")}
                  className={`flex gap-4 items-center cursor-pointer border border-gray-300 rounded-lg  px-4 py-2 hover:border-yellow-300 ${
                    formData.interest === "Something else"
                      ? "border-yellow-300"
                      : ""
                  }`}
                >
                  <img
                    src="images/something.png"
                    alt="something"
                    className="w-16"
                  />
                  Something else
                </li>
              </ul>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col-reverse sm:flex-row items-center justify-evenly mt-8">
              <div className="w-full sm:w-1/2 flex justify-center">
                <img src="images/weight.png" alt="weight" />
              </div>
              <div className="w-full sm:w-1/2 ">
                <h2 className="font-bold py-8 text-2xl text-center sm:text-left">
                  You're in the right place
                </h2>
                <p className="  text-center sm:text-left">
                  Brilliant gets you hands-on to help improve your professional
                  skills and knowledge. You'll interact with concepts and solve
                  fun problems in maths, science, and computer science.
                </p>
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <div className="flex flex-col w-full items-center	">
                <h2 className="font-bold py-8 text-2xl text-center sm:text-left">
                  What is your math comfort level?
                </h2>
                <p className="  text-center sm:text-left">
                  Choose the highest level you feel confident in - you can
                  always adjust later.
                </p>
              </div>
              <ul className="flex flex-col justify-evenly gap-4 py-12 sm:flex-row">
                <li
                  className={`flex  flex-col w-full items-center cursor-pointer border border-gray-300 rounded-lg  px-2 py-6 hover:border-yellow-300 sm:w-1/4 ${
                    formData.comfortLevel === "Arithmetic"
                      ? "border-yellow-300"
                      : ""
                  }`}
                  onClick={() => handleComfortClick("Arithmetic")}
                >
                  <img src="images/introductory.png" alt="introductory" />
                  <span>Arithmetic</span>
                  <span className="text-subtitle">Introductory</span>
                </li>
                <li
                  className={`flex  flex-col  w-full items-center cursor-pointer border border-gray-300 rounded-lg  px-2 py-6 hover:border-yellow-300 sm:w-1/4 ${
                    formData.comfortLevel === "Basic Algebra"
                      ? "border-yellow-300"
                      : ""
                  }`}
                  onClick={() => handleComfortClick("Basic Algebra")}
                >
                  <img src="images/basic.png" alt="basic" />
                  <span>Basic Algebra</span>
                  <span className="text-subtitle">Foundational </span>
                </li>
                <li
                  className={`flex  flex-col  w-full  items-center cursor-pointer border border-gray-300 rounded-lg  px-2 py-6 hover:border-yellow-300 sm:w-1/4 ${
                    formData.comfortLevel === "Intermediate Algebra"
                      ? "border-yellow-300"
                      : ""
                  }`}
                  onClick={() => handleComfortClick("Intermediate Algebra")}
                >
                  <img src="images/intermediate.png" alt="intermediate" />
                  <span> Intermediate Algebra</span>
                  <span className="text-subtitle">Intermediate</span>
                </li>
                <li
                  className={`flex  flex-col  w-full  items-center cursor-pointer border border-gray-300 rounded-lg  px-2 py-6 hover:border-yellow-300 sm:w-1/4 ${
                    formData.comfortLevel === "Calculus"
                      ? "border-yellow-300"
                      : ""
                  }`}
                  onClick={() => handleComfortClick("Calculus")}
                >
                  <img src="images/calculus.png" alt="calculus" />
                  <span>Calculus</span>
                  <span className="text-subtitle">Advanced</span>
                </li>
              </ul>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col-reverse sm:flex-row items-center justify-evenly mt-8">
              <img
                src="images/cheers.png"
                alt="cheers"
                className="w-1/2 sm:w-1/4"
              />
              <div className="w-full sm:w-1/2">
                <h2 className="font-bold py-8 text-2xl text-center sm:text-left">
                  You're on your way !
                </h2>
                <div className=" w-full justify-center flex gap-2 py-6 sm:justify-start">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xl"
                    className="text-yellow-500"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xl"
                    className="text-yellow-500"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xl"
                    className="text-yellow-500"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xl"
                    className="text-yellow-500"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xl"
                    className="text-yellow-500"
                  />
                </div>
                <p className="italic">
                  "Through its engagingn and well-structured courses, Brilliant
                  has taught me mathematical concepts that I previously
                  struggled to understand. I now feel confindent approaching
                  both techical job interviews and real world problem solving
                  situations"
                </p>
                <p className="pt-6 italic">-Jacob S.</p>
              </div>
            </div>
          )}

          {step < 5 && (
            <div className="w-full flex justify-center mb-8">
              <button
                onClick={nextStep}
                disabled={
                  (step === 1 && !isRoleSelected) ||
                  (step === 2 && !isInterestSelected) ||
                  (step === 4 && !isComfortLevelSelected)
                }
                className="bg-buttonBg   text-white border rounded-lg px-8 py-2 font-bold transition duration-300 ease-in-out disabled:bg-disabledBg "
              >
                Continue
              </button>
            </div>
          )}
          {step === 5 && (
            <div className="w-full flex justify-center py-16">
              <button
                onClick={handleSubmit}
                className="bg-buttonBg  text-white border rounded-lg px-8 py-2 font-bold transition duration-300 ease-in-out disabled:bg-disabledBg "
              >
                Continue
              </button>
            </div>
          )}
        </div>
      )}
      {isLoading && <LoadingPage />}
      {step === 6 && <Result />}
    </div>
  );
};

export default Home;
