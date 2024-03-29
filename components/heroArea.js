import Image from "next/image";
import Link from "next/link";
export default function HeroArea() {
  return (
    <div className=" py-24 bg-sky-800/20 flex justify-center bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className=" container flex items-center justify-center flex-col md:flex-row">
        <Image
          src="/images/ahmet-can-dogan.png"
          width={325}
          height={400}
          alt="Ahmet Can Doğan"
          title="Ahmet Can Doğan"
        />
        <div className="md:pl-16 max-w-sm pt-10 md:pt-0 text-center md:text-left">
          <p className="font-display pb-1 text-display text-custom-primary">
            Hello
          </p>
          <h1 className="text-h4 pb-4 font-bold text-custom-primary">
            I’m a Front-End Developer based in Türkiye.
          </h1>
          <p className="pb-4 text-custom-primary">
            My name is Ahmet Can Doğan. I specialize in building the frontend of
            websites and web applications, ensuring they contribute to the
            overall success of the product.
          </p>
          <div className="flex space-x-2 justify-center md:justify-start">
            <Link
              className="p-2.5 bg-custom-primary text-white rounded-md leading-4 hover:bg-custom-hover  w-12 h-12 flex justify-center items-center"
              href="https://github.com/ahmet-dgn"
              target="_blank"
            >
              <svg
                width="20"
                height="23"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_219_122)">
                  <path
                    d="M10.7346 16.9289C10.7346 15.8384 10.7346 14.7657 10.7346 13.6929C10.7346 13.2645 10.6816 12.8468 10.5393 12.4467C10.4334 12.1458 10.2844 11.8802 10.0428 11.6395C10.3904 11.5722 10.7148 11.5191 11.0391 11.4483C11.529 11.3421 11.9991 11.1757 12.4459 10.935C13.3033 10.4747 13.9454 9.78786 14.2963 8.82841C14.7862 7.49367 14.9087 6.12354 14.5346 4.72862C14.3956 4.20464 14.144 3.73376 13.813 3.31953C13.7369 3.22748 13.7269 3.15313 13.7634 3.03276C14.0414 2.12642 13.9189 1.24485 13.6144 0.373914C13.578 0.267702 13.5085 0.260621 13.4257 0.257081C13.0484 0.25 12.6942 0.356212 12.3466 0.494288C11.8336 0.696091 11.3536 0.972243 10.8935 1.2838C10.7909 1.35461 10.7048 1.37585 10.579 1.34045C9.16231 0.94392 7.72573 0.936839 6.29907 1.23777C5.79594 1.34399 5.38879 1.3192 4.94855 1.00411C4.41562 0.632364 3.81649 0.380995 3.17102 0.281864C3.0651 0.264162 2.98566 0.25354 2.92276 0.25L2.72747 0.324349C2.67782 0.388076 2.64472 0.494288 2.59175 0.667768C2.35674 1.47144 2.3435 2.28219 2.54872 3.09295C2.57851 3.21332 2.56527 3.29121 2.48914 3.38326C1.86353 4.17277 1.57224 5.09328 1.559 6.12C1.54907 6.93783 1.62189 7.74504 1.86353 8.52393C2.34681 10.0817 3.39611 10.9739 4.836 11.4023C5.28949 11.5368 5.74959 11.6253 6.25604 11.6855C6.11701 11.8484 5.99454 11.99 5.90517 12.1564C5.76614 12.4148 5.68008 12.6945 5.64698 12.9884C5.63374 13.1088 5.5874 13.1619 5.49141 13.2044C4.30639 13.7213 3.26039 13.3637 2.57189 12.213C2.2475 11.6678 1.80395 11.2961 1.20151 11.1651C1.01283 11.1261 0.827468 11.1191 0.645412 11.1899C0.486527 11.2536 0.456736 11.3598 0.55935 11.505C0.632172 11.6112 0.724855 11.6961 0.830778 11.7634C1.4266 12.1529 1.80064 12.7335 2.06214 13.3991C2.46597 14.4223 3.20743 14.9002 4.20377 14.9852C4.65395 15.0241 5.10412 14.9746 5.5543 14.8648C5.5543 15.5304 5.54437 16.2668 5.54437 16.9218C5.54437 16.9218 5.57416 18.9894 8.11963 18.9894C10.6651 18.9894 10.7346 16.9218 10.7346 16.9218V16.9289Z"
                    fill="#F8F8F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_219_122">
                    <rect
                      x="0.5"
                      y="0.25"
                      width="14.25"
                      height="18.75"
                      rx="2"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              className="p-2.5 bg-custom-primary text-white rounded-md leading-4 hover:bg-custom-hover  w-12 h-12 flex justify-center items-center"
              href="https://www.linkedin.com/in/ahmet-can-do%C4%9Fan-90829587/"
              target="_blank"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.15946 1.98844C3.15946 2.4418 3.02671 2.81555 2.81088 3.06748C2.60329 3.30979 2.28816 3.47688 1.82973 3.47688C1.04638 3.47688 0.5 2.84591 0.5 2.08786C0.5 1.1798 1.09063 0.5 1.82973 0.5C2.59747 0.5 3.15946 1.11371 3.15946 1.98844Z"
                  fill="#F8F8F8"
                  stroke="#F8F8F8"
                />
                <path
                  d="M3.15946 6.79314V16.0477C3.15946 16.7807 2.5652 17.375 1.83214 17.375C1.09908 17.375 0.504818 16.7807 0.504818 16.0477V6.79314C0.504818 6.06008 1.09908 5.46582 1.83214 5.46582C2.5652 5.46582 3.15946 6.06008 3.15946 6.79314Z"
                  fill="#F8F8F8"
                  stroke="#F8F8F8"
                />
                <path
                  d="M8.76536 9.64907L8.7582 9.66723L8.75248 9.68588C8.63876 10.0566 8.63888 10.4216 8.639 10.7903C8.63901 10.8024 8.63901 10.8146 8.63901 10.8267V16.0479C8.63901 16.781 8.04475 17.3752 7.31169 17.3752C6.57863 17.3752 5.98437 16.781 5.98437 16.0479V9.3354C5.98437 8.55877 5.95987 7.83796 5.93637 7.17769C5.91264 6.51094 6.445 5.96317 7.12598 5.96317H7.83155C8.05981 5.96317 8.2514 6.13514 8.27597 6.36207L8.36147 7.15185C8.39235 7.43714 8.63322 7.65334 8.92018 7.65334C9.11815 7.65334 9.30302 7.54929 9.4048 7.37625C9.81666 6.67607 10.7656 5.66619 12.4245 5.6649C12.4476 5.66488 12.4707 5.66328 12.4936 5.66012C13.4763 5.67474 14.3105 6.0434 14.9124 6.78134C15.5356 7.54551 15.9531 8.75984 15.9531 10.5232V16.0427C15.9531 16.7757 15.3588 17.37 14.6258 17.37C13.8927 17.37 13.2985 16.7757 13.2985 16.0427V11.0203C13.2985 10.1826 13.1555 9.38514 12.7929 8.77957C12.4122 8.14395 11.7981 7.74175 10.9687 7.74175C10.2931 7.74175 9.79863 8.05095 9.45043 8.44512C9.11565 8.8241 8.90698 9.28996 8.76536 9.64907Z"
                  fill="#F8F8F8"
                  stroke="#F8F8F8"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
