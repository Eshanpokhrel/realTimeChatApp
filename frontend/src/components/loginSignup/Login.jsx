import { useState } from "react";
import useLogin  from "../../hooks/useLogin"

const Login = () => {

  const [ inputs, setInputs ] = useState({
    username: "",
    password: "",
  })

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await login(inputs)
  }

  return (
    <>
      <div className="w-full h-full bg-yellow-200 rounded-full flex-center flex-col p-8 lg:w-1/2">
        <div className="h-auto w-auto p-5 bg-[#444] rounded-[30px] gap-1 lg:gap-3">
          <form className="flex-center flex-col" onSubmit={handleSubmit}>
          <label className="text-sm">Username</label>
          <input
            type="text"
            placeholder="eshanpokhrel"
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            className="rounded-xl placeholder-[#555] w-[90%] p-2 outline-none"
          />

          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            className="rounded-xl placeholder-[#555] w-[90%] p-2 outline-none"
          />

          <button className="bg-blue-700 my-3 w-2/3 p-1 rounded-xl hover:bg-blue-400 hover:text-black" disabled={loading}>
            {loading ? <span className="loading loading-bars"></span> : "Login"}
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
