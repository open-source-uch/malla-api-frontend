import './App.css'
import Block from './components/Block'

function App() {

  return (
    <div className="text-center">
      <Block text="Bloque 1" tailwind="bg-green-400 bg-auto"/>
      <Block text="Bloque 2" tailwind="bg-blue-400 bg-auto"/>
      <Block text="Bloque 3" tailwind="bg-yellow-400 bg-auto"/>
    </div>
  )
}

export default App
