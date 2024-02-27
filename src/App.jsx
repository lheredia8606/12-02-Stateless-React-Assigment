import { navLinks, charactersData } from "./data"
import './style/reset.css'
import './style/style.css'
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent"
import { CharacterRatings } from "./components/CharacterRating/CharacterRating"
import { CharacterCard } from "./components/CharacterCard/CharacterCard"


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
