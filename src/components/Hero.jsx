import HeroImg from "../assets/Hero_Astral_Express.webp";

const Hero = () => {
  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="absolute h-full w-full overflow-hidden after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:bg-almost-black/60 after:content-['']">
          <img
            src={HeroImg}
            alt="Hero_Astral_Express"
            width="2048"
            height="1024"
            type="image/webp"
            fetchpriority="high"
            className="absolute min-h-full min-w-full object-cover object-[70%_center] sm:object-center"
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
