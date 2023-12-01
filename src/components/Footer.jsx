// import images
import ScLogo from "../assets/Logo_Stellar_Codex.webp";
import HsrLogo from "../assets/Logo_Honkai_Star_Rail.webp";

// import components
import About from "./About";

const Footer = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-almost-black">
        <div className="flex w-full flex-col px-6 text-white md:w-4/5">
          <About />
          <div className="flex flex-col">
            <div className="mb-12 mt-24 flex flex-row space-x-3">
              <div className="h-auto max-w-fit md:pl-28">
                <img
                  src={HsrLogo}
                  alt="Logo_Honkai_Star_Rail"
                  loading="lazy"
                  type="image/webp"
                  height="150px"
                  width="150px"
                  className="object-cover object-center"
                />
              </div>
              <div className="h-auto max-w-fit px-4">
                <img
                  src={ScLogo}
                  alt="Logo_Stellar_Codex"
                  loading="lazy"
                  type="image/webp"
                  height="100px"
                  width="100px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <hr className="border-skin-tone-dark" />
            <p className="my-12 w-full text-center text-skin-tone-dark">
              Copyright © 2023 meltestera
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
