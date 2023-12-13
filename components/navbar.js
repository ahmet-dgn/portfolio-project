import Image from "next/image";
import Button from "./ui/buttons";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentMenuStatus, setMenuStatus] = useState(false);

  //It reverses the mobile menu status.If It is false, change it to true.If It is true, change it to false.
  const menuStatusHandler = () => {
    setMenuStatus(!currentMenuStatus);
  };

  return (
    <nav className="bg-nav-color">
      <div className="flex justify-between items-center 2xl:container mx-auto px-4 xl:px-8 h-24">
        <Link
          href="/"
          className=" md:text-xl text-l font-bold uppercase p-1 md:p-2.5 border-2 rounded-md text-custom-primary border-custom-primary  hover:text-custom-hover hover:border-custom-hover w-[200px] text-center"
        >
          Ahmet Can Doğan
        </Link>
        <div
          className={` w-full h-full fixed top-0 z-20 bg-gray-100 ${
            !currentMenuStatus
              ? "-left-full origin-left duration-500"
              : "left-0 origin-left duration-500 "
          } lg:static lg:h-fit`}
        >
          <ul className="text-link-small pt-4 lg:pt-0 lg:pl-0 lg:flex lg:justify-end ">
            <li
              className="flex group justify-center cursor-pointer flex-col rounded min-h-[2rem] text-link-small  px-4 lg:relative"
              onClick={menuStatusHandler}
            >
              <Button href="/" size="md" type="link">
                HOME
              </Button>
            </li>
            <li
              className="flex group justify-center cursor-pointer flex-col rounded min-h-[2rem] text-link-small  px-4 lg:relative"
              onClick={menuStatusHandler}
            >
              <Button href="#about" size="md" type="link">
                ABOUT
              </Button>
            </li>
            <li
              className="flex group justify-center cursor-pointer flex-col rounded min-h-[2rem] text-link-small  px-4 lg:relative"
              onClick={menuStatusHandler}
            >
              <Button href="#projects" size="md" type="link">
                PROJECTS
              </Button>
            </li>
            <li
              className="flex group justify-center cursor-pointer flex-col rounded min-h-[2rem] text-link-small  px-4 lg:relative"
              onClick={menuStatusHandler}
            >
              <Button href="#contact" size="md" type="link">
                CONTACT
              </Button>
            </li>
          </ul>

          <svg
            onClick={menuStatusHandler}
            className="absolute right-4 top-4 hover:scale-125 fill-gray-900 lg:hidden "
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z" />
          </svg>
        </div>
        <svg
          onClick={menuStatusHandler}
          className=" fill-gray-900 lg:hidden"
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.33333 37.5H41.6667C42.8125 37.5 43.75 36.5625 43.75 35.4167C43.75 34.2708 42.8125 33.3333 41.6667 33.3333H8.33333C7.1875 33.3333 6.25 34.2708 6.25 35.4167C6.25 36.5625 7.1875 37.5 8.33333 37.5ZM8.33333 27.0833H41.6667C42.8125 27.0833 43.75 26.1458 43.75 25C43.75 23.8542 42.8125 22.9167 41.6667 22.9167H8.33333C7.1875 22.9167 6.25 23.8542 6.25 25C6.25 26.1458 7.1875 27.0833 8.33333 27.0833ZM6.25 14.5833C6.25 15.7292 7.1875 16.6667 8.33333 16.6667H41.6667C42.8125 16.6667 43.75 15.7292 43.75 14.5833C43.75 13.4375 42.8125 12.5 41.6667 12.5H8.33333C7.1875 12.5 6.25 13.4375 6.25 14.5833Z" />
        </svg>
      </div>
    </nav>
  );
}
