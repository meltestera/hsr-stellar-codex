// import character list
import { characters } from "../assets/characters/characters";

// import components
import CharacterCard from "../components/CharacterCard";
import CharacterFilterBar from "../components/CharacterFilterBar";

const Root = () => {
  const sortedCharacters = characters.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <>
      <div className="relative flex flex-col">
        <div className="h-full max-w-full bg-[url('/src/assets/Background_Stars.webp')] bg-cover bg-[35%_center] bg-no-repeat py-40">
          <div className="via-skin-tone-darker/5 absolute inset-0 bg-gradient-to-t from-almost-black to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="border-x-skin-tone-darker rounded-xl border-x text-skin-tone-light">
              <div className="relative dark:bg-almost-black/60 sm:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <div className="space-y-16 overflow-x-hidden px-2 py-10 text-base sm:space-y-32 sm:px-4 sm:py-16 lg:px-16">
                  <CharacterFilterBar
                    characters={characters}
                    key={characters.id}
                  />
                  <div className=" mx-auto grid h-full w-full max-w-xs grid-cols-1 gap-y-8 xs:max-w-md sm:max-w-full sm:grid-cols-3 sm:gap-x-3 sm:gap-y-24 md:grid-cols-4 xl:grid-cols-6 xl:gap-x-12">
                    {sortedCharacters.map((character) => {
                      return (
                        <CharacterCard
                          character={character}
                          key={character.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
