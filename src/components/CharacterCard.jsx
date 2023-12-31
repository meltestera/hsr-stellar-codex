import { Link } from "react-router-dom";

// import rarity stars image
import Four from "../assets/rarity/Rarity_4_Star.webp";
import Five from "../assets/rarity/Rarity_5_Star.webp";

const CharacterCard = ({
  character: {
    rarity,
    name,
    icon,
    alt,
    iconPath,
    altPath,
    iconType,
    altType,
    path,
    type,
  },
}) => {
  const fiveStarCard = rarity === 5;

  const RarityImage = ({ rarityImage, altText, width, height }) => (
    <img
      src={rarityImage}
      alt={altText}
      fetchpriority="high"
      width={width}
      height={height}
      className="h-auto object-cover object-center sm:min-w-[50px]"
    />
  );

  return (
    <>
      <div
        className={`relative flex flex-col justify-center overflow-visible rounded bg-almost-black/75 px-1 py-6 shadow-md shadow-black/95 transition xs:px-4 xs:py-8 sm:block sm:rounded-2xl sm:p-2 sm:hover:-translate-y-4 sm:hover:scale-105
      ${
        rarity === 5
          ? "border-r-4 border-five-star-card-light sm:border-r-0 sm:hover:shadow-[0px_4px_16px,_0px_8px_24px,_0px_16px_56px] sm:hover:shadow-five-star-card-dark"
          : "border-r-4 border-four-star-card-light sm:border-r-0 sm:hover:shadow-[0px_4px_16px,_0px_8px_24px,_0px_16px_56px] sm:hover:shadow-four-star-card-dark"
      }`}
      >
        <Link to={`/characters/${name}`}>
          <div className=" flex h-full w-full flex-row items-center justify-between gap-x-3 space-x-3 sm:min-h-[300px] sm:flex-col sm:gap-x-0 sm:gap-y-1 sm:space-x-0 sm:space-y-3">
            <div className="relative flex w-fit flex-col items-center justify-center sm:-translate-y-2/3 sm:rounded-[50%] sm:bg-almost-black sm:p-2">
              <img
                src={icon}
                alt={alt}
                fetchpriority="high"
                width="50"
                height="50"
                className="h-auto object-cover object-center xs:min-w-[65px] lg:min-w-[75px]"
              />
            </div>
            <div className="relative flex grow flex-col items-center gap-y-1 xs:gap-y-3 sm:w-full sm:translate-y-3 sm:justify-between sm:gap-y-1 sm:space-y-12 xl:space-y-4">
              <div className="flex w-full flex-row items-center justify-start gap-x-1 space-x-1 text-left sm:absolute sm:block sm:-translate-y-[66px] sm:gap-x-0 sm:space-x-0 sm:space-y-1 sm:text-center">
                <span className="min-w-fit text-xs xs:text-sm sm:text-center sm:text-lg">
                  <b className="font-poppins tracking-wide">{name}</b>
                </span>
                <div className="flex w-full flex-col sm:items-center sm:justify-center">
                  {fiveStarCard ? (
                    <RarityImage
                      rarityImage={Five}
                      altText="Rarity_5_Star"
                      width={30}
                      height={30}
                    />
                  ) : (
                    <RarityImage
                      rarityImage={Four}
                      altText="Rarity_4_Star"
                      width={30}
                      height={30}
                    />
                  )}
                </div>
              </div>
              <div className="flex h-full w-full flex-row items-center gap-x-1 sm:flex-col sm:gap-y-1 sm:space-y-1 xl:space-y-2">
                <div className="flex w-[105px] flex-row items-center gap-x-1 xs:w-[118px] sm:flex-col sm:gap-y-1">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={iconPath}
                      alt={altPath}
                      fetchpriority="high"
                      width={25}
                      height={25}
                      className="h-auto object-cover object-center xs:w-[35px]"
                    />
                  </div>
                  <span className="font-outfit text-xs xs:text-sm">{path}</span>
                </div>
                <div className="flex w-[105px] flex-row items-center gap-x-1 xs:w-[118px] sm:flex-col sm:gap-y-1">
                  <div className="flex w-fit flex-col items-center justify-center">
                    <img
                      src={iconType}
                      alt={altType}
                      fetchpriority="high"
                      width={25}
                      height={25}
                      className="h-auto object-cover object-center xs:w-[30px]"
                    />
                  </div>
                  <span className="font-outfit text-xs xs:text-sm">{type}</span>
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
