const CharacterEidolons = ({ character }) => {
  return (
    <>
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
    </>
  );
};

export default CharacterEidolons;
