"use client"

import signUP from "@/utils/signup";

export default function SignUpPage() {

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      console.log(data)
      const res = signUP(data)
      console.log(res)
    }

    return (
      <div className="flex h-screen w-full items-center justify-center ">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-[50px] text-[#D0589E] font-semibold">{'</>'}</h1>
              <span className="text-gray-300">Enter Register Details</span>
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-4 text-lg text-black">
                <input
                  className="rounded-3xl border-none bg-white  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-black shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="username"
                  placeholder="Name"
                />
              </div>

              <div className="mb-4 text-lg text-black">
                <input
                  className="rounded-3xl border-none bg-white  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-black shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
  
              <div className="mb-4 text-lg text-black">
                <input
                  className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-black shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-[#D0589E] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#c84692]"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  