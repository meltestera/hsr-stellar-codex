import TextHighlighter from "./TextHighlighter";

const CharacterTraces = ({
  characterTracesTitle,
  characterTracesDesc,
  characterTracesAttr,
  characterImageTraces,
  characterImageTracesMinor,
  characterAltTraces,
  characterAltTracesMinor,
}) => {
  return (
    <>
      <div className="traces mt-16 flex flex-col gap-y-3 md:mt-28 lg:mt-36 xl:mt-48">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">Traces</b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterTracesDesc.map((desc, index) => (
          <div
            className="mx-auto mt-8 w-full text-center sm:flex-row sm:items-center sm:gap-x-12 sm:text-left md:mt-16 md:w-[85%]"
            key={index}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                loading="lazy"
                decoding="async"
                height={75}
                width={75}
                className="h-auto object-cover object-center"
                src={characterImageTraces[index]}
                alt={characterAltTraces[index]}
              />
            </div>
            <div className="mt-6 w-full text-center text-inherit">
              <b className="font poppins sm:text-xl xl:text-xl">
                {characterTracesTitle[index]}
              </b>
              <p className="mt-3 font-outfit text-sm sm:text-lg sm:tracking-wide xl:text-xl">
                <TextHighlighter text={desc} />
              </p>
            </div>
          </div>
        ))}
        <div className="mt-10 w-full text-center md:mt-[100px]">
          <div>
            <b className="font-poppins text-lg uppercase md:text-2xl">
              Traces: Attributes
            </b>
            <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
          </div>
          <div className="mt-8 space-y-6 sm:flex sm:flex-row sm:items-start sm:justify-around sm:space-y-0 md:mx-auto md:mt-28 md:w-[85%] xl:mt-44">
            {characterTracesAttr.map((attr, index) => (
              <div className="w-full" key={index}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    loading="lazy"
                    decoding="async"
                    height={35}
                    width={35}
                    className="h-auto object-cover object-center xl:w-[45px]"
                    src={characterImageTracesMinor[index]}
                    alt={characterAltTracesMinor[index]}
                  />
                </div>
                <div className="mt-4 w-full text-center text-inherit">
                  <b className="font-poppins text-sm sm:text-lg xl:text-xl">
                    <TextHighlighter text={attr} />
                  </b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterTraces;
