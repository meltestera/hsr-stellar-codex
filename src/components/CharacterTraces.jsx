const CharacterTraces = ({
  characterTracesTitle,
  characterTracesDesc,
  characterImageTraces,
  characterAltTraces,
}) => {
  return (
    <>
      <div>
        {characterTracesDesc.map((trace, index) => (
          <div key={index}>
            <div>
              <img
                src={characterImageTraces[index]}
                alt={characterAltTraces[index]}
              />
              <b>{characterTracesTitle[index]}</b>
              <b>{trace}</b>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterTraces;
