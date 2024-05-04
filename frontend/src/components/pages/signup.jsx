

const Signup = () => {
  return (
    <>
    <div className="w-1/2 h-full bg-yellow-200 rounded-full flex-center flex-col p-8">
        <div className="h-[95%] w-[60%] bg-[#444] p-5 flex-center flex-col rounded-[30px]">

          <label>Full Name</label>
          <input type="text" placeholder="eshanpokhrel" className="placeholder-[#555] w-[90%] p-2 outline-none rounded-lg"/>

          <label>Username</label>
          <input type="text" placeholder="Username" className="placeholder-[#555] w-[90%] p-2 outline-none rounded-lg"/>

          <label>Password</label>
           <input type="password" placeholder="Password" className="placeholder-[#555] w-[90%] p-2 outline-none rounded-lg"/>

           <label>Confirm Password</label>
           <input type="password" placeholder="Confirm Password" className="placeholder-[#555] w-[90%] p-2 outline-none rounded-lg"/>

           <label>Gender</label>

          <div className="flex gap-2">
            <label>Male</label>
            <input type="radio" name="gender" value="male"/>

            <label>Female</label>
            <input type="radio" name="gender" value="female"/>

            <label>Other</label>
            <input type="radio" name="gender" value="other"></input>
          </div>
          
          <button className="bg-blue-700 my-3 w-1/3 p-1 rounded-xl hover:bg-blue-400 hover:text-black">Signup</button>
        </div>
      </div>
      </>
  );
};

export default Signup;
