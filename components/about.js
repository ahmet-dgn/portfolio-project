import Image from "next/image";

export default function About() {
  return (
    <div className="py-24 " id="about">
      <div className="container mx-auto flex justify-center flex-col">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h4 font-bold text-custom-dark border-2 rounded-md leading-5 border-custom-dark p-2.5 mb-6 inline-block">
            ABOUT ME
          </h2>
          <p className="mb-6 ">
            I am 31 years old and married. I have one daughter, and I live in
            Samsun - Türkiye. I graduated from Istanbul Ticaret University with
            a degree in Media and Communication. I work as a front-end
            developer. I began my career as a graphic designer and commercial
            photographer. Over the years, I have gained experience in marketing,
            customer relations, project management, and front-end development.{" "}
          </p>
          <p className="mb-6 ">
            I have a good knowledge of HTML, CSS, and JavaScript. Additionally,
            I have the skills to create UI/UX designs using Figma or Adobe XD,
            and I can faithfully convert designs into HTML and CSS with
            pixel-perfect precision. I have a solid understanding of React and
            Next.js. I am continuously learning and improving my knowledge of
            React and Next.js.
          </p>
          <div className="mx-auto">
            <h3 className="font-display text-display text-custom-dark mb-6">
              My Skills
            </h3>
            <div className="max-w-md mx-auto flex justify-center flex-wrap">
              <Image
                src="/images/html-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="HTML"
                title="HTML"
              />
              <Image
                src="/images/css-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="CSS"
                title="CSS"
              />
              <Image
                src="/images/bootstrap-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Bootstrap"
                title="Bootstrap"
              />
              <Image
                src="/images/tailwind-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Tailwind"
                title="Tailwind"
              />
              <Image
                src="/images/javascript-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Javascript"
                title="Javascript"
              />
              <Image
                src="/images/react-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="React.js"
                title="React.js"
              />
              <Image
                src="/images/next-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Next.js"
                title="Next.js"
              />
              <Image
                src="/images/git-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Git"
                title="Git"
              />
              <Image
                src="/images/figma-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Figma"
                title="Figma "
              />
              <Image
                src="/images/xd-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Adobe XD"
                title="Adobe XD"
              />
              <Image
                src="/images/ps-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Adobe Photoshop"
                title="Adobe Photoshop"
              />
              <Image
                src="/images/ai-logo.svg"
                width={60}
                height={60}
                className="mx-1.5 mb-3"
                alt="Adobe Illustrator"
                title="Adobe Illustrator"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
