import Checkbox from "./Checkbox";

const Signup = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="">
          Sign Up <span className=""> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="">
              <span className="">First Name</span>
            </label>
            <input
              type="text"
              placeholder="John"
              className=""
            />
          </div>
          <div>
            <label className="">
              <span className="">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Doe"
              className=""
            />
          </div>

          <div>
            <label className="">
              <span className="">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className=""
            />
          </div>

          <div>
            <label className="">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className=""
            />
          </div>

          <div>
            <label className="">
              <span className="">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className=""
            />
          </div>

          <Checkbox />

          <a
            className=""
            href="#"
          >
            Already have an account?
          </a>

          <div>
            <button className="">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
