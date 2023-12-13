import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import CharacterAbility from "../components/CharacterAbility";
import CharacterTraces from "../components/CharacterTraces";
import CharacterEidolons from "../components/CharacterEidolons";
import CharacterProfile from "../components/CharacterProfile";
import Navigation from "../components/Navigation";

const CharacterDetails = () => {
  const params = useParams();
  const scrollRef = useRef(null);

  const [characterDetails, setCharacterDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch("/src/assets/CharacterDetails.json");
        const data = await res.json();
        setCharacterDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);

        if (isMounted) {
          setError("Error fetching data. Please try again.");
        }
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

  const [selectedCharacter] = characterDetails.filter(
    (character) => character.name === params.name,
  );

  {
    error && <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="relative flex flex-col">
        <div className="h-full w-full bg-[url('/src/assets/Background_Stars.webp')] bg-cover bg-[50%_25%] bg-no-repeat pb-40">
          <div className="absolute inset-0 bg-gradient-to-t from-almost-black via-skin-tone-darker/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x border-x-skin-tone-darker text-skin-tone-light">
              <div
                ref={scrollRef}
                className="relative dark:bg-almost-black/10 sm:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
              >
                {loading ? (
                  <div className="flex min-h-[100dvh] w-full items-center justify-center">
                    <b className="font-poppins text-lg">"Please wait..."</b>
                  </div>
                ) : (
                  <div
                    className="overflow-x-hidden px-3 py-6 text-base md:py-16 lg:px-16"
                    key={selectedCharacter.id}
                  >
                    <Navigation params={params.name} />
                    <CharacterProfile
                      characterName={selectedCharacter.name}
                      characterType={selectedCharacter.type}
                      characterPath={selectedCharacter.path}
                      characterIntro={selectedCharacter.introduction}
                      characterImagePortrait={selectedCharacter.imagePortrait}
                      characterImageSplash={selectedCharacter.imageSplash}
                      characterImageType={selectedCharacter.imageType}
                      characterImagePath={selectedCharacter.imagePath}
                      characterAltPortrait={
                        selectedCharacter.characterAltPortrait
                      }
                      characterAltSplash={selectedCharacter.characterAltSplash}
                      characterAltType={selectedCharacter.characterAltType}
                      characterAltPath={selectedCharacter.characterAltPath}
                    />
                    <CharacterAbility
                      characterAbilityTitle={selectedCharacter.abilityTitle}
                      characterAbilityTree={selectedCharacter.abilityTree}
                      characterAbilityDesc={selectedCharacter.abilityDesc}
                      characterImageAbility={selectedCharacter.imageAbilities}
                      characterAltAbilities={selectedCharacter.altAbilities}
                    />
                    <CharacterTraces
                      characterTracesTitle={selectedCharacter.tracesTitle}
                      characterTracesDesc={selectedCharacter.tracesDesc}
                      characterTracesAttr={selectedCharacter.tracesAttr}
                      characterImageTraces={selectedCharacter.imageTraces}
                      characterImageTracesMinor={
                        selectedCharacter.imageTracesMinor
                      }
                      characterAltTraces={selectedCharacter.altTraces}
                      characterAltTracesMinor={selectedCharacter.altTracesMinor}
                    />
                    <CharacterEidolons
                      characterImageEidolons={selectedCharacter.imageEidolons}
                      characterAltEidolons={selectedCharacter.altEidolons}
                      characterEidolonsTitle={selectedCharacter.eidolonsTitle}
                      characterEidolonsDesc={selectedCharacter.eidolonsDesc}
                    />
                  </div>
                )}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
