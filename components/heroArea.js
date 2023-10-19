import Image from "next/image";
export default function HeroArea() {
  return (
    <div className=" py-24 bg-custom-light flex justify-center bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className=" container flex items-center justify-center flex-col md:flex-row">
        <Image src="/images/ahmet-can-dogan.png" width={266} height={316} />
        <div className="md:pl-16 max-w-sm pt-10 md:pt-0 text-center md:text-left">
          <p className="font-display pb-1 text-3xl">Hello</p>
          <h1 className="text-2xl pb-4 font-bold ">
            I’m a Front-End Developer based in Türkiye.
          </h1>
          <p className="pb-4">
            My name is Ahmet Can Doğan. I specialize in building the frontend of
            websites and web applications, ensuring they contribute to the
            overall success of the product.
          </p>
          <button className="p-2.5 bg-custom-primary text-white rounded-md leading-4 hover:bg-custom-hover">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
}
