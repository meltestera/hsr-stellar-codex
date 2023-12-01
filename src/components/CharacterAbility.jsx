const CharacterAbility = ({ character }) => {
  return (
    <>
      <div>
        <div>
          <h1>{character.abilityTitle[0]}</h1>
          <b>{character.abilityTree[0]}</b>
        </div>
        <div>
          <h1>{character.abilityTitle[1]}</h1>
          <b>{character.abilityTree[1]}</b>
        </div>
        <div>
          <h1>{character.abilityTitle[2]}</h1>
          <b>{character.abilityTree[2]}</b>
        </div>
        <div>
          <h1>{character.abilityTitle[3]}</h1>
          <b>{character.abilityTree[3]}</b>
        </div>
        <div>
          <h1>{character.abilityTitle[4]}</h1>
          <b>{character.abilityTree[4]}</b>
        </div>
      </div>
    </>
  );
};

export default CharacterAbility;
