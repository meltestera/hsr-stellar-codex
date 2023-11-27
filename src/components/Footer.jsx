import ScLogo from "../assets/Logo_Stellar_Codex.webp";
import HsrLogo from "../assets/Logo_Honkai_Star_Rail.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-almost-black flex w-full items-center justify-center">
        <div className="flex w-full flex-col px-4 text-white md:w-2/3">
          <div className="w-full text-5xl">
            <b>about Stellar Codex</b>
          </div>
          <div className="mt-8">
            <p className="text-skin-tone-light/60 w-full md:w-2/3">
              This wiki provides a comprehensive overview of characters,
              focusing on character index, light cones, and building strategies.
              We aim to guide readers on optimizing their favorite characters
              through effective builds. This wiki's context delves into the game
              mechanics, character attributes, and offers practical advice on
              maximizing the potential of each character.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mb-12 mt-24 flex flex-row space-x-3">
              <div className="h-auto max-w-fit">
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
            <p className="text-skin-tone-light/40 my-12 w-full text-center">
              Copyright © 2023 meltestera
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
