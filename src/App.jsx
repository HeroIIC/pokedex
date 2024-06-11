import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./MyTitle"
import PokemonCard from './components/PokemonCard'
const PokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonCard Pokemon={PokemonList[0]}/>
      
    </>
  )
}

export default App


