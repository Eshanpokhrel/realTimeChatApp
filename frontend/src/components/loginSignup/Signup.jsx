

const Signup = () => {
  return (
    <>
    <div className="w-full h-[70%] bg-yellow-200 rounded-full flex-center flex-col p-8 lg:w-1/2 lg:h-full">
        <div className="h-[88%] w-[100%] p-5 flex-center flex-col rounded-[30px] lg:w-[60%] lg:h-[95%] lg:bg-[#444]">

          <label className="text-sm mt-2">Full Name</label>
          <input type="text" placeholder="Eshan Pokhrel" className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"/>

          <label className="text-sm mt-2">Username</label>
          <input type="text" placeholder="eshanpokhrel" className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"/>

          <label className="text-sm mt-2">Password</label>
          <input type="password" placeholder="Password" className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"/>

          <label className="text-sm mt-2">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" className="placeholder-[#555] w-[120%] p-2 outline-none rounded-xl lg:w-[90%]"/>

          <div className="flex gap-0.5 mt-4 md:gap-2">
            <label className="text-sm">Male</label>
            <input type="radio" name="gender" value="male" className="radio radio-primary" />

            <label className="text-sm">Female</label>
            <input type="radio" name="gender" value="female" className="radio radio-secondary" />

            <label className="text-sm">Other</label>
            <input type="radio" name="gender" value="other" className="radio radio-warning" />
          </div>

          <button className="bg-blue-700 my-3 w-fit p-1 rounded-xl hover:bg-blue-400 hover:text-black">Signup</button>
        </div>
      </div>
      </>
  );
};

export default Signup;
