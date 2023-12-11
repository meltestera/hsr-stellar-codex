const CharacterEidolons = ({
  characterImageEidolons,
  characterAltEidolons,
  characterEidolonsTitle,
  characterEidolonsDesc,
}) => {
  return (
    <>
      <div className="eidolons flex flex-col gap-y-5 space-y-5 p-2">
        <div className="w-full space-y-6 p-2 text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl xl:text-5xl">
            Eidolons
          </b>
          <hr className="mx-auto w-[60%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterEidolonsDesc.map((desc, index) => (
          <div
            className="space-y-3 p-2 sm:flex sm:flex-col sm:gap-y-6"
            key={index}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={characterImageEidolons[index]}
                alt={characterAltEidolons[index]}
                height={150}
                width={150}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto object-cover object-center sm:min-w-[200px] xl:min-w-[450px]"
              />
            </div>
            <div className="w-full space-y-3 text-center text-inherit">
              <b className="w-full text-center font-poppins text-sm font-bold sm:text-lg xl:text-3xl">
                {characterEidolonsTitle[index]}
              </b>
              <p className="font-outfit text-sm font-light sm:text-base sm:tracking-wide md:text-lg md:font-normal xl:text-2xl">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterEidolons;
