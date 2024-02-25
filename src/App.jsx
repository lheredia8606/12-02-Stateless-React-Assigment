import { HeaderComponent } from "./Class-Components/HeaderComponent"
import { navLinks, charactersData } from "./Data"
import './Style/reset.css'
import './Style/style.css'
import './Style/header.css'
import './Style/character-ratings.css'
import './Style/character-cards.css'
import { CharacterRatings } from "./Function Component/Character-Rating"
import { CharacterCard } from "./Function Component/Character -Card"


function App() {
  return (
    <>
      <HeaderComponent links={navLinks}/>
      <CharacterRatings charactersData={charactersData}/>
      <CharacterCard charactersData={charactersData}/>
    </>
  )
}

export default App
