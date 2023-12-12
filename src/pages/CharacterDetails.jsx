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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/src/assets/CharacterDetails.json");
        const data = await res.json();
        setCharacterDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (scrollRef)
      scrollRef.current.scrollIntoView({
        behavior: "instant",
        block: "start",
        inline: "center",
      });

    fetchData();
  }, []);

  const selectedCharacter = characterDetails.filter(
    (c) => c.name === params.name,
  );

  return (
    <>
      <div className="relative flex flex-col">
        <div className="h-full w-full bg-[url('/src/assets/Background_Stars.webp')] bg-cover bg-center bg-no-repeat py-40">
          <div className="absolute inset-0 bg-gradient-to-t from-almost-black via-skin-tone-darker/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x border-x-skin-tone-darker text-skin-tone-light">
              <div
                ref={scrollRef}
                className="relative min-h-[5535px] dark:bg-almost-black/60 xs:min-h-[6837px] sm:min-h-[6086px] sm:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:min-h-[4850px] lg:min-h-[4902px] xl:min-h-[3666px]"
              >
                {loading ? (
                  <div className="flex min-h-[100dvh] w-full items-center justify-center">
                    <b className="font-poppins text-lg">"Please wait..."</b>
                  </div>
                ) : (
                  <>
                    {selectedCharacter.map((character) => {
                      return (
                        <div
                          className="space-y-10 overflow-x-hidden px-3 text-base md:space-y-32 md:py-36 lg:px-16 xl:space-y-48"
                          key={character.id}
                        >
                          <CharacterProfile
                            characterName={character.name}
                            characterType={character.type}
                            characterPath={character.path}
                            characterIntro={character.introduction}
                            characterImagePortrait={character.imagePortrait}
                            characterImageSplash={character.imageSplash}
                            characterImageType={character.imageType}
                            characterImagePath={character.imagePath}
                            characterAltPortrait={
                              character.characterAltPortrait
                            }
                            characterAltSplash={character.characterAltSplash}
                            characterAltType={character.characterAltType}
                            characterAltPath={character.characterAltPath}
                          />
                          <CharacterAbility
                            characterAbilityTitle={character.abilityTitle}
                            characterAbilityTree={character.abilityTree}
                            characterAbilityDesc={character.abilityDesc}
                            characterImageAbility={character.imageAbilities}
                            characterAltAbilities={character.altAbilities}
                          />
                          <CharacterTraces
                            characterTracesTitle={character.tracesTitle}
                            characterTracesDesc={character.tracesDesc}
                            characterTracesAttr={character.tracesAttr}
                            characterImageTraces={character.imageTraces}
                            characterImageTracesMinor={
                              character.imageTracesMinor
                            }
                            characterAltTraces={character.altTraces}
                            characterAltTracesMinor={character.altTracesMinor}
                          />
                          <CharacterEidolons
                            characterImageEidolons={character.imageEidolons}
                            characterAltEidolons={character.altEidolons}
                            characterEidolonsTitle={character.eidolonsTitle}
                            characterEidolonsDesc={character.eidolonsDesc}
                          />
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
