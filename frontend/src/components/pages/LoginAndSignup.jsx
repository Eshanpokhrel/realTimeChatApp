import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginAndSignup = () => {

  const [option, setOption] = useState("Don't have an account?")

  const handleClick = () => {
    setOption(option === "Don't have an account?" ? "Already have an account?" : "Don't have an account?");
  };

  return (
    <div className="w-2/3 h-2/3 p-3 bg-blue-200 rounded-full flex-center">
      {option === "Don't have an account?" && <Login/>}
      <div className="w-1/2 h-full flex-center flex-col text-center">
        <span className=" text-emerald-700 title-font">
          helou
        </span>
        <span className="text-teal-600 font-semibold font-sans">
          Login to your personalized chat space and connect with family and friends.
          Stay connected, chat anytime, anywhere.
        </span>
        <a href="#" className="text-base mt-5 text-gray-500 font-semibold hover:text-blue-700" onClick={handleClick}>{option}</a>
      </div>
      {option === "Already have an account?" && <Signup/>}
    </div>
  );
};

export default LoginAndSignup;
