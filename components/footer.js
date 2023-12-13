import Button from "./ui/buttons";
import Container from "./ui/container";
import Link from "next/link";

export default function Footer({ menuData }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="bg-gray-800">
        <Container>
          <div>
            <p className="text-h4  mb-2 text-center text-gray-200 ">
              Contact Me
            </p>
            <Link
              href="mailto:ahmetcandgn@gmail.com"
              className="text-center block text-gray-400 hover:text-gray-200"
            >
              ahmetcandgn@gmail.com
            </Link>
          </div>

          <p className="text-gray-500 text-center text-tiny-regular">
            © {currentYear} All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
