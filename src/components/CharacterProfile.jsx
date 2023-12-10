const CharacterProfile = ({
  characterName,
  characterType,
  characterPath,
  characterIntro,
  characterImagePortrait,
  characterImageSplash,
  characterImageType,
  characterImagePath,
  characterAltPortrait,
  characterAltSplash,
  characterAltType,
  characterAltPath,
}) => {
  return (
    <>
      <div className="profile flex flex-col gap-y-3 text-skin-tone-light">
        <div className="mx-auto max-w-xs space-y-2 text-center md:max-w-xl md:space-y-3 xl:space-y-5">
          <span className="font-poppins text-2xl font-bold md:text-3xl xl:text-4xl">
            {characterName}
          </span>
          <div className="w-full">
            <div className="flex flex-row items-center justify-center gap-x-3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={characterImageType}
                  alt={characterAltType}
                  width={30}
                  height={30}
                  fetchpriority="high"
                  role="presentation"
                  className="h-auto object-cover object-center md:w-[35px] xl:w-[40px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={characterImagePath}
                  alt={characterAltPath}
                  width={30}
                  height={30}
                  fetchpriority="high"
                  role="presentation"
                  className="h-auto object-cover object-center md:w-[35px] xl:w-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-16">
          <div className="h-[300px] overflow-hidden sm:h-[450px] md:h-[600px] lg:h-[700px] xl:h-[1000px]">
            <img
              type="image/webp"
              src={characterImageSplash}
              alt={characterAltSplash}
              width={180}
              height={180}
              fetchpriority="high"
              role="presentation"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full space-y-6 p-2 text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Introduction
          </b>
          <hr className="mx-auto w-[60%] border border-skin-tone-dark lg:w-[35%]" />
          <p className="mx-auto w-fit font-outfit text-sm font-light md:text-justify md:text-lg md:font-normal">
            {characterIntro}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterProfile;
