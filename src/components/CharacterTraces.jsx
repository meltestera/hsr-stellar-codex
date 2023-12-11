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
      <div className="traces flex flex-col gap-y-5 space-y-5 p-2">
        <div className="w-full space-y-6 p-2 text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">Traces</b>
          <hr className="mx-auto w-[60%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterTracesDesc.map((desc, index) => (
          <div
            className="space-y-3 sm:flex sm:flex-row sm:items-center sm:gap-x-12"
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
            <div className="w-full space-y-1 text-justify text-inherit">
              <div>
                <b className="font poppins text-sm sm:text-lg">
                  {characterTracesTitle[index]}
                </b>
                <p className="font-outfit text-sm font-light sm:text-base sm:tracking-wide md:text-lg md:font-normal">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex w-full flex-row justify-around">
          {characterTracesAttr.map((attr, index) => (
            <div className="flex flex-col justify-center space-y-1" key={index}>
              <div className="flex flex-col items-center justify-center">
                <img
                  loading="lazy"
                  decoding="async"
                  height={35}
                  width={35}
                  className="h-auto object-cover object-center"
                  src={characterImageTracesMinor[index]}
                  alt={characterAltTracesMinor[index]}
                />
              </div>
              <div className="p-1 text-center text-inherit">
                <b className="font-poppins text-sm sm:text-lg">{attr}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterTraces;
