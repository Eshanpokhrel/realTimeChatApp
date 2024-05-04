

const Login = () => {
  return (
    <>
    <div className="w-1/2 h-full bg-yellow-200 rounded-full flex-center flex-col p-8">
        <div className="h-auto w-auto p-5 bg-[#444] flex-center flex-col rounded-[30px]">

          <label>Username</label>
          <input type="text" placeholder="eshanpokhrel" className="placeholder-[#555] w-[90%] p-2 outline-none"/>

          <label>Password</label>
          <input type="password" placeholder="Password" className="placeholder-[#555] w-[90%] p-2 outline-none"/>

          <button className="bg-blue-700 my-3 w-2/3 p-1 rounded-xl hover:bg-blue-400 hover:text-black">Login</button>
        </div>
      </div>
      </>
  )
}

export default Login