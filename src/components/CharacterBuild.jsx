import { useState } from "react";

import TextHighlighter from "../components/TextHighlighter";

const CharacterBuild = ({
  characterRelicsTitle,
  characterRelicsDesc,
  characterOrnamentsTitle,
  characterOrnamentsDesc,
  characterConesTitle,
  characterConesDesc,
  characterImageRelics,
  characterImageOrnaments,
  characterImageCones,
  characterAltRelics,
  characterAltOrnaments,
  characterAltCones,
}) => {
  const [builds, setBuilds] = useState({
    relics: Array(characterRelicsDesc.length).fill(false),
    ornaments: Array(characterOrnamentsDesc.length).fill(false),
    cones: Array(characterConesDesc.length).fill(false),
  });

  const handleState = (section, sectionIdx) => {
    setBuilds((prevBuilds) => {
      return {
        ...prevBuilds,
        [section]: prevBuilds[section].map((value, idx) =>
          idx === sectionIdx ? !value : value,
        ),
      };
    });
  };

  const AccordionToggle = ({ isActive, onClick }) => {
    return (
      <button type="button" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-${isActive ? "minus" : "plus"}`}
        >
          {isActive ? (
            <path d="M5 12h14" />
          ) : (
            <>
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </>
          )}
        </svg>
      </button>
    );
  };

  return (
    <div>
      <div className="relics mt-10 md:mt-28 lg:mt-36 xl:mt-48">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Builds: Recommended Relics
          </b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        <div className="mx-auto mt-8 w-full md:w-[55%] lg:w-[75%]">
          <div className="flex flex-col items-center gap-y-3">
            {characterRelicsDesc.map((desc, idx) => (
              <div key={idx} className="w-full p-3 md:mt-6">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={characterImageRelics[idx]}
                    alt={characterAltRelics[idx]}
                    className="h-auto object-cover object-center md:w-[100px] lg:w-[150px]"
                    height={75}
                    width={75}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 w-full text-center text-inherit lg:mt-12">
                  <div className="rounded bg-skin-tone-darker px-4 py-6">
                    <div className="flex items-center justify-between">
                      <b className="font-poppins text-sm sm:text-lg md:text-xl">
                        {characterRelicsTitle[idx]}
                      </b>
                      <span>
                        <AccordionToggle
                          isActive={builds.relics[idx]}
                          onClick={() => handleState("relics", idx)}
                        />
                      </span>
                    </div>
                    <div
                      className="mt-3 border-t border-t-skin-tone-light/30"
                      style={{
                        maxHeight: builds.relics[idx] ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease",
                      }}
                    >
                      {Object.entries(desc).map(([key, value]) => (
                        <div
                          key={key}
                          className="mt-3 block w-full text-center md:mt-6"
                        >
                          <b className="font-outfit text-sm sm:text-base sm:tracking-wide md:text-lg">
                            {key}
                          </b>
                          <p className="mt-1 font-outfit text-sm font-light sm:text-base md:text-lg lg:text-xl">
                            <TextHighlighter text={value} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ornaments mt-10 md:mt-28 lg:mt-36 xl:mt-48">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Builds: Recommended Planar Ornaments
          </b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        <div className="mx-auto mt-8 w-full md:w-[55%] lg:w-[75%]">
          <div className="flex flex-col items-center gap-y-3">
            {characterOrnamentsDesc.map((desc, idx) => (
              <div key={idx} className="w-full p-3 md:mt-6">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={characterImageOrnaments[idx]}
                    alt={characterAltOrnaments[idx]}
                    className="h-auto object-cover object-center md:w-[100px] lg:w-[150px]"
                    height={75}
                    width={75}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 w-full text-center text-inherit lg:mt-12">
                  <div className="rounded bg-skin-tone-darker px-4 py-6">
                    <div className="flex items-center justify-between">
                      <b className="font-poppins text-sm sm:text-lg md:text-xl">
                        {characterOrnamentsTitle[idx]}
                      </b>
                      <span>
                        <AccordionToggle
                          isActive={builds.ornaments[idx]}
                          onClick={() => handleState("ornaments", idx)}
                        />
                      </span>
                    </div>
                    <div
                      className="mt-3 border-t border-t-skin-tone-light/30"
                      style={{
                        maxHeight: builds.ornaments[idx] ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease",
                      }}
                    >
                      {Object.entries(desc).map(([key, value]) => (
                        <div
                          key={key}
                          className="mt-3 block w-full text-center md:mt-6"
                        >
                          <b className="font-outfit text-sm sm:text-base sm:tracking-wide md:text-lg">
                            {key}
                          </b>
                          <p className="mt-1 font-outfit text-sm font-light sm:text-base md:text-lg lg:text-xl">
                            <TextHighlighter text={value} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cones mt-10 md:mt-28 lg:mt-36 xl:mt-48">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Builds: Recommended Light Cones
          </b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        <div className="mx-auto mt-8 w-full md:w-[55%] lg:w-[75%]">
          <div className="flex flex-col items-center gap-y-3 md:gap-y-12 lg:gap-y-28 xl:gap-y-48">
            {characterConesDesc.map((desc, idx) => (
              <div key={idx} className="w-full p-3 md:mt-6">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={characterImageCones[idx]}
                    alt={characterAltCones[idx]}
                    className="h-auto object-cover object-center md:w-[200px] lg:w-[300px] xl:w-[400px]"
                    height={150}
                    width={150}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 w-full text-center text-inherit lg:mt-12">
                  <div className="rounded bg-skin-tone-darker px-4 py-6">
                    <div className="flex items-center justify-between">
                      <b className="font-poppins text-sm sm:text-lg md:text-xl">
                        {characterConesTitle[idx]}
                      </b>
                      <span>
                        <AccordionToggle
                          isActive={builds.cones[idx]}
                          onClick={() => handleState("cones", idx)}
                        />
                      </span>
                    </div>
                    <div
                      className="mt-3 border-t border-t-skin-tone-light/30"
                      style={{
                        maxHeight: builds.cones[idx] ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease",
                      }}
                    >
                      <div className="mt-3 block w-full text-center md:mt-6">
                        <div className="font-outfit text-sm font-light sm:text-base md:text-lg lg:text-xl">
                          <TextHighlighter text={desc} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterBuild;
