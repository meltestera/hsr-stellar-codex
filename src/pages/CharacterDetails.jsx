// import useParams
import { useParams } from "react-router-dom";

// import useState, useEffect
import { useState, useEffect } from "react";

const CharacterDetails = () => {
  const params = useParams();
  const [characterDetails, setCharacterDetails] = useState([]);

  useEffect(() => {
    fetch("/src/assets/CharacterDetails.json")
      .then((res) => res.json())
      .then((data) => setCharacterDetails(data));
  }, []);

  const selectedCharacter = characterDetails.filter(
    (c) => c.name === params.name,
  );

  return (
    <>
      <div className="relative bg-[url('./assets/Background_Stars.webp')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-md border-x border-x-violet-dark text-skin-tone-light">
            <div className="relative min-h-[100dvh] dark:bg-almost-black">
              <div className="overflow-x-hidden text-base">
                {selectedCharacter.map((character) => {
                  return (
                    <div key={character.id} className="min-w-fit p-4">
                      <img
                        type="image/webp"
                        src={character.imagePortrait}
                        alt={character.altPortrait}
                        width="600"
                        height="600"
                        fetchpriority="high"
                        className="h-auto object-cover object-center"
                      />
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
