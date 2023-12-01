import HeroImg from "../assets/Hero_Astral_Express.webp";

const Hero = () => {
  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center text-center lg:items-start">
        <div className="absolute h-full w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-b after:from-almost-black/40 after:via-almost-black/80 after:to-almost-black/95 after:content-[''] lg:after:from-almost-black/20 lg:after:via-almost-black/60 lg:after:to-almost-black">
          <img
            src={HeroImg}
            alt="Hero_Astral_Express"
            width="2048"
            height="1024"
            fetchpriority="high"
            className="absolute min-h-full min-w-full object-cover object-[70%_center] sm:object-center"
          />
        </div>
        <div className="relative z-10 mb-32 max-w-sm cursor-default space-y-1 lg:max-w-fit lg:pl-24">
          <b className="font-syne bg-gradient-to-b from-skin-tone to-skin-tone-light bg-clip-text text-5xl text-transparent lg:text-7xl">
            Stellar Codex
          </b>
          <span className="font-inter block text-center text-lg tracking-wide text-skin-tone/90 lg:pl-1 lg:text-left lg:text-xl">
            yet another Honkai: Star Rail wiki...
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
