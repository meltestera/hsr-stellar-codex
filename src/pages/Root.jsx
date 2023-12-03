// import character list
import { characters } from "../assets/characters/characters";

// import components
import CharacterCard from "../components/CharacterCard";

const Root = () => {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="bg-[url('/src/assets/Background_Stars.webp')] bg-cover py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-almost-black via-violet-dark/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x-2 border-x-violet-dark text-skin-tone-light">
              <div className="relative min-h-[100dvh] border-y-2 border-violet-dark dark:bg-almost-black xl:rounded-xl xl:border-t-[12px] xl:border-t-skin-tone-light/80">
                <div className="overflow-x-hidden px-2 py-4 text-base sm:px-4 sm:py-8">
                  <div className=" xs:max-w-md mx-auto grid h-full w-full max-w-xs grid-cols-1 gap-y-3 sm:max-w-full sm:grid-cols-3 sm:gap-x-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
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
