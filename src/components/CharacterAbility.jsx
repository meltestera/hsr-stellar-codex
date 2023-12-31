import TextHighlighter from "./TextHighlighter";

const CharacterAbility = ({
  characterAbilityTree,
  characterAbilityTitle,
  characterAbilityDesc,
  characterImageAbility,
  characterAltAbilities,
}) => {
  const renderAbilities = (desc, idx) => (
    <div
      className="mx-auto mt-8 w-full sm:flex sm:flex-row sm:items-center sm:gap-x-12 md:mt-[100px] md:w-[85%] xl:mt-44"
      key={idx}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={characterImageAbility[idx]}
          alt={characterAltAbilities[idx]}
          loading="lazy"
          decoding="async"
          height={75}
          width={75}
          className="h-auto object-cover object-center"
        />
      </div>
      <div className="mt-6 w-full text-justify text-inherit sm:mt-0">
        <div className="flex flex-row items-end justify-between">
          <b className="inline-block max-w-[250px] text-left font-poppins text-sm sm:max-w-fit sm:text-lg xl:text-xl">
            {characterAbilityTitle[idx]}
          </b>
          <b className="inline-block font-poppins text-sm sm:text-lg xl:text-xl">
            {characterAbilityTree[idx]}
          </b>
        </div>
        <p className="mt-3 font-outfit text-sm sm:text-lg sm:tracking-wide xl:text-xl">
          <TextHighlighter text={desc} />
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="abilities mt-10 flex flex-col gap-y-3 md:mt-28 lg:mt-36 xl:mt-48">
        <div className="w-full text-center">
          <b className="font-poppins text-lg uppercase md:text-2xl">
            Abilities
          </b>
          <hr className="mx-auto mt-4 w-[55%] border border-skin-tone-dark lg:w-[35%]" />
        </div>
        {characterAbilityDesc.map(renderAbilities)}
      </div>
    </>
  );
};

export default CharacterAbility;
