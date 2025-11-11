"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Kcode<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#course" className="hover:text-blue-500">Course</a></li>
          <li><a href="#docs" className="hover:text-blue-500">Docs</a></li>
          <li><a href="#api" className="hover:text-blue-500">API</a></li>
        </ul>

        {/* <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-md transition-all">
          LET’S TALK
        </button> */}

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            <li>
              <a href="#home" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#course" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Course</a>
            </li>
            <li>
              <a href="#docs" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Docs</a>
            </li>
            <li>
              <a href="#api" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>API</a>
            </li>
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition"
                onClick={() => setIsOpen(false)}
              >
                LET’S TALK
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
