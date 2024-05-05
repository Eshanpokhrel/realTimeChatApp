// import { useState } from "react";
// import Login from "./Login";
// import Signup from "./Signup";
import Home from "./home";

const LoginAndSignup = () => {

  // const [option, setOption] = useState("Don't have an account?")

  // const handleClick = () => {
  //   setOption(option === "Don't have an account?" ? "Already have an account?" : "Don't have an account?");
  // };

  return (
    <>
    {/* <div className="w-2/3 h-2/3 p-3 bg-blue-200 rounded-full flex-center flex-col md:flex-row md:justify-center">
      {option === "Don't have an account?" && <Login/>}
      <div className="w-full h-full flex-center flex-col text-center md:w-1/2">
        <span className=" text-emerald-700 title-font">
          helou
        </span>
        <span className="text-teal-600 font-sans font-normal text-sm md:font-semibold">
          Login to your personalized chat space and connect with family and friends.
          Stay connected, chat anytime, anywhere.
        </span>
        <a href="#" className="text-base mt-1 text-gray-500 font-semibold hover:text-blue-700 md:mt-5" onClick={handleClick}>{option}</a>
      </div>
      {option === "Already have an account?" && <Signup/>}
    </div> */}
    <Home/>
    </>
  );
};

export default LoginAndSignup;
