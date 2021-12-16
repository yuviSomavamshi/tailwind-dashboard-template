import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.svg";

import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-8 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" width="32" height="32">
    <defs>
        <linearGradient id="A" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="4%" stop-color="#0ff"/>
            <stop offset="100%" stop-color="#080080"/>
        </linearGradient>
        <linearGradient id="B" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0ff"/>
            <stop offset="95%" stop-color="#040080"/>
        </linearGradient>
        <linearGradient id="C" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0af"/>
            <stop offset="100%" stop-color="#00387f"/>
        </linearGradient>
        <path id="D" d="M31.125 41.500032c0-5.747816 4.627217-10.375033 10.375033-10.375033s10.374933 4.627217 10.374933 10.375033-4.627216 10.374933-10.374933 10.374933S31.125 47.247749 31.125 41.500032z"/>
    </defs>
    <path d="M161.6595.2488c-44.287 4.6424-81.1686 22.1639-111.0804 53.0137-26.8626 27.705-44.5774 64.3953-49.5143 102.8827-2.178 16.9225-.8712 48.5211 2.6137 63.347l2.6136 11.2317 92.9301.4493c88.4286.2995 92.9299.4492 95.6888 3.1449 12.9231 12.1302 32.3803 9.2848 39.7856-5.8406 3.9206-8.0868 4.0657-13.7775.4357-21.8644-4.2109-9.5844-10.4547-13.3283-22.0709-13.3283-8.8574 0-10.3094.4493-15.5367 4.7922l-5.9534 4.942H157.739c-18.586 0-37.898-.5991-42.8349-1.3479-34.994-5.2414-56.6293-38.6371-47.6267-73.9796 4.7918-19.3186 17.134-32.7967 36.8817-40.4342 7.9861-3.1449 10.4546-3.1449 112.3872-3.744l104.1106-1.6473c0-.599-3.1945-5.541-7.1149-10.7824-25.5558-34.8933-64.6154-59.9026-105.4175-67.6899C195.637.9976 171.0977-.6498 161.6595.2488z" fill="url(#A)" fill-opacity=".9"/>
    <path d="M128.262761 120.35337c-18.00518 5.990268-20.76403 33.245931-4.501262 43.728891 8.712188 5.540972 22.216039 3.44438 29.040582-4.342938 2.758917-2.995151 3.920524-3.144905 41.382892-3.144905 32.815939 0 40.076118.449296 48.207502 2.695643 20.618796 5.840479 35.574723 22.014165 41.382892 44.178119 2.613617 10.333207 2.613617 17.671262-.435636 28.603485-4.79173 17.97077-16.55317 32.047863-33.687144 40.434232l-9.583393 4.642446-105.707862.748771-105.562694.748805 9.147824 11.980502c16.843505 21.864446 39.350013 40.583986 61.85652 51.366421 13.939488 6.58925 33.687145 13.178569 45.448585 15.275126 18.005179 2.995152 62.582558 1.198102 71.585148-2.845362 1.597243-.748737 6.824543-2.396066 11.471038-3.893676 22.361274-6.739039 46.900594-21.864446 66.793419-41.332723 24.53932-23.961003 41.528126-55.409851 49.659444-91.950441 4.646562-20.965887 3.339721-68.58842-2.323215-84.013335l-1.452009-3.594168h-92.639646-92.784748l-2.758917-3.144871c-5.227299-6.140022-16.117534-8.835631-24.53932-6.140022z" fill="url(#B)"/>
    <path d="M129.2929 143.264041h5.7734V154.5h-5.7734zm7.2745-5.073889h5.7734V154.5h-5.7734zm70.2255 80.073889h5.7734V229.5h-5.7734zm7.2745-5.073889h5.7734V229.5h-5.7734zm7.1592-5.912452H227V229.5h-5.7734zM199.5 221.509885h5.7734V229.5H199.5z" fill="#ccf2ff"/>
    <g transform="matrix(0 1 -1 0 -211.087502 -224.087502)" stroke="url(#C)">
        <g stroke-width="2.0833">
            <use xlink-href="#D" fill="#3f3f3f"/>
            <path d="M37.35 103.749963h8.299967l-4.149934-51.874965z" fill="#d0cfce"/>
            <path d="M41.500033 51.874998l4.149934 51.874965H41.4585l.041533-51.874965" fill="#9b9b9a"/>
        </g>
        <g fill="none" stroke-width="4.1667">
            <use xlink-href="#D"/>
            <path d="M39.424966 53.950032l-4.149934 51.874965h12.45l-4.150033-51.874965m10.924924 26.94389c16.548042-5.459374 28.500041-21.019782 28.500041-39.39389C82.999964 18.579583 64.420481 0 41.500032 0S0 18.579583 0 41.500032c0 18.374108 11.952 33.934516 28.500141 39.39389m24.594924-10.524433c11.44155-4.600324 19.529966-15.782515 19.529966-28.869457 0-17.189366-13.935733-31.124999-31.124999-31.124999S10.375033 24.310666 10.375033 41.500032c0 13.086942 8.088316 24.269133 19.529866 28.869457M51.65714 59.583607c6.318325-3.558609 10.592858-10.316867 10.592858-18.083575 0-11.459976-9.29009-20.750066-20.749966-20.750066s-20.750066 9.29009-20.750066 20.750066c0 7.766708 4.274533 14.524966 10.592958 18.083575" stroke-miterlimit="10"/>
        </g>
    </g>
    <path d="M143.7266 132.2777H149.5V154.5h-5.7734zM122 146.509885h5.7734V154.5H122z" fill="#ccf2ff"/>
</svg>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <ul className="mt-3">
            {/* Dashboard */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === "/" && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${pathname === "/" && "hover:text-gray-200"}`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                      className={`fill-current text-gray-400 ${pathname === "/" && "!text-indigo-500"}`}
                      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                    />
                    <path
                      className={`fill-current text-gray-600 ${pathname === "/" && "text-indigo-600"}`}
                      d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                    />
                    <path
                      className={`fill-current text-gray-400 ${pathname === "/" && "text-indigo-200"}`}
                      d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Dashboard
                  </span>
                </div>
              </NavLink>
            </li>
            {/* Analytics */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("analytics") && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/analytics"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes("analytics") && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${pathname.includes("analytics") && "text-indigo-500"}`} d="M0 20h24v2H0z" />
                    <path
                      className={`fill-current text-gray-400 ${pathname.includes("analytics") && "text-indigo-300"}`}
                      d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Analytics
                  </span>
                </div>
              </NavLink>
            </li>
            {/* E-Commerce */}
            <SidebarLinkGroup activecondition={pathname.includes("ecommerce")}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes("ecommerce") && "hover:text-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                            <path
                              className={`fill-current text-gray-400 ${pathname.includes("ecommerce") && "text-indigo-300"}`}
                              d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                            />
                            <path
                              className={`fill-current text-gray-700 ${pathname.includes("ecommerce") && "!text-indigo-600"}`}
                              d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                            />
                            <path
                              className={`fill-current text-gray-600 ${pathname.includes("ecommerce") && "text-indigo-500"}`}
                              d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                            />
                          </svg>
                          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            E-Commerce
                          </span>
                        </div>
                        {/* Icon */}
                        <div className="flex shrink-0 ml-2">
                          <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && "transform rotate-180"}`} viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Customers
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Orders
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Invoices
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Shop
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Shop 2
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Single Product
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Cart
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Cart 2
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pay</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* Campaigns */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("campaigns") && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes("campaigns") && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                      className={`fill-current text-gray-600 ${pathname.includes("campaigns") && "text-indigo-500"}`}
                      d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                    />
                    <path
                      className={`fill-current text-gray-400 ${pathname.includes("campaigns") && "text-indigo-300"}`}
                      d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Campaigns
                  </span>
                </div>
              </NavLink>
            </li>
            {/* Team */}
            <SidebarLinkGroup activecondition={pathname.includes("team")}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes("team") && "hover:text-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                            <path
                              className={`fill-current text-gray-600 ${pathname.includes("team") && "text-indigo-500"}`}
                              d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                            />
                            <path
                              className={`fill-current text-gray-400 ${pathname.includes("team") && "text-indigo-300"}`}
                              d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                            />
                          </svg>
                          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            Team
                          </span>
                        </div>
                        {/* Icon */}
                        <div className="flex shrink-0 ml-2">
                          <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && "transform rotate-180"}`} viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Team - Tabs
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Team - Tiles
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Profile
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* Messages */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("messages") && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes("messages") && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                      className={`fill-current text-gray-600 ${pathname.includes("messages") && "text-indigo-500"}`}
                      d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                    />
                    <path
                      className={`fill-current text-gray-400 ${pathname.includes("messages") && "text-indigo-300"}`}
                      d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Messages</span>
                </div>
              </NavLink>
            </li>
            {/* Tasks */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("tasks") && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes("tasks") && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                      className={`fill-current text-gray-600 ${pathname.includes("tasks") && "text-indigo-500"}`}
                      d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                    />
                    <path className={`fill-current text-gray-600 ${pathname.includes("tasks") && "text-indigo-500"}`} d="M1 1h22v23H1z" />
                    <path
                      className={`fill-current text-gray-400 ${pathname.includes("tasks") && "text-indigo-300"}`}
                      d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tasks</span>
                </div>
              </NavLink>
            </li>
            {/* Inbox */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("inbox") && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes("inbox") && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                      className={`fill-current text-gray-600 ${pathname.includes("inbox") && "text-indigo-500"}`}
                      d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
                    />
                    <path
                      className={`fill-current text-gray-400 ${pathname.includes("inbox") && "text-indigo-300"}`}
                      d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Inbox</span>
                </div>
              </NavLink>
            </li>
            {/* Calendar */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("calendar") && "bg-gray-900"}`}>
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                  pathname.includes("calendar") && "hover:text-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${pathname.includes("calendar") && "text-indigo-500"}`} d="M1 3h22v20H1z" />
                    <path
                      className={`fill-current text-gray-400 ${pathname.includes("calendar") && "text-indigo-300"}`}
                      d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                    />
                  </svg>
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Calendar</span>
                </div>
              </NavLink>
            </li>
            {/* Settings */}
            <SidebarLinkGroup activecondition={pathname.includes("settings")}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes("settings") && "hover:text-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                            <path
                              className={`fill-current text-gray-600 ${pathname.includes("settings") && "text-indigo-500"}`}
                              d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                            />
                            <path
                              className={`fill-current text-gray-400 ${pathname.includes("settings") && "text-indigo-300"}`}
                              d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                            />
                            <path
                              className={`fill-current text-gray-600 ${pathname.includes("settings") && "text-indigo-500"}`}
                              d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                            />
                            <path
                              className={`fill-current text-gray-400 ${pathname.includes("settings") && "text-indigo-300"}`}
                              d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                            />
                          </svg>
                          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            Settings
                          </span>
                        </div>
                        {/* Icon */}
                        <div className="flex shrink-0 ml-2">
                          <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && "transform rotate-180"}`} viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              My Account
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              My Notifications
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Connected Apps
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Plans
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Billing & Invoices
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Give Feedback
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* Utility */}
            <SidebarLinkGroup activecondition={pathname.includes("utility")}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes("utility") && "hover:text-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                            <circle
                              className={`fill-current text-gray-400 ${pathname.includes("utility") && "text-indigo-300"}`}
                              cx="18.5"
                              cy="5.5"
                              r="4.5"
                            />
                            <circle
                              className={`fill-current text-gray-600 ${pathname.includes("utility") && "text-indigo-500"}`}
                              cx="5.5"
                              cy="5.5"
                              r="4.5"
                            />
                            <circle
                              className={`fill-current text-gray-600 ${pathname.includes("utility") && "text-indigo-500"}`}
                              cx="18.5"
                              cy="18.5"
                              r="4.5"
                            />
                            <circle
                              className={`fill-current text-gray-400 ${pathname.includes("utility") && "text-indigo-300"}`}
                              cx="5.5"
                              cy="18.5"
                              r="4.5"
                            />
                          </svg>
                          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            Utility
                          </span>
                        </div>
                        {/* Icon */}
                        <div className="flex shrink-0 ml-2">
                          <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 ${open && "transform rotate-180"}`} viewBox="0 0 12 12">
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Changelog
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Roadmap
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              FAQs
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Empty State
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink exact to="/" className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                            <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">404</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
          </ul>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-gray-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
