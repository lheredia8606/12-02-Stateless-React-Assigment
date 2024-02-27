import "./character-ratings.css"

export function CharacterRatings({charactersData}){
  const top5 = getCharactersMoreVoted(charactersData);
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>SkillSet</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {
            top5.map((character, index)=>{
              return (
                getRowPerCharacter(character, index)
              )
            })
          }
        </tbody>
      </table>
    </section>
  );
}

function getCharactersMoreVoted(charactersData){
  const top5Characters = [...charactersData].sort((characterA, CharacterB)=>{
    return CharacterB.votes - characterA.votes;
  });
  return top5Characters.splice(0,5);
}

function getRowPerCharacter(character, index){
  const isEven = (index + 1) % 2 === 0;
  return (
    <tr className={isEven?'light': 'dark'} key={character.name}>
      <td>{`${character.name} ${character.nickName? '"'+ character.nickName+'"' :''}`}</td>
      <td>{character.skillSet.join(', ')}</td>
      <td>{character.votes}</td>
    </tr>
  )
}

