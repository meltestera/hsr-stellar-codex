const CharacterAbility = ({
  characterAbilityTree,
  characterAbilityTitle,
  characterAbilityDesc,
  characterImageAbility,
  characterAltAbilities,
}) => {
  return (
    <>
      <div className="abilities flex flex-col gap-y-3">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Abilities
          </b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterAbilityDesc.map((desc, index) => (
          <div
            className="mx-auto mt-8 sm:flex sm:flex-row sm:items-center sm:gap-x-12 md:mt-[100px] md:w-[85%] xl:mt-44"
            key={index}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={characterImageAbility[index]}
                alt={characterAltAbilities[index]}
                loading="lazy"
                decoding="async"
                height={75}
                width={75}
                className="h-auto object-cover object-center"
              />
            </div>
            <div className="mt-6 w-full text-justify text-inherit sm:mt-0">
              <div className="flex flex-row items-end justify-between">
                <b className="inline-block max-w-[250px] text-left font-poppins text-sm sm:max-w-fit sm:text-lg">
                  {characterAbilityTitle[index]}
                </b>
                <b className="inline-block font-poppins text-sm sm:text-lg">
                  {characterAbilityTree[index]}
                </b>
              </div>
              <p className="mt-3 font-outfit text-sm sm:text-lg sm:tracking-wide">
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
