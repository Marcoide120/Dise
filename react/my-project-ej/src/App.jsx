import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyButton } from './components/MyButton'

/* function MyCarousel({children}){
  return(
    <>
      <div className='bg-blue-400 p-4'>
        {children}
      </div>
    </>
  )
}

function Cuadro({children}){
  return(
    <>
      <div className=' border-4 border-dotted border-blue-600'>
        {children}
        <h3>TITULO</h3>
      </div>
    </>
  )
} */


function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>

      <h1>El contador está a: {count}</h1><br/>
      <button onClick={handleClick}>Aumentar el contador</button>
      
      
      {/* <h1>Hola</h1>
      <MyButton text={"Hola"}/>
      <MyButton text={"Adios"}/>
      <MyButton text={"Nos vemos"}/>
      <MyButton text={"Hasta luego"}/>

      <Cuadro>
      <MyButton text={"Nos vemos"}/>
    </Cuadro>

    <MyCarousel>

      <MyButton text={"Hola"}/>
      <MyButton text={"Adios"}/>
      <MyButton text={"Nos vemos"}/>
      <MyButton text={"Hasta luego"}/>

    </MyCarousel> */}

    

    </>
  )
}

export default App
