import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { AiOutlineDashboard, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";

import styles from "./styles/app.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Mina"></link>
      </head>
      <body 
        className="p-7 text-gray-900 md:mx-auto max-w-4xl" 
        style={{ backgroundColor: "#E8F4F7" }}
      >
        <header 
          className="mb-4" 
          style={{ fontFamily: "Mina, system-ui, sans-serif" }}
        >
          <div className="flex flex-col md:flex-row md:justify-between" id="navigation">
            <div className="flex flex-row md:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-500 hover:text-white hover:border-white"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  menu.classList.toggle("hidden");
                }}
              >
                <svg
                  className="fill-current h-5 w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path
                    fillRule="evenodd"
                    d="M3 7h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex flex-row border-b border-gray-300">
              <a
                href="/"
                className="hover:text-teal-800 px-3 py-2"
              >
                Knowledge
              </a>
              <a
                href="/knowledge"
                className="hover:text-teal-800 px-3 py-2"
              >
                Dashboard
              </a>
              <a
                href="/about"
                className="hover:text-teal-800 px-3 py-2"
              >
                About Electrify
              </a>
            </div>
          </div>
          <div id="menu" className="hidden md:hidden absolute text-lg" style={{ backgroundColor: "#C2E1E8" }}>
            <a
              href="/knowledge"
              className="block hover:text-teal-800 px-3 py-2"
            >
              <div className="flex content-end">
                <HiOutlineBookOpen size="1.2em" /> 
                &nbsp; 
                <span className="">
                  Knowledge
                </span>
              </div>
            </a>
            <a
              href="/knowledge"
              className="block hover:text-teal-800 px-3 py-2"
            >
              <div className="flex content-end">
                <AiOutlineDashboard size="1.2em" /> &nbsp; <span>Dashboard</span>
              </div>
              
            </a>
            <a
              href="/dashboard"
              className="block hover:text-teal-800 px-3 py-2"
            >
              <div className="flex content-end">
                <AiOutlineInfoCircle size="1.2em" /> &nbsp; <span>About Electrify</span>
              </div>
            </a>
          </div>
        </header>
        <main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
