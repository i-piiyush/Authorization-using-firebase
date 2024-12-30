import React, { useState } from "react";

function Signup() {
  const [isNone, setIsNone] = useState(false);

  return (
    <div className={`h-screen w-screen bg-[#242424] absolute top-[0] ${ isNone === true ? "hidden":"flex"}items-center`}>
      <div className=" p-[5%] flex flex-col gap-8">
        <div>
          <h1 className="text-xl font-bold">Whats your name?</h1>
          <input
            type="text"
            placeholder="John Doe"
            className="bg-transparent border border-gray-200/50 rounded-lg outline-none px-4 py-1"
          />
        </div>

        <div>
          <h1 className="text-xl font-bold">what should people call you?</h1>

          <input
            type="text"
            placeholder="@username"
            className="bg-transparent border border-gray-200/50 rounded-lg outline-none px-4 py-1"
          />
        </div>

        <div>
          <h1 className="text-xl font-bold">Tell people about you!</h1>

          <textarea
            placeholder="Bio"
            className="bg-transparent border border-gray-200/50 rounded-lg outline-none px-4 py-1"
          />
        </div>
        <div>
          <button onClick={()=>{
            setIsNone(!isNone)
          }} className="bg-gray-300 text-sm font-semibold text-[#242424] px-8 py-3 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
