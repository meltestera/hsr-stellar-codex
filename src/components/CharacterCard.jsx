import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="ml-5 rounded-sm bg-violet-dark py-4 pr-4 shadow-2xl">
        <div className="">
          <Link to={`${character.name}`}>
            <div className="">
              <div className="flex flex-row items-center gap-x-1">
                <div className="max-w-fit -translate-x-1/2 rounded-[50%] bg-almost-black p-2">
                  <img
                    src={character.icon}
                    alt={character.alt}
                    fetchpriority="high"
                    width="96px"
                    height="96px"
                    className="max-h-20 w-auto object-cover object-center"
                  />
                </div>
                <span className="flex w-full flex-col gap-y-1">
                  <b className="text-lg">{character.name}</b>
                  <div className="flex w-full flex-row   justify-between gap-x-2">
                    <div className="flex flex-row items-center gap-x-1">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src={character.iconPath}
                          alt={character.altPath}
                          fetchpriority="high"
                          width="96px"
                          height="96px"
                          className="max-h-8 w-auto object-cover object-center"
                        />
                      </div>
                      <span>{character.path}</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-1">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src={character.iconType}
                          alt={character.altType}
                          fetchpriority="high"
                          width="96px"
                          height="96px"
                          className="max-h-7 w-auto object-cover object-center"
                        />
                      </div>
                      <span>{character.type}</span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
