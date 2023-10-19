import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto h-24 align-middle flex items-center justify-between">
      <Link
        href="/"
        className=" md:text-xl text-l font-bold uppercase p-1 md:p-2.5 border-2 rounded-md leading-5 border-sky-900 inline-block hover:text-sky-600 hover:border-sky-600 "
      >
        Ahmet Can Doğan
      </Link>
      <Image
        className="md:hidden"
        onClick={handleToggle}
        src="/images/hamburger-icon.svg"
        width={25}
        height={25}
      />
      <div
        className={`${
          isOpen ? "hidden" : "block"
        } absolute inset-0 bg-white pt-6 pr-6 md:block md:bg-transparent md:relative md:pt-0 md:pr-0`}
      >
        <p
          onClick={handleToggle}
          className="md:hidden absolute right-6 leading-3 text-2xl font-bold uppercase hover:text-sky-600"
        >
          x
        </p>
        <ul className="md:flex">
          <li className="mb-4 md:mb-0">
            <Link
              href="/"
              className="uppercase text-base font-medium pl-6 hover:text-sky-600 "
            >
              HOME
            </Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link
              href="/"
              className="uppercase text-base font-medium pl-6 hover:text-sky-600"
            >
              ABOUT
            </Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link
              href="/"
              className="uppercase text-base font-medium pl-6 hover:text-sky-600"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="uppercase text-base font-medium pl-6 hover:text-sky-600"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
