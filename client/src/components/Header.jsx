import React, { useEffect, useRef } from "react";
import "../components/Header.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const menu = menuRef.current;

    if (btn && menu) {
      const toggleMenu = () => {
        menu.classList.toggle("hidden");
      };

      btn.addEventListener("click", toggleMenu);

      // Cleanup the event listener on component unmount
      return () => {
        btn.removeEventListener("click", toggleMenu);
      };
    }
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between gap-2">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              ref={btnRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center candle-mustard text-xl md:text-3xl">
              <span className="text-green-500">Crish</span>
              <span
                className="font-color relative inline-block"
                style={{ top: "4px" }}
              >
                Lashes
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="/dashboard"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/contacts"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
          <label className="relative cursor-pointer hidden lg:inline">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-60 px-6 text-md text-gray-700 border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-gray-500 placeholder-gray-300  transition duration-200"
            />
            <button className="absolute right-1 top-1 px-1 translate-y-1/2 text-gray-500">
              {" "}
              <AiOutlineSearch />
            </button>
          </label>
          <button className="bg-slate-900 rounded-full w-10 h-10 text-gray-500 px-3 lg:hidden">
            {" "}
            <AiOutlineSearch />
          </button>
          <button className="bg-transparent hover:bg-gray-700 text-orange-500 font-semibold hover:text-orange-500 py-1 px-4 border-2 border-orange-500 hover:border-orange-500 rounded-full transition duration-200">
            Sign In
          </button>
        </div>
      </div>

      <div className="mobile-menu hidden sm:hidden" ref={menuRef}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="/dashboard"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="/contacts"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
}
