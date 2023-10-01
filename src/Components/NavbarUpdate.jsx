import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Pricing", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];
const navigation2 = [
  { name: "Track Shipment", href: "#", current: false },
  { name: "Signin", href: "#", current: false },
  { name: "AR", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarUpdate() {
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
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1636574104926.png"
                    alt="Your Company"
                  />
                </div>

                <div className="hidden me-10 sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : " hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {navigation2.map((item) => (
                    <ul
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : " text-black hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
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
                                <span className="sr-only">Open user menu</span>
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
                              <Menu.Items className="absolute  right-0 z-10 mt-2   py-2 w-50 h-44   rounded-lg shadow-xl origin-top-right  bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className=" flex  flex-col m-4">
                                  <label className=" w-full left-0 text-grayish font-medium text-lg">
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
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
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
