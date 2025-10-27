"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../photo/logo.png";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white px-8 py-4 flex justify-between items-center shadow-lg text-black">
      <div className="flex space-x-6">
        <Image className="object-fill" src={logo} alt="logo" />
      </div>
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-4xl pl-5">
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link
          href="./aboutus"
          className="hover:bg-gray-300 py-2 px-4 rounded text-black"
        >
          О компании
        </Link>
        <Link
          href="./schedule"
          className="hover:bg-gray-300 py-2 px-4 rounded text-black"
        >
          Расписание
        </Link>
        <Link
          href="./ticket"
          className="hover:bg-gray-300 py-2 px-4 rounded text-black"
        >
          Купить билет
        </Link>
        <Link
          href="./contacts"
          className="hover:bg-gray-300 py-2 px-4 rounded text-black"
        >
          Контакты
        </Link>
      </div>

      <div className="flex space-x-8 items-center">
        <a
          href="mailto:vipvolzhsky@mail.ru"
          className="text-sm hover:text-gray-400 text-black pl-8"
        >
          vipvolzhsky@mail.ru
        </a>
        <a
          href="tel:+78005556634"
          className="text-sm hover:text-gray-400 text-black"
        >
          8 (800) 555-66-34
        </a>
        <button className="bg-blue-400 py-2 px-4 rounded hover:bg-blue-300 text-white">
          Личный кабинет
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col p-4 space-y-4 ml-8 mt-2 text-black">
          <Link
            href="./aboutus"
            className="hover:bg-gray-300 py-2 px-4 rounded text-black"
          >
            О компании
          </Link>
          <Link
            href="./schedule"
            className="hover:bg-gray-300 py-2 px-4 rounded text-black"
          >
            Расписание
          </Link>
          <Link
            href="./ticket"
            className="hover:bg-gray-300 py-2 px-4 rounded text-black"
          >
            Купить билет
          </Link>
          <Link
            href="./contacts"
            className="hover:bg-gray-300 py-2 px-4 rounded text-black"
          >
            Контакты
          </Link>
        </div>
      )}
    </header>
  );
}
