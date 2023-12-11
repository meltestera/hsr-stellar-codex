const CharacterTraces = ({
  characterTracesTitle,
  characterTracesDesc,
  characterImageTraces,
  characterAltTraces,
}) => {
  return (
    <>
      <div className="traces flex flex-col gap-y-5 space-y-5 p-2">
        <div className="w-full space-y-6 p-2 text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">Traces</b>
          <hr className="mx-auto w-[60%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterTracesDesc.map((trace, index) => (
          <div
            className="space-y-3 sm:flex sm:flex-row sm:items-center sm:gap-x-12"
            key={index}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={characterImageTraces[index]}
                alt={characterAltTraces[index]}
                loading="lazy"
                decoding="async"
                height={75}
                width={75}
                className="h-auto object-cover object-center"
              />
            </div>
            <div className="w-full space-y-1 text-justify text-inherit">
              <div className="space-between flex flex-row items-center">
                <b className="inline-block font-poppins text-sm sm:text-lg">
                  {characterTracesTitle[index]}
                </b>
              </div>
              <div>
                <p className="font-outfit text-sm font-light sm:text-base sm:tracking-wide md:text-lg md:font-normal">
                  {trace}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterTraces;
