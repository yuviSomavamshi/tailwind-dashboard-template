import React from "react";
import SearchModal from "./header/SearchModal";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";
import { Close, SignalCellularAlt } from "@mui/icons-material";


function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <div className="flex flex-row items-center justify-between px-4 py-1 shadow-sm rounded border">
            <span className={`flex flex-row font-light text-gray-400 tracking-wide items-center`}>
              <SignalCellularAlt className="animate-pulse" title={true ? "Setup is ONLINE" : "Setup is OFFLINE"} />
              <span className="ml-2 font-semibold">Simulator Product</span>
            </span>
            <button className="text-cds-ice-0100 focus:outline-none ml-4 font-extrabold hover:text-red-600">
              <Close className="h-5 w-5" />
            </button>
          </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <SearchModal />
            <Notifications />
            <Help />
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
