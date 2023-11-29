// import useParams
import { useParams } from "react-router-dom";

// import useState, useEffect
import { useState, useEffect, useRef } from "react";

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
      window.scrollTo(0, scrollRef.current.offsetTop);
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
                      <div className="text-center">
                        <span className="text-4xl font-bold">
                          {" "}
                          {character.name}
                        </span>
                      </div>
                      <div className="max-w-xs object-cover object-center p-4">
                        <img
                          type="image/webp"
                          src={character.imagePortrait}
                          alt={character.altPortrait}
                          width="400"
                          height="auto"
                          fetchpriority="high"
                          role="presentation"
                          className="min-h-full object-cover object-center"
                        />
                      </div>
                      <div className="min-h-full max-w-[150px] object-cover object-center p-2">
                        <img
                          src={character.imageEidolons[0]}
                          alt={character.altEidolons[0]}
                          height="auto"
                          width="150px"
                          loading="lazy"
                          role="presentation"
                          decoding="async"
                          className="min-h-full min-w-full object-cover object-center"
                        />
                      </div>
                      <div className="min-h-full max-w-[150px] object-cover object-center p-2">
                        <img
                          src={character.imageEidolons[1]}
                          alt={character.altEidolons[1]}
                          height="auto"
                          width="150px"
                          loading="lazy"
                          role="presentation"
                          decoding="async"
                          className="min-h-full min-w-full object-cover object-center"
                        />
                      </div>
                      <div className="min-h-full max-w-[150px] object-cover object-center p-2">
                        <img
                          src={character.imageEidolons[2]}
                          alt={character.altEidolons[2]}
                          height="auto"
                          width="150px"
                          loading="lazy"
                          role="presentation"
                          decoding="async"
                          className="min-h-full min-w-full object-cover object-center"
                        />
                      </div>
                      <div className="min-h-full max-w-[150px] object-cover object-center p-2">
                        <img
                          src={character.imageEidolons[3]}
                          alt={character.altEidolons[3]}
                          height="auto"
                          width="150px"
                          loading="lazy"
                          role="presentation"
                          decoding="async"
                          className="min-h-full min-w-full object-cover object-center"
                        />
                      </div>
                      <div className="min-h-full max-w-[150px] object-cover object-center p-2">
                        <img
                          src={character.imageEidolons[4]}
                          alt={character.altEidolons[4]}
                          height="auto"
                          width="150px"
                          loading="lazy"
                          role="presentation"
                          decoding="async"
                          className="min-h-full min-w-full object-cover object-center"
                        />
                      </div>
                      <div className="min-h-full max-w-[150px] object-cover object-center p-2">
                        <img
                          src={character.imageEidolons[5]}
                          alt={character.altEidolons[5]}
                          height="auto"
                          width="150px"
                          loading="lazy"
                          role="presentation"
                          decoding="async"
                          className="min-h-full min-w-full object-cover object-center"
                        />
                      </div>
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
