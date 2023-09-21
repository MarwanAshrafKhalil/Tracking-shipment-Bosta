import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [trackID, setTrackID] = useState("");
  const [t, i18n] = useTranslation();

  function updateTrackID(ID) {
    setTrackID(ID);

    console.log(ID);
  }

  function searchID() {
    // console.log("trtr: ", trackID);
    // dispatch(
    //   fetchUsers({ trackID, onSuccessHandler: () => navigate("/Brief") })
    // );
    navigate(`/Brief/${trackID}`);
  }

  return (
    <>
      <div className=" flex justify-between top-0 items-center pt-10 pe-70 pb-16 ps-70 ">
        <Link to="/">
          <img
            className="object-contain h-10 ms-20"
            src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1636574104926.png"
            alt=""
          />
        </Link>

        <div className="me-40 font-bold lg:block md:hidden sm: hidden">
          <ul className=" flex  ">
            <li className="btn-primary">{t("Home")}</li>
            <li className="btn-primary">{t("Pricing")} </li>
            <li className="btn-primary">{t("Contact Us")} </li>
            {/* <li className="btn-primary">Pricing </li>
            <li className="btn-primary">Blog </li> */}
          </ul>
        </div>
        <div className="me-40 font-bold md:flex-row md:me-5 sm:flex-row sm:me-2">
          <ul className=" flex  ">
            <li
              onMouseLeave={() => setOpen(false)}
              onMouseEnter={() => setOpen(true)}
              className="relative p-4  text-bosta"
            >
              {t("Track Shipping")}
              <ul
                className={` absolute z-10 py-2 mt-2 w-50 h-44 bg-white rounded-lg shadow-xl ${
                  open ? "block" : "hidden"
                }  `}
              >
                <li className="flex px-12 py-5">
                  <div className=" flex  flex-col">
                    <label className=" w-full  left-0 text-grayish font-medium text-lg">
                      {t("Track Shipping")}
                    </label>
                    <div className="flex content-center mt-5">
                      <input
                        type="text"
                        placeholder="Enter the Shipment ID"
                        value={trackID}
                        onChange={(ev) => updateTrackID(ev.target.value)}
                        className="border px-2 w-60 border-grayish  rounded-s-lg py-1 "
                      />
                      <button
                        onClick={() => searchID()}
                        className=" bg-bosta w-14 h-14 items-center text-white rounded-e-xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="ms-2 w-9 h-9"
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

            <li className="btn-primary">{t("Signin")} </li>

            <li className="btn-primary ">
              {i18n.language == "en" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                >
                  AR
                </button>
              )}
              {i18n.language == "ar" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  EN
                </button>
              )}
            </li>
            {/* <li className="btn-signup">Sign Up</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
