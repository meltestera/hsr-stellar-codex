// import character list
import { characterIcons } from "../assets/characters/characters";

// import components
import CharacterIcon from "../components/CharacterIcon";

const Root = () => {
  return (
    <>
      <div className="relative bg-[url('./assets/Background_Stars.webp')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-md border-x border-x-violet-dark text-skin-tone-light">
            <div className="relative min-h-[480px] dark:bg-almost-black">
              <div className="overflow-x-hidden text-base">
                <div className="grid min-w-fit grid-cols-1 gap-2 p-4 sm:grid-cols-3 lg:grid-cols-5">
                  {characterIcons.map((character) => {
                    return (
                      <CharacterIcon
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
    </>
  );
};

export default Root;
