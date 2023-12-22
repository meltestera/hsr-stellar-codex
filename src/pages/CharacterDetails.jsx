import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import CharacterAbility from "../components/CharacterAbility";
import CharacterTraces from "../components/CharacterTraces";
import CharacterEidolons from "../components/CharacterEidolons";
import CharacterProfile from "../components/CharacterProfile";
import CharacterBuild from "../components/CharacterBuild";
import Navigation from "../components/Navigation";

import CharacterDetailsData from "../assets/CharacterDetails.json";

const CharacterDetails = () => {
  const params = useParams();
  const [characterDetails, setCharacterDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const sectionRefs = {
    profile: useRef(null),
    ability: useRef(null),
    traces: useRef(null),
    eidolons: useRef(null),
    builds: useRef(null),
  };

  useEffect(() => {
    document.title = `${params.name} | Stellar Codex - yet another Honkai: Star Rail wiki`;

    const fetchData = async () => {
      try {
        setCharacterDetails(CharacterDetailsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [params]);

  useEffect(() => {
    if (characterDetails.length > 0 && params.name) {
      const foundCharacter = characterDetails.find(
        (character) => character.name === params.name,
      );
      setSelectedCharacter(foundCharacter);
    }
  }, [characterDetails, params.name]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.style.opacity = 1;
          target.style.transform = "translateY(0)";
          observer.unobserve(target);
        }
      });
    };

    const createObserver = (ref, callback) => {
      const observer = new IntersectionObserver(callback, observerOptions);
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const observers = {
      profile: createObserver(sectionRefs.profile, handleIntersection),
      ability: createObserver(sectionRefs.ability, handleIntersection),
      traces: createObserver(sectionRefs.traces, handleIntersection),
      eidolons: createObserver(sectionRefs.eidolons, handleIntersection),
      builds: createObserver(sectionRefs.builds, handleIntersection),
    };

    const resetObservers = () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
      observers.profile = createObserver(
        sectionRefs.profile,
        handleIntersection,
      );
      observers.ability = createObserver(
        sectionRefs.ability,
        handleIntersection,
      );
      observers.traces = createObserver(sectionRefs.traces, handleIntersection);
      observers.eidolons = createObserver(
        sectionRefs.eidolons,
        handleIntersection,
      );
      observers.builds = createObserver(sectionRefs.builds, handleIntersection);
    };

    if (selectedCharacter) {
      resetObservers();
    }

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, [selectedCharacter]);

  const backgroundImageUrl = "/images/Background_Stars.webp";

  const fadeInStyles = {
    opacity: isIntersecting ? 1 : 0,
    transition: "opacity 1s ease-in 0.3s",
  };

  let slideUpStyles = {
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? "translateY(0)" : "translateY(5px)",
    transition: "opacity 0.5s ease-in, transform 0.5s ease-in",
  };

  if (window.innerWidth >= 768) {
    slideUpStyles = {
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? "translateY(0)" : "translateY(60px)",
      transition: "opacity 0.5s ease-in, transform 0.5s ease-in",
    };
  }

  return (
    <>
      <div className="relative flex flex-col">
        <div
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          className="h-full w-full bg-cover bg-[50%_25%] bg-no-repeat pb-40"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-almost-black via-skin-tone-darker/5 to-almost-black"></div>
          <div className="mx-auto max-w-screen-2xl">
            <div className="rounded-xl border-x border-x-skin-tone-darker text-skin-tone-light">
              <div className="relative dark:bg-almost-black/10 sm:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                {loading ? (
                  <div className="flex min-h-[100dvh] w-full items-center justify-center">
                    <b className="font-poppins text-lg">"Please wait..."</b>
                  </div>
                ) : (
                  <div
                    className="overflow-x-hidden px-3 py-6 text-base md:py-16 lg:px-16"
                    key={selectedCharacter?.id}
                  >
                    <header>
                      <Navigation params={params.name} />
                    </header>
                    <main>
                      {selectedCharacter ? (
                        <>
                          <div
                            ref={sectionRefs.profile}
                            style={{ ...fadeInStyles }}
                          >
                            <CharacterProfile
                              characterName={selectedCharacter.name}
                              characterType={selectedCharacter.type}
                              characterPath={selectedCharacter.path}
                              characterIntro={selectedCharacter.introduction}
                              characterImagePortrait={
                                selectedCharacter.imagePortrait
                              }
                              characterImageSplash={
                                selectedCharacter.imageSplash
                              }
                              characterImageType={selectedCharacter.imageType}
                              characterImagePath={selectedCharacter.imagePath}
                              characterAltPortrait={
                                selectedCharacter.characterAltPortrait
                              }
                              characterAltSplash={
                                selectedCharacter.characterAltSplash
                              }
                              characterAltType={
                                selectedCharacter.characterAltType
                              }
                              characterAltPath={
                                selectedCharacter.characterAltPath
                              }
                            />
                          </div>
                          <div
                            ref={sectionRefs.ability}
                            style={{ ...slideUpStyles }}
                          >
                            <CharacterAbility
                              characterAbilityTitle={
                                selectedCharacter.abilityTitle
                              }
                              characterAbilityTree={
                                selectedCharacter.abilityTree
                              }
                              characterAbilityDesc={
                                selectedCharacter.abilityDesc
                              }
                              characterImageAbility={
                                selectedCharacter.imageAbilities
                              }
                              characterAltAbilities={
                                selectedCharacter.altAbilities
                              }
                            />
                          </div>
                          <div
                            ref={sectionRefs.traces}
                            style={{ ...slideUpStyles }}
                          >
                            <CharacterTraces
                              characterTracesTitle={
                                selectedCharacter.tracesTitle
                              }
                              characterTracesDesc={selectedCharacter.tracesDesc}
                              characterTracesAttr={selectedCharacter.tracesAttr}
                              characterImageTraces={
                                selectedCharacter.imageTraces
                              }
                              characterImageTracesMinor={
                                selectedCharacter.imageTracesMinor
                              }
                              characterAltTraces={selectedCharacter.altTraces}
                              characterAltTracesMinor={
                                selectedCharacter.altTracesMinor
                              }
                            />
                          </div>
                          <div
                            ref={sectionRefs.eidolons}
                            style={{ ...slideUpStyles }}
                          >
                            <CharacterEidolons
                              characterImageEidolons={
                                selectedCharacter.imageEidolons
                              }
                              characterAltEidolons={
                                selectedCharacter.altEidolons
                              }
                              characterEidolonsTitle={
                                selectedCharacter.eidolonsTitle
                              }
                              characterEidolonsDesc={
                                selectedCharacter.eidolonsDesc
                              }
                            />
                          </div>
                          <div
                            ref={sectionRefs.builds}
                            style={{ ...slideUpStyles }}
                          >
                            <CharacterBuild
                              characterRelicsTitle={
                                selectedCharacter.relicsTitle
                              }
                              characterRelicsDesc={selectedCharacter.relicsDesc}
                              characterOrnamentsTitle={
                                selectedCharacter.ornamentsTitle
                              }
                              characterOrnamentsDesc={
                                selectedCharacter.ornamentsDesc
                              }
                              characterConesTitle={selectedCharacter.conesTitle}
                              characterConesDesc={selectedCharacter.conesDesc}
                              characterImageRelics={
                                selectedCharacter.imageRelics
                              }
                              characterImageOrnaments={
                                selectedCharacter.imageOrnaments
                              }
                              characterImageCones={selectedCharacter.imageCones}
                              characterAltRelics={selectedCharacter.altRelics}
                              characterAltOrnaments={
                                selectedCharacter.altOrnaments
                              }
                              characterAltCones={selectedCharacter.altCones}
                            />
                          </div>
                        </>
                      ) : (
                        <p>No character found</p>
                      )}
                    </main>
                  </div>
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
