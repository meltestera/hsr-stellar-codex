import { Link } from "react-router-dom";

const CharacterProfile = ({ character }) => {
  return (
    <>
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
        <span className="text-4xl font-bold"> {character.name}</span>
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
    </>
  );
};

export default CharacterProfile;
