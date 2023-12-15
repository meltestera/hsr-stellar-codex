import TextHighlighter from "./TextHighlighter";

const CharacterEidolons = ({
  characterImageEidolons,
  characterAltEidolons,
  characterEidolonsTitle,
  characterEidolonsDesc,
  style,
}) => {
  const renderEidolons = (desc, idx) => (
    <div
      className="mx-auto mt-8 w-full text-center md:mt-16 md:w-[85%] xl:mt-[100px]"
      key={idx}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={characterImageEidolons[idx]}
          alt={characterAltEidolons[idx]}
          height={150}
          width={150}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto object-cover object-center sm:min-w-[200px] xl:min-w-[300px]"
        />
      </div>
      <div className="mt-6 w-full text-center text-inherit md:mt-16">
        <b className="w-full text-center font-poppins text-sm font-bold sm:text-lg">
          {characterEidolonsTitle[idx]}
        </b>
        <p className="mt-3 font-outfit text-sm sm:text-base sm:tracking-wide md:text-lg">
          <TextHighlighter text={desc} />
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="eidolons mt-10 flex flex-col gap-y-3 md:mt-28 lg:mt-36 xl:mt-48"
        style={style}
      >
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">Eidolons</b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterEidolonsDesc.map(renderEidolons)}
      </div>
    </>
  );
};

export default CharacterEidolons;
