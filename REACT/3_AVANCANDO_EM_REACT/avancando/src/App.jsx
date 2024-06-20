import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
// Props
import ShowUserName from './components/ShowUserName'
// Desestruturando props
import CarDetails from './components/CarDetails'
// Renderizaçãao de listas com componente 
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 1, brand: "KIA", color: "Branco", km: 200000},
  {id: 1, brand: "Renault", color: "Azul", km: 32444},
];
// import fragments
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'

import Message from './components/Message'



function App() {
  function showMessage(){
    console.log("Evento do componente pai")
  }
  const [message, setMessage] = useState("")

  const handleMessage = (msg)=> {
    setMessage(msg)
  }
  
  return (
    
    <div style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      <img src="/img.jpg" alt="imagem"/>
      <img src={night} alt="imagem noite" />
      <Data/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name="Eduardo"/>
      <CarDetails brand="Suzuki" km={79000} color="Prata"/>
      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={59000} color="Preto"/>
      <CarDetails brand="Toyota" km={7400} color="Branco"/>
      {/* Reutilização de lista com componente */}
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* Fragment */}
      <Fragment/>
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
    </div>
  )
}

export default App
