// import useParams
import { useParams, Link } from "react-router-dom";

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

    if (scrollRef) {
      window.scrollTo(0, scrollRef.current.offsetTop - 20);
    }

    fetchData();
  }, []);

  const selectedCharacter = characterDetails.filter(
    (c) => c.name === params.name,
  );

  return (
    <>
      <div
        ref={scrollRef}
        className="relative bg-cover bg-center bg-no-repeat sm:bg-[url('./assets/Background_Stars.webp')]"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-md border-x border-x-violet-dark text-skin-tone-light">
            <div className="relative min-h-[100dvh] dark:bg-almost-black">
              <div className="overflow-x-hidden text-base">
                {selectedCharacter.map((character) => {
                  return (
                    <div key={character.id}>
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
