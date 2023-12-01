// import useParams
import { useParams } from "react-router-dom";

// import useState, useEffect
import { useState, useEffect, useRef } from "react";

//import components
import CharacterAbility from "../components/CharacterAbility";
import CharacterTraces from "../components/CharacterTraces";
import CharacterEidolons from "../components/CharacterEidolons";
import CharacterProfile from "../components/CharacterProfile";

const CharacterDetails = () => {
  const params = useParams();
  const scrollRef = useRef(null);

  const [characterDetails, setCharacterDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/CharacterDetails.json");
        const data = await response.json();
        setCharacterDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (scrollRef) window.scrollTo(0, scrollRef.current.offsetTop);

    fetchData();
  }, []);

  const selectedCharacter = characterDetails.filter(
    (c) => c.name === params.name,
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-almost-black py-40">
          <div className="mx-auto max-w-screen-xl">
            <div className="rounded-xl border-x-2 border-x-violet-dark text-skin-tone-light">
              <div
                ref={scrollRef}
                className="relative min-h-[100dvh] border-b border-t-4 border-b-violet-dark border-t-violet-dark dark:bg-almost-black xl:rounded-xl xl:border-t-[12px] xl:border-t-skin-tone-light/80"
              >
                {selectedCharacter.map((character) => {
                  return (
                    <div
                      className="overflow-x-hidden text-base"
                      key={character.id}
                    >
                      <CharacterProfile character={character} />
                      <CharacterAbility character={character} />
                      <CharacterTraces character={character} />
                      <CharacterEidolons character={character} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
