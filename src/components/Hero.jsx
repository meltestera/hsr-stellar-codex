import HeroImg from "../assets/Hero_Astral_Express.webp";

const Hero = () => {
  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="after:bg-almost-black/60 absolute h-full w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:content-['']">
          <img
            src={HeroImg}
            alt="Hero_Astral_Express"
            width="436px"
            height="932px"
            loading="lazy"
            type="image/webp"
            className="absolute min-h-full min-w-full object-cover object-center"
          />
        </div>
        <div className="z-10 max-w-xs space-y-2">
          <b className="text-5xl">Stellar Codex</b>
          <p className="text-justify text-lg">
            just another Honkai: Star Rail wiki
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
