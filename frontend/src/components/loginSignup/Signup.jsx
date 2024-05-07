import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup()

  const handleRadioBtn = (gender) => {
    setInputs({...inputs, gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(inputs)
    await signup(inputs)
  }

  return (
    <>
      <div className="w-full h-[70%] bg-yellow-200 rounded-full flex-center flex-col p-8 lg:w-1/2 lg:h-full">
        <div className="h-[88%] w-[100%] p-5 rounded-[30px] lg:w-[60%] lg:h-[95%] lg:bg-[#444]">
          <form className="h-full flex-center flex-col" onSubmit={handleSubmit}>
            <label className="text-sm mt-2">Full Name</label>
            <input
              type="text"
              placeholder="Eshan Pokhrel"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"
            />

            <label className="text-sm mt-2">Username</label>
            <input
              type="text"
              placeholder="eshanpokhrel"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"
            />

            <label className="text-sm mt-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"
            />

            <label className="text-sm mt-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
              className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"
            />

            <div className="flex gap-0.5 mt-4 md:gap-2">
              <label className="text-sm">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="radio radio-primary"
                onChange={() => handleRadioBtn("male")}
              />

              <label className="text-sm">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="radio radio-secondary"
                onChange={() => handleRadioBtn("female")}
              />

              <label className="text-sm">Other</label>
              <input
                type="radio"
                name="gender"
                value="other"
                className="radio radio-warning"
                onChange={() => handleRadioBtn("other")}
              />
            </div>

            <button className="bg-blue-700 my-3 w-fit p-1 rounded-xl hover:bg-blue-400 hover:text-black" disabled={loading}>
              {loading ? <span className="loading loading-ring"></span> : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
