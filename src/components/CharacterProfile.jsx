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
      <div className="profile flex flex-col gap-y-3">
        <div className="mx-auto max-w-[256px] space-y-2 text-center xs:max-w-screen-sm md:max-w-xl md:space-y-3 xl:space-y-5">
          <span className="font-poppins text-2xl font-bold md:text-3xl xl:text-4xl">
            {characterName}
          </span>
          <div className="w-full text-sm md:text-base xl:text-lg">
            <div className="flex flex-row items-center justify-center gap-x-8">
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={characterImageType}
                    alt={characterAltType}
                    width={30}
                    height={30}
                    fetchpriority="high"
                    className="h-auto object-cover object-center md:w-[35px] xl:w-[40px]"
                  />
                </div>
                <span className="pl-2 font-outfit font-bold tracking-wide">
                  {characterType}
                </span>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={characterImagePath}
                    alt={characterAltPath}
                    width={30}
                    height={30}
                    fetchpriority="high"
                    className="h-auto object-cover object-center md:w-[35px] xl:w-[40px]"
                  />
                </div>
                <span className="pl-2 font-outfit font-bold tracking-wide">
                  {characterPath}
                </span>
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
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Introduction
          </b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
          <p className="mx-auto mt-8 w-fit font-outfit text-sm md:mt-[100px] md:w-[85%] md:text-lg xl:mt-44">
            {characterIntro}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterProfile;
