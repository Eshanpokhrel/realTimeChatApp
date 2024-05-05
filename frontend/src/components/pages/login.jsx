

const Login = () => {
  return (
    <>
    <div className="w-full h-full bg-yellow-200 rounded-full flex-center flex-col p-8 md:w-1/2">
        <div className="h-auto w-auto p-5 bg-[#444] flex-center flex-col rounded-[30px] gap-1 md:gap-3">

          <label className="text-sm">Username</label>
          <input type="text" placeholder="eshanpokhrel" className="rounded-xl placeholder-[#555] w-[90%] p-2 outline-none"/>

          <label className="text-sm">Password</label>
          <input type="password" placeholder="Password" className="rounded-xl placeholder-[#555] w-[90%] p-2 outline-none"/>

          <button className="bg-blue-700 my-3 w-2/3 p-1 rounded-xl hover:bg-blue-400 hover:text-black">Login</button>
        </div>
      </div>
      </>
  )
}

export default Login