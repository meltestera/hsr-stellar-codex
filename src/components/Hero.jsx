import HeroImg from "../assets/Hero_Astral_Express.webp";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative flex min-h-[100dvh] flex-col items-center justify-center text-center lg:items-start">
        <div className="absolute h-full w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-b after:from-almost-black/40 after:via-almost-black/90 after:to-almost-black/40 after:content-[''] lg:after:bg-gradient-to-l lg:after:from-almost-black/5 lg:after:via-almost-black/40 lg:after:to-almost-black">
          <img
            src={HeroImg}
            alt="Hero_Astral_Express"
            width="2048"
            height="1024"
            fetchpriority="high"
            className="absolute min-h-full min-w-full object-cover object-[70%_center] lg:object-center"
          />
        </div>
        <div className="relative z-10 mb-20 max-w-sm cursor-default sm:mb-24 lg:flex lg:max-w-fit lg:flex-col lg:justify-start lg:pl-24">
          <b className="bg-gradient-to-r from-skin-tone-dark via-skin-tone to-skin-tone-light bg-clip-text font-oswald text-5xl uppercase text-skin-tone-light text-transparent sm:text-6xl xl:text-8xl">
            Stellar Codex
          </b>
          <p className="mt-2 font-ephesis text-2xl text-skin-tone-light/80 sm:text-3xl md:tracking-wide lg:mt-4 lg:text-left xl:text-4xl xl:text-skin-tone-light/60">
            yet another Honkai: Star Rail wiki...
          </p>
          <button className="mt-4 w-44 rounded-md bg-gradient-to-tr from-transparent via-skin-tone to-transparent px-6 py-2 text-skin-tone-darker shadow shadow-almost-black backdrop-blur-lg transition-all duration-700 hover:-translate-y-2 hover:from-transparent hover:via-skin-tone-dark hover:to-transparent hover:text-skin-tone-light hover:shadow-skin-tone-light active:scale-90 md:w-64 lg:mt-6 lg:w-72 xl:w-[436px]">
            <Link to="/characters" className="inline-block w-full">
              <span className="font-outfit text-lg font-bold uppercase tracking-wide md:text-xl xl:text-2xl">
                Characters
              </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
