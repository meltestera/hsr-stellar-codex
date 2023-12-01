import { Link } from "react-router-dom";

const CharacterIcon = ({ character }) => {
  return (
    <>
      <Link to={`${character.name}`}>
        <img
          src={character.src}
          alt={character.alt}
          loading="lazy"
          width="96px"
          height="96px"
          type="image/webp"
          className="max-h-24 w-auto object-cover object-center"
        />
      </Link>
    </>
  );
};

export default CharacterIcon;
