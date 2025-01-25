"use client";
import { useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="w-full h-full gap-3 bg-[#EAC872] flex justify-between items-center px-11 uppercase flex-wrap lg:h-20">
      {/* Logo */}
      <Image src={'/logo.png'} alt="logo" width={100} height={100} />

      {/* Hamburger Menu Icon (Mobile) */}
      <button className="lg:hidden" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <GiCrossMark className="h-8 w-8" /> // Cross Icon
        ) : (
          <GiHamburgerMenu className="h-8 w-8" /> // Hamburger Icon
        )}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-10 flex-wrap text-xl font-bold">
        <li className="hover:text-[#633100]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#633100]">
          <Link href={"/services"}>Services</Link>
        </li>
        <li className="hover:text-[#633100]">
          <Link href={"/projects"}>Projects</Link>
        </li>
      </ul>

      {/* Contact Button (Desktop) */}
      <button className="hidden lg:block text-xl font-bold border border-black rounded-3xl py-2 px-5 uppercase hover:text-[#633100]">
        <Link href={"/contact"}>Contact</Link>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-[#EAC872] p-5 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button (Inside Sidebar) */}
          <button className="mb-5" onClick={toggleSidebar}>
            <GiCrossMark className="h-8 w-8" />
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-5 text-xl font-bold">
            <li className="hover:text-[#633100]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#633100]">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="hover:text-[#633100]">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="hover:text-[#633100]">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}