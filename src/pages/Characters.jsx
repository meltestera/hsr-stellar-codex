import { useState, useEffect } from "react";

import { characters } from "../assets/characters/characters";

import CharacterCard from "../components/CharacterCard";
import CharacterFilterBar from "../components/CharacterFilterBar";
import Navigation from "../components/Navigation";
import HiddenScrollToTopBtn from "../components/HiddenScrollToTopBtn";

const Characters = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedRarityFilter, setSelectedRarityFilter] = useState("all");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("all");
  const [selectedPathFilter, setSelectedPathFilter] = useState("all");
  const [currentCharacterCard, setCurrentCharacterCard] = useState(characters);

  const hasVisitedBefore = sessionStorage.getItem("hasVisitedCharactersPage");

  const fadeHeaderStyle = {
    opacity: hasVisitedBefore ? 1 : animateHeader ? 1 : 0,
    transition: "opacity 0.5s ease-in 0.5s",
  };

  const fadeCardsStyle = {
    opacity: hasVisitedBefore ? 1 : animateCards ? 1 : 0,
    transform: hasVisitedBefore
      ? "translateY(0)"
      : animateCards
        ? "translateY(0)"
        : "translateY(60px)",
    transition: "opacity 1s ease-in 1.5s, transform 0.5s ease-in 1.5s",
  };

  const backgroundImageUrl = "/images/Background_Stars.webp";

  useEffect(() => {
    document.title =
      "Characters | Stellar Codex - yet another Honkai: Star Rail wiki";

    if (!hasVisitedBefore) {
      setAnimateHeader(true);
      setAnimateCards(true);
      sessionStorage.setItem("hasVisitedCharactersPage", "true");
    }

    const sortedCharacters = [...characters].sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    const filteredCharacters = sortedCharacters.filter((character) => {
      const filterByName =
        character.name &&
        character.name.toLowerCase().includes(query.toLowerCase());
      const filterByRarity =
        selectedRarityFilter === "all" ||
        character.rarity === parseInt(selectedRarityFilter);

      const filterByType =
        selectedTypeFilter === "all" || character.type === selectedTypeFilter;

      const filterByPath =
        selectedPathFilter === "all" || character.path === selectedPathFilter;

      return filterByName && filterByRarity && filterByType && filterByPath;
    });

    setCurrentCharacterCard(filteredCharacters);
  }, [query, selectedRarityFilter, selectedTypeFilter, selectedPathFilter]);

  return (
    <>
      <div className="relative flex flex-col">
        <div
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          className="h-full w-full bg-cover bg-no-repeat sm:bg-[75%_center] lg:bg-[35%_center]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-almost-black via-skin-tone-darker/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x border-x-skin-tone-darker text-skin-tone-light">
              <div className="relative sm:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:bg-almost-black/60">
                <div className="flex flex-col overflow-hidden px-2 py-9 text-base sm:gap-y-9 sm:px-4 lg:px-16">
                  <header style={fadeHeaderStyle}>
                    <Navigation />
                    <div className="mt-4 max-w-[200px] py-2 text-left md:max-w-full xl:mt-8">
                      <h1 className="font-poppins text-xl font-light sm:text-2xl lg:text-3xl xl:text-4xl">
                        Playable Characters
                      </h1>
                    </div>
                    <CharacterFilterBar
                      {...{
                        characters,
                        query,
                        setQuery,
                        setSelectedRarityFilter,
                        setSelectedTypeFilter,
                        setSelectedPathFilter,
                      }}
                    />
                  </header>
                  <main
                    style={fadeCardsStyle}
                    className="mx-auto my-8 grid h-full w-full max-w-xs grid-cols-1 gap-y-8 xs:max-w-md sm:my-16 sm:max-w-full sm:grid-cols-3 sm:gap-x-3 sm:gap-y-24 md:grid-cols-4 xl:grid-cols-6 xl:gap-x-12"
                  >
                    {currentCharacterCard.map((character) => {
                      return (
                        <CharacterCard
                          character={character}
                          key={character.name}
                        />
                      );
                    })}
                  </main>
                  <HiddenScrollToTopBtn />
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
