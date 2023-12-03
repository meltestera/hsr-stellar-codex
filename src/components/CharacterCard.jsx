import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="xs:p-4 bg-violet-dark p-1">
        <Link to={`${character.name}`}>
          <div className="flex flex-row items-center">
            <div className="relative flex w-fit items-center justify-center p-1">
              <img
                src={character.icon}
                alt={character.alt}
                fetchpriority="high"
                width="50"
                height="50"
                className="xs:min-w-[75px] h-auto object-cover object-center"
              />
            </div>
            <div className="xs:gap-y-3 flex grow flex-col pl-[10px]">
              <span className="xs:text-sm text-xs">
                <b className="font-poppins tracking-wide">{character.name}</b>
              </span>
              <div className="flex flex-row items-center gap-x-1">
                <div className="xs:w-[118px] flex w-[105px] flex-row items-center gap-x-1">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={character.iconPath}
                      alt={character.altPath}
                      fetchpriority="high"
                      width="25"
                      height="25"
                      className="xs:w-[30px] h-auto object-cover object-center"
                    />
                  </div>
                  <span className="xs:text-sm font-outfit text-xs">
                    {character.path}
                  </span>
                </div>
                <div className="xs:w-[118px] flex w-[105px] flex-row items-center gap-x-1">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={character.iconType}
                      alt={character.altType}
                      fetchpriority="high"
                      width="25"
                      height="25"
                      className="xs:w-[30px] h-auto object-cover object-center"
                    />
                  </div>
                  <span className="xs:text-sm font-outfit text-xs">
                    {character.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CharacterCard;
