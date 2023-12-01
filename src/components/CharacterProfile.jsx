const CharacterProfile = ({ character }) => {
  return (
    <>
      <div className="text-center">
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
