import { Link } from "react-router-dom";

// import images
import ScLogo from "../assets/Logo_Stellar_Codex.webp";
import HsrLogo from "../assets/Logo_Honkai_Star_Rail.webp";
import HoyoLogo from "../assets/Logo_Hoyoverse.webp";

// import components
const Footer = () => {
  return (
    <>
      <div className="w-full border-t border-t-skin-tone-darker bg-almost-black">
        <div className="mx-auto mt-10 flex w-full flex-col gap-y-1 space-y-10 px-4 py-2 text-skin-tone-light md:mt-20 md:w-3/4 md:space-y-12 xl:mt-32 xl:space-y-20">
          <div className="flex flex-row items-center gap-x-1">
            <span className="text-2xl md:text-4xl">
              <b className="font-poppins">About</b>
            </span>
            <div className="pl-4">
              <img
                src={ScLogo}
                alt="Logo_Stellar_Codex"
                loading="lazy"
                height="150"
                width="150"
                className="h-auto w-[75px] object-cover object-center md:w-[100px]"
              />
            </div>
          </div>
          <div className="w-full text-justify text-base md:text-lg xl:text-xl">
            <p className="font-outfit font-light">
              This mini-wiki provides a comprehensive overview of characters,
              focusing on character index, light cones, and building strategies.
              We aim to guide readers on optimizing their favorite characters
              through effective builds. This wiki's context delves into the game
              mechanics, character attributes, and offers practical advice on
              maximizing the potential of each character.
            </p>
          </div>
          <div className="flex flex-row items-center justify-around gap-x-1">
            <div className="flex w-fit flex-col items-center justify-center p-1">
              <Link
                to="https://hsr.hoyoverse.com/en-us/home?utm_source=hsrofficialweb&utm_medium=fab&utm_campaign=button"
                target="_blank"
              >
                <img
                  src={HsrLogo}
                  alt="Logo_Honkai_Star_Rail"
                  loading="lazy"
                  height="150"
                  width="150"
                  className="h-auto object-cover object-center md:w-[180px] xl:w-[260px]"
                />
              </Link>
            </div>
            <div className="flex w-fit flex-col items-center justify-center p-1">
              <Link to="https://www.hoyoverse.com/en-us" target="_blank">
                <img
                  src={HoyoLogo}
                  alt="Logo_Hoyoverse"
                  loading="lazy"
                  height="150"
                  width="150"
                  className="h-auto object-cover object-center md:w-[180px] xl:w-[260px]"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 space-y-10 md:w-[85%] lg:mt-20">
          <hr className="border border-skin-tone-darker" />
          <div className="flex flex-row items-center justify-center gap-x-1 pb-6 text-center font-poppins text-sm text-skin-tone-light/20 lg:text-lg">
            <span>Made with ♥ © 2023 meltestera</span>
            <div className="mb-2 inline pl-1">
              <Link
                to="https://github.com/meltestera/hsr-stellar-codex"
                target="_blank"
              >
                <svg
                  className="h-auto w-[30px] object-cover object-center pl-1"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
