// import useParams
import { useParams, Link } from "react-router-dom";

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
                      <div className="text-center">
                        <Link to="/">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#eee"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                          </span>
                        </Link>
                        <span className="text-4xl font-bold">
                          {" "}
                          {character.name}
                        </span>
                      </div>
                      <p>{character.introduction}</p>
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
                      <div>
                        <div>
                          <h1>{character.abilityTitle[0]}</h1>
                          <b>{character.abilityTree[0]}</b>
                        </div>
                        <div>
                          <h1>{character.abilityTitle[1]}</h1>
                          <b>{character.abilityTree[1]}</b>
                        </div>
                        <div>
                          <h1>{character.abilityTitle[2]}</h1>
                          <b>{character.abilityTree[2]}</b>
                        </div>
                        <div>
                          <h1>{character.abilityTitle[3]}</h1>
                          <b>{character.abilityTree[3]}</b>
                        </div>
                        <div>
                          <h1>{character.abilityTitle[4]}</h1>
                          <b>{character.abilityTree[4]}</b>
                        </div>
                      </div>
                      <div>
                        <div>
                          <b>{character.tracesTitle[0]}</b>
                          <p>{character.tracesDesc[0]}</p>
                        </div>
                        <div>
                          <b>{character.tracesTitle[1]}</b>
                          <p>{character.tracesDesc[1]}</p>
                        </div>
                        <div>
                          <b>{character.tracesTitle[2]}</b>
                          <p>{character.tracesDesc[2]}</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <span>{character.tracesAttr[0]}</span>
                          <span>{character.tracesAttr[1]}</span>
                          <span>{character.tracesAttr[2]}</span>
                        </div>
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
                        <span>
                          <b>{character.eidolonsTitle[0]}</b>
                          <p>{character.eidolonsDesc[0]}</p>
                        </span>
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
                        <span>
                          <b>{character.eidolonsTitle[1]}</b>
                          <p>{character.eidolonsDesc[1]}</p>
                        </span>
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
                        <span>
                          <b>{character.eidolonsTitle[2]}</b>
                          <p>{character.eidolonsDesc[2]}</p>
                        </span>
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
                        <span>
                          <b>{character.eidolonsTitle[3]}</b>
                          <p>{character.eidolonsDesc[3]}</p>
                        </span>
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
                        <span>
                          <b>{character.eidolonsTitle[4]}</b>
                          <p>{character.eidolonsDesc[4]}</p>
                        </span>
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
                        <span>
                          <b>{character.eidolonsTitle[5]}</b>
                          <p>{character.eidolonsDesc[5]}</p>
                        </span>
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
