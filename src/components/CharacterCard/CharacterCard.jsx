import "./character-cards.css"

export function CharacterCard ({charactersData}){
  return(
    <section id='character-cards'>
      {
        charactersData.map((character)=>{
          return getCardElement(character)
        })
      }
    </section>
  );
}

function getCardElement(cardData){
  return (
    <div className="card" key={cardData.name}>
      <div className="card-titles">
        <h3>{cardData.name}</h3>
        {cardData.nickName && <h4>{cardData.nickName}</h4>}
      </div>
      <img src={cardData.imgUrl} alt="" />
      <p>{cardData.description}</p>
    </div>
  )
}