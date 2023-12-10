const CharacterAbility = ({
  characterAbilityTree,
  characterAbilityTitle,
  characterAbilityDesc,
  characterImageAbility,
  characterAltAbilities,
}) => {
  return (
    <>
      <div className="abilities flex flex-col gap-y-5 space-y-5 p-2">
        <div className="w-full space-y-6 p-2 text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Abilities
          </b>
          <hr className="mx-auto w-[60%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterAbilityDesc.map((desc, index) => (
          <div
            className="space-y-3 sm:flex sm:flex-row sm:items-center sm:gap-x-12"
            key={index}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={characterImageAbility[index]}
                alt={characterAltAbilities[index]}
                fetchpriority="high"
                height={75}
                width={75}
                className="h-auto object-cover object-center"
              />
            </div>
            <div className="w-full space-y-1 text-justify text-inherit">
              <div className="flex flex-row items-center justify-between">
                <b className="inline-block font-poppins text-sm sm:text-lg">
                  {characterAbilityTitle[index]}
                </b>
                <b className="inline-block font-poppins text-sm sm:text-lg">
                  {characterAbilityTree[index]}
                </b>
              </div>
              <p className="font-outfit text-sm font-light sm:text-base sm:tracking-wide md:text-lg md:font-normal">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterAbility;
