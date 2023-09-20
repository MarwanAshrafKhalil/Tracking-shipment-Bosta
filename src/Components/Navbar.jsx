import { useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function printTrack() {
    console.log({ open });
  }
  return (
    <>
      <div className=" flex justify-between top-0 items-center pt-10 pr-70 pb-16 pl-70 ">
        <a href="/">
          <img
            className="object-contain h-10 ml-20"
            src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1636574104926.png"
            alt=""
          />
        </a>

        <div className="mr-40 font-bold">
          <ul className=" flex  ">
            <li className="btn-primary">
              <a href={`/brief`}>Products</a>{" "}
            </li>
            <li className="btn-primary">Integrations </li>
            <li className="btn-primary">Use Cases </li>
            <li className="btn-primary">Pricing </li>
            <li className="btn-primary">Blog </li>
          </ul>
        </div>

        <div className="mr-40 font-bold">
          <ul className=" flex  ">
            <li
              onMouseLeave={() => setOpen(false)}
              onMouseEnter={() => setOpen(true)}
              className="relative p-4  text-bosta"
            >
              Track Shipment
              {/* REMOVE */}
              {printTrack()}
              <ul
                // ${
                //   open ? "block" : "hidden"
                // }
                className={` absolute  py-2 mt-2 w-50 h-44  rounded-lg shadow-xl block  `}
              >
                <li className="flex px-12 py-5">
                  <div className=" flex  flex-col">
                    <label className=" w-full  left-0 text-grayish font-medium text-lg">
                      Track your shipment
                    </label>
                    <div className="flex  content-center mt-5">
                      <input
                        type="text"
                        className="border w-60 border-grayish  rounded-l-lg py-1 "
                      />
                      <button className=" bg-bosta w-14 h-14 items-center text-white rounded-r-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="ml-2 w-9 h-9"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            <li className="btn-primary">AR </li>
            <li className="btn-primary">Sign In </li>
            <li className="btn-signup">Sign Up</li>
          </ul>
        </div>
      </div>
      <div id="breif">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
