const CharacterTraces = ({ character }) => {
  return (
    <>
      <div>
        <div>
          <b>{character.tracesTitle[0]}</b>
          <p>{character.tracesDesc[0]}</p>
        </div>
        <div>
          <b>{character.tracesTitle[1]}</b>
          <p>{character.tracesDesc[1]}</p>
        </div>
        <div>
          <b>{character.tracesTitle[2]}</b>
          <p>{character.tracesDesc[2]}</p>
        </div>
      </div>
      <div>
        <div>
          <span>{character.tracesAttr[0]}</span>
          <span>{character.tracesAttr[1]}</span>
          <span>{character.tracesAttr[2]}</span>
        </div>
      </div>
    </>
  );
};

export default CharacterTraces;
