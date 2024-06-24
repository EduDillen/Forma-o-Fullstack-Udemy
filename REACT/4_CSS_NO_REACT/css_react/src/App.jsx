
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'


function App() {

  const n = 15
  const redTitle = true
  return (
    <>
      {/* Css Global */}
      <h1>CSS No React</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Pegou o CSS de componente</p>
      {/* Inline style */}
      <p style={{color: "blue", padding:"25px", borderTop: "3px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* inline sty;e dinâmico */}
      <h2 style={n>10? {color: "purple"}: {color: "magenta"}}>
        CSS dinâmico
      </h2>
      <h2 style={n>20? {color: "purple"}: {color: "magenta"}}>
        CSS dinâmico 2
      </h2>
      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
      Este título vai ter uma classe
      </h2>
      {/* CSS Models */}
      <Title/>
    </>
  )
}

export default App
