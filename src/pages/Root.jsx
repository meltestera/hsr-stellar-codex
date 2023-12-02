// import character list
import { characters } from "../assets/characters/characters";

// import components
import CharacterCard from "../components/CharacterCard";

const Root = () => {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="bg-[url('/src/assets/Background_Stars.webp')] bg-cover bg-center bg-no-repeat py-40">
          <div className="absolute inset-0 bg-transparent bg-gradient-to-t from-almost-black/95 via-black/5 to-almost-black/95"></div>
          <div className="mx-auto max-w-screen-xl">
            <div className="rounded-xl border-x-2 border-x-violet-dark text-skin-tone-light">
              <div className="relative min-h-[100dvh] border-b border-t-4 border-b-violet-dark border-t-violet-dark dark:bg-almost-black xl:rounded-xl xl:border-t-[12px] xl:border-t-skin-tone-light/80">
                <div className="overflow-x-hidden text-base">
                  <div className="grid min-w-fit grid-cols-1 gap-2 p-6 sm:grid-cols-3 lg:grid-cols-5">
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
