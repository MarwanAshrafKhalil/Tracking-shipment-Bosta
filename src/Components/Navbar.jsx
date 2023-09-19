import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function printTrack() {
    console.log({ open });
  }
  return (
    <div className=" flex justify-between top-0 items-center pt-10 pr-70 pb-16 pl-70 ">
      <img
        className="object-contain h-10 ml-20"
        src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1636574104926.png"
        alt=""
      />
      <div className="mr-40 font-bold">
        <ul className=" flex  ">
          <li className="p-4 text-[#4f5665] hover:text-[#e30613] hover:underline">
            Products{" "}
          </li>
          <li className="p-4 text-[#4f5665] hover:text-[#e30613]">
            Integrations{" "}
          </li>
          <li className="p-4 text-[#4f5665] hover:text-[#e30613]">
            Use Cases{" "}
          </li>
          <li className="p-4 text-[#4f5665] hover:text-[#e30613]">Pricing </li>
          <li className="p-4 text-[#4f5665] hover:text-[#e30613]">Blog </li>
        </ul>
      </div>
      <div className="mr-40 font-bold">
        <ul className=" flex  ">
          <li
            onMouseLeave={() => setOpen(false)}
            onMouseEnter={() => setOpen(true)}
            className="relative p-4  text-[#e30613]"
          >
            Track Shipment
            {/* REMOVE */}
            {printTrack()}
            <ul
              className={` absolute right-0 py-2 mt-2 w-50 rounded-lg shadow-xl ${
                open ? "block" : "hidden"
              }`}
            >
              <li className="flex    px-3 py-2 ">
                <div className=" flex  flex-col mx-10 my-10 ">
                  <label className=" left-0 w-full m-5 text-[#4f5665] text-md">
                    Track your shipment
                  </label>
                  <input
                    type="text"
                    className="border border-[#4f5665]  rounded-lg "
                  />
                </div>
              </li>
            </ul>
          </li>

          <li className="p-4 text-[#4f5665] hover:text-[#e30613]">AR </li>
          <li className="p-4 text-[#4f5665] hover:text-[#e30613]">Sign In </li>
          <li className="p-4 text-[#e30613] rounded-full px-8 py-3 border border-1 border-[#e30613]  hover:bg-[#e30613] hover:text-white">
            Sign Up{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
