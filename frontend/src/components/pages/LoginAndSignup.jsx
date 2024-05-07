import { useState } from "react";
import Login from "../loginSignup/Login";
import Signup from "../loginSignup/Signup";

const LoginAndSignup = () => {

  const [option, setOption] = useState("Don't have an account?")

  const handleClick = () => {
    setOption(option === "Don't have an account?" ? "Already have an account?" : "Don't have an account?");
  };

  return (
    <>
    <div className="w-2/3 h-2/3 p-3 bg-blue-200 rounded-full flex-center flex-col lg:flex-row lg:justify-center">
      {option === "Don't have an account?" && <Login/>}
      <div className="w-full h-full flex-center flex-col text-center lg:w-1/2">
        <span className=" text-emerald-700 title-font">
          helou
        </span>
        <span className="text-teal-600 font-sans font-normal text-sm lg:font-semibold">
          Login to your personalized chat space and connect with family and friends.
          Stay connected, chat anytime, anywhere.
        </span>
        <div className="text-base mt-1 text-gray-500 font-semibold cursor-pointer hover:text-blue-700 lg:mt-5" onClick={handleClick}>{option}</div>
      </div>
      {option === "Already have an account?" && <Signup/>}
    </div>
    </>
  );
};

export default LoginAndSignup;
