const CharacterInfo = ({ category, image, alt }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src={image}
          alt={alt}
          width={30}
          height={30}
          fetchpriority="high"
          className="h-auto object-cover object-center md:w-[35px] xl:w-[40px]"
        />
      </div>
      <span className="pl-2 font-outfit font-bold tracking-wide">
        {category}
      </span>
    </div>
  );
};

const CharacterProfile = ({
  characterName,
  characterType,
  characterPath,
  characterIntro,
  characterImageSplash,
  characterImageType,
  characterImagePath,
  characterAltSplash,
  characterAltType,
  characterAltPath,
}) => {
  return (
    <div className="profile mt-16 flex flex-col gap-y-3">
      <span className="text-center font-poppins text-2xl font-bold md:text-3xl xl:text-4xl">
        {characterName}
      </span>
      <div className="mt-2 w-full text-sm md:mt-4 md:text-base xl:mt-5 xl:text-lg">
        <div className="flex flex-row items-center justify-center gap-x-8">
          <CharacterInfo
            category={characterType}
            image={characterImageType}
            alt={characterAltType}
          />
          <CharacterInfo
            category={characterPath}
            image={characterImagePath}
            alt={characterAltPath}
          />
        </div>
      </div>
      <div className="my-16 flex flex-col items-center justify-center">
        <div className="mx-auto">
          <img
            type="image/webp"
            src={characterImageSplash}
            alt={characterAltSplash}
            width={400}
            height={400}
            fetchpriority="high"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <b className="font-poppins text-lg uppercase md:text-2xl">
          Introduction
        </b>
        <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        <p className="mx-auto mt-8 w-fit font-outfit text-sm md:mt-[100px] md:w-[85%] md:text-lg xl:mt-44 xl:text-xl">
          {characterIntro}
        </p>
      </div>
    </div>
  );
};

export default CharacterProfile;
