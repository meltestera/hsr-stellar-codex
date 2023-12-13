import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import character list
import { characters } from "../assets/characters/characters";

// import components
import CharacterCard from "../components/CharacterCard";
import CharacterFilterBar from "../components/CharacterFilterBar";
import Navigation from "../components/Navigation";

const Characters = () => {
  const sortedCharacters = characters.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const [query, setQuery] = useState("");

  const [selectedRarityFilter, setSelectedRarityFilter] = useState("all");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("all");
  const [selectedPathFilter, setSelectedPathFilter] = useState("all");

  const [currentCharacterCard, setCurrentCharacterCard] =
    useState(sortedCharacters);

  useEffect(() => {
    const filteredCharacters = sortedCharacters.filter((character) => {
      const filterByRarity =
        selectedRarityFilter === "all" ||
        character.rarity === parseInt(selectedRarityFilter);

      const filterByType =
        selectedTypeFilter === "all" || character.type === selectedTypeFilter;

      const filterByPath =
        selectedPathFilter === "all" || character.path === selectedPathFilter;

      return filterByRarity && filterByType && filterByPath;
    });

    setCurrentCharacterCard(filteredCharacters);
  }, [selectedRarityFilter, selectedTypeFilter, selectedPathFilter]);

  return (
    <>
      <div className="relative flex flex-col">
        <div className="h-full w-full bg-[url('/src/assets/Background_Stars.webp')] bg-cover bg-no-repeat pb-40 sm:bg-[75%_center] lg:bg-[35%_center]">
          <div className="absolute inset-0 bg-gradient-to-t from-almost-black via-skin-tone-darker/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x border-x-skin-tone-darker text-skin-tone-light">
              <div className="relative min-h-[5535px] dark:bg-almost-black/60 xs:min-h-[6837px] sm:min-h-[6086px] sm:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:min-h-[4850px] lg:min-h-[4902px] xl:min-h-[3666px]">
                <div className="overflow-x-hidden px-2 py-6 text-base sm:px-4 md:py-16 lg:px-16">
                  <Navigation />
                  <div className="mt-4 max-w-[200px] py-2 text-left md:max-w-full xl:mt-8">
                    <h1 className="font-poppins text-xl font-light sm:text-2xl lg:text-3xl xl:text-4xl">
                      Playable Characters
                    </h1>
                  </div>
                  <CharacterFilterBar
                    characters={characters}
                    key={characters.id}
                    query={query}
                    setQuery={setQuery}
                    setSelectedRarityFilter={setSelectedRarityFilter}
                    setSelectedTypeFilter={setSelectedTypeFilter}
                    setSelectedPathFilter={setSelectedPathFilter}
                  />
                  <div className=" mx-auto mt-8 grid h-full w-full max-w-xs grid-cols-1 gap-y-8 xs:max-w-md sm:mt-24 sm:max-w-full sm:grid-cols-3 sm:gap-x-3 sm:gap-y-24 md:grid-cols-4 xl:mt-36 xl:grid-cols-6 xl:gap-x-12">
                    {currentCharacterCard
                      .filter((character) =>
                        character.name.toLowerCase().includes(query),
                      )
                      .map((character) => {
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

export default Characters;
