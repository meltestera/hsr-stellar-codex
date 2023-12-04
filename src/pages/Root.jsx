// import character list
import { characters } from "../assets/characters/characters";

// import components
import CharacterCard from "../components/CharacterCard";

const Root = () => {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="bg-[url('/src/assets/Background_Stars.webp')] bg-cover bg-[38%_center] bg-no-repeat py-40">
          <div className="absolute inset-0 bg-gradient-to-t from-almost-black via-violet-dark/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x border-x-violet-dark text-skin-tone-light">
              <div className="relative min-h-[100dvh]  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:bg-almost-black/5">
                <div className="overflow-x-hidden px-2 py-4 text-base sm:px-4 sm:py-16 lg:px-16">
                  <div className=" mx-auto grid h-full w-full max-w-xs grid-cols-1 gap-y-3 xs:max-w-md sm:max-w-full sm:grid-cols-3 sm:gap-x-3 sm:gap-y-24 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {characters.map((character) => {
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
