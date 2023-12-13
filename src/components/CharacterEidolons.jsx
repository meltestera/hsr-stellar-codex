const CharacterEidolons = ({
  characterImageEidolons,
  characterAltEidolons,
  characterEidolonsTitle,
  characterEidolonsDesc,
}) => {
  return (
    <>
      <div className="eidolons mt-10 flex flex-col gap-y-3">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">Eidolons</b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterEidolonsDesc.map((desc, index) => (
          <div
            className="mx-auto mt-8 w-full text-center md:mt-16 md:w-[85%] xl:mt-[100px]"
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
                className="mx-auto h-auto object-cover object-center sm:min-w-[200px] xl:min-w-[300px]"
              />
            </div>
            <div className="mt-6 w-full text-center text-inherit md:mt-16">
              <b className="w-full text-center font-poppins text-sm font-bold sm:text-lg">
                {characterEidolonsTitle[index]}
              </b>
              <p className="font-outfit text-sm sm:text-base sm:tracking-wide md:text-lg">
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
