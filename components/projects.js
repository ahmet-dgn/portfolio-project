import Image from "next/image";
import Link from "next/link";
import Card from "./ui/card";

import container from "./ui/container";
import Container from "./ui/container";

export default function Projects() {
  return (
    <div
      id="projects"
      className=" py-24 container mx-auto flex justify-center  items-center flex-col w-full"
    >
      <p className="text-h4  text-custom-dark border-2 rounded-md leading-5 border-custom-dark p-2.5 mb-6 inline-block ">
        Projects
      </p>
      <div className="space-y-8 w-full flex justify-center  items-center flex-col">
        <div className="p-4  rounded-lg bg-white drop-shadow-md flex  w-full max-w-6xl flex-col lg:flex-row">
          <div className="relative w-full min-h-[400px]">
            <Image
              src="/images/coffeShop.png"
              fill
              alt="Coffe Shop Project"
              title="Coffe Shop Project"
              className="rounded object-cover "
            />
          </div>
          <div className="flex flex-col items-center justify-center  text-center min-h-[400px] w-full">
            <p className="text-h5 mb-2 uppercase font-bold text-gray-900">
              {" "}
              coffee shop websıte
            </p>
            <p className="mb-6 max-w-sm text-gray-600 ">
              This is a coffee shop promotional website. The site design was
              created in Figma. Menu data was fetched from a separate file and
              displayed.
            </p>
            <p className="text- font-medium mb-2 text-gray-600 ">Tools Used</p>
            <div className="max-w-xs flex flex-wrap justify-center mb-9">
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                Figma
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                HTML
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                CSS
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                React
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                Next
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                GIT
              </p>
            </div>
            <div className="flex flex-wrap justify-center ">
              <Link
                href="https://www.figma.com/file/doGOj4sCVfHf07OUEHyADJ/coffee-web-site?type=design&mode=design"
                className="p-2 font-medium leading-2 rounded border-2 border-custom-primary hover:bg-custom-primary text-custom-primary hover:text-white m-1.5  block"
                target="_blank"
              >
                Figma
              </Link>
              <Link
                href="https://github.com/ahmet-dgn/nextjs-coffee-shop"
                className="p-2 font-medium leading-2 rounded border-2 border-custom-primary hover:bg-custom-primary  text-custom-primary hover:text-white m-1.5 block"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href="https://coffee-shop.ahmetcandgn.com/"
                className="p-2 font-medium leading-2 rounded border-2 border-custom-primary bg-custom-primary   text-white m-1.5 hover:bg-transparent hover:text-custom-primary block"
                target="_blank"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4  rounded-lg bg-white drop-shadow-md flex  w-full max-w-6xl flex-col lg:flex-row">
          <div className="relative w-full min-h-[400px]">
            <Image
              src="/images/expenseTracker.png"
              fill
              alt="Expense Tracker Project"
              title="Expense Tracker Project"
              className="rounded object-cover "
            />
          </div>
          <div className="flex flex-col items-center justify-center  text-center min-h-[400px] w-full">
            <p className="text-h5 mb-2 uppercase font-bold text-gray-900 ">
              {" "}
              EXPENSE TRACKER
            </p>
            <p className="mb-6 max-w-sm text-gray-600 ">
              I only used react in this application. I also designed the app in
              Figma.
            </p>
            <p className="text-gray-600 font-medium mb-2 ">Tools Used</p>
            <div className="max-w-xs flex flex-wrap justify-center mb-9">
              <p className="p-2.5 bg-gray-300 text-gray-600  font-medium leading-5 rounded m-1">
                Figma
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600 font-medium leading-5 rounded m-1">
                HTML
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600  font-medium leading-5 rounded m-1">
                CSS
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600  font-medium leading-5 rounded m-1">
                React
              </p>
              <p className="p-2.5 bg-gray-300 text-gray-600  font-medium leading-5 rounded m-1">
                GIT
              </p>
            </div>
            <div className="flex flex-wrap justify-center ">
              <Link
                href="https://www.figma.com/file/N5p5VO6j453W2EttcuqaE6/Expenses?type=design&mode=design"
                className="p-2 font-medium leading-2 rounded border-2 border-custom-primary hover:bg-custom-primary  text-custom-primary hover:text-white m-1.5 block"
                target="_blank"
              >
                Figma
              </Link>
              <Link
                href="https://github.com/ahmet-dgn/expense-tracker"
                className="p-2 font-medium leading-2 rounded border-2 border-custom-primary hover:bg-custom-primary  text-custom-primary hover:text-white m-1.5 block"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href="https://expense-tracker.ahmetcandgn.com/"
                className="p-2 font-medium leading-2 rounded border-2 border-custom-primary bg-custom-primary  text-white m-1.5 hover:bg-transparent hover:text-custom-primary block"
                target="_blank"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
