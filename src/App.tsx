import './App.css'
import Block from './components/Block'

const b1: string = "Bloque 1";

function App() {

  return (
    <div className="text-center">
      <Block text={b1} tailwind="bg-green-400 bg-auto"/>
      <Block text="Bloque 2" tailwind="bg-blue-400 bg-auto">
        <Card></Card> 
      </Block>
      <Block text="Bloque 3" tailwind="bg-yellow-400 bg-auto"/>
      {/* <Card></Card> */}
    </div>
  )
}

export default App

function Card() {
  return(
    <h1>Hello world</h1>
  )
}