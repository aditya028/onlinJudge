"use client";

import signIN from "@/utils/signin";

export default function SignInPage() {
  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    signIN({ email, password })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-[50px] text-[#D0589E] font-semibold">
              {"</>"}
            </h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={(event) => handleSignIn(event)}>
            <div className="mb-4 text-lg text-black">
              <input
                className="rounded-3xl border-none bg-white  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-black shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="email"
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 text-lg text-black">
              <input
                className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-black shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="password"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-[#D0589E] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#c84692]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
