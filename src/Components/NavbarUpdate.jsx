import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarUpdate() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [trackID, setTrackID] = useState("");
  const [t, i18n] = useTranslation();

  const navigation = [
    { name: t("Home"), href: "/" },
    { name: t("Pricing"), href: "#" },
    { name: t("Contact Us"), href: "#" },
  ];
  const navigation2 = [
    { name: t("Track Shipping"), href: "#" },
    { name: t("Signin"), href: "#" },
    // { name: "AR", href: "#" },
  ];

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
    <Disclosure as="nav" className="bg-white pt-10 pe-70 pb-16 ps-70">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1200px]  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16  items-center justify-between">
              <div className="absolute  left-0 pl-5 flex  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  w-full gap-10 items-center justify-center  sm:flex sm:justify-between">
                <div id="logo" className="flex flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1636574104926.png"
                    alt="Your Company"
                  />
                </div>
                <div
                  id="nav-content"
                  className="hidden flex flex-grow max-w-[800px] justify-center md:justify-between  me-16  sm:flex "
                >
                  <div
                    id="first nav"
                    className="hidden  gap-4 pl-10 md:flex space-x-4 "
                  >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="btn-primary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div id="second nav" className=" flex  gap-4 space-x-4">
                    {navigation2.map((item) => (
                      <ul
                        key={item.name}
                        href={item.href}
                        className="btn-primary"
                      >
                        <li>
                          {item.name != "Track Shipment" ? (
                            item.name
                          ) : (
                            <Menu
                              as="div"
                              className="relative ml-3"
                              // onMouseLeave={() => setOpen(false)}
                              // onMouseEnter={() => setOpen(true)}
                            >
                              <div
                              // className={open ? "block" : "hidden"}
                              >
                                <Menu.Button className="relative flex ">
                                  <span className="absolute -inset-1.5" />
                                  <span className="sr-only">
                                    Open user menu
                                  </span>
                                  <li>{item.name}</li>
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute   left-0  z-10 mt-2 py-2 w-50 h-44 rounded-lg shadow-xl bg-white border border-1">
                                  <div className=" flex w-full flex-col m-4">
                                    <label className=" w-full left-0  text-grayish font-medium text-lg">
                                      {t("Track Shipping")}
                                    </label>
                                    <div className="flex content-center mt-5 ">
                                      <input
                                        className="border px-2 w-60 border-grayish  rounded-s-lg py-1 "
                                        type="text"
                                        placeholder="Enter the Shipment ID"
                                        value={trackID}
                                        onChange={(ev) =>
                                          updateTrackID(ev.target.value)
                                        }
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
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          )}
                        </li>
                      </ul>
                      // <a
                      //   key={item.name}
                      //   href={item.href}
                      //   className={classNames(
                      //     item.current
                      //       ? "bg-gray-900 text-white"
                      //       : " text-black hover:bg-gray-700 hover:text-white",
                      //     "rounded-md px-3 py-2 text-sm font-medium"
                      //   )}
                      //   aria-current={item.current ? "page" : undefined}
                      // >
                      //   {item.name}
                      // </a>
                    ))}

                    <ul className="btn-primary">
                      <li>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden flex">
            <div className="flex flex-col  items-left space-y-1 px-4 pb-3 pt-2">
              {navigation2.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="btn-primary"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
