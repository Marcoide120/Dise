import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'





function App() {

  const [pokemon, setPokemon] = useState({
    id: -1, name: "SIN NOMBRE", weight: -1,
    height: 0, imgFront: "miss.png", imgBack: "miss.png"
  });

  function fetchPokemon(apiEndPoint) {
    fetch(apiEndPoint)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        console.log(resultado)
        let pkm = {
          id: resultado.id, name: resultado.name, weight: resultado.weight,
          height: resultado.height,
          imgFront: resultado.sprites.front_default, imgBack: resultado.sprites.back_default
        }
        console.log(pkm)
        setPokemon(pkm)
      })

  }

  function handleClick(nextId) {
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${nextId}`)
  }

  useEffect(() => fetchPokemon("https://pokeapi.co/api/v2/pokemon/ditto"), [])

  return (
    <>
      <section>

        <article className='flex flex-col align-middle justify-center text-center mt-8 text-2xl'>
          <div className='flex self-center mb-8'>
            <img height="200" width="200" src={pokemon.imgBack} alt="Imagen Pokemon Back" />
            <img height="200" width="200" src={pokemon.imgFront} alt="Imagen Pokemon Front" />
          </div>
          <h1 className='font-bold'>{pokemon.id} - {pokemon.name}</h1>
          <h4>Peso: {pokemon.weight}</h4>
          <h4>Altura: {pokemon.height}</h4>

        </article>

        <div className='flex align-middle justify-center mt-8 gap-4'>
          <button className='self-center p-5 bg-slate-950 hover:bg-slate-700 text-white'
            onClick={() => handleClick(pokemon.id - 1)}> Anterior</button>
          <button className='self-center p-5 bg-slate-950 hover:bg-slate-700 text-white '
            onClick={() => handleClick(pokemon.id + 1)}>  Siguiente</button>

        </div>

      </section>



    </>
  )
}

export default App
