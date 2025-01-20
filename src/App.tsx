import './App.css'
import Block from './components/Block'
import AddItem from './components/AddItem'
import Card from './components/Card'
import React from 'react'
const b1: string = "Bloque 1";

const card_list = [Card, Card];

const initialCardList = [Card];

function App() {

  const [cardList, setCardList] = React.useState(initialCardList);
  const handleSubmit = () => setCardList(cardList.concat(Card));

  return (
    
    <div className="text-center">
      <AddItem initialCardList={initialCardList} handleChange={handleSubmit} cardList={cardList}/>
      <Block text={b1} tailwind="bg-green-400 bg-auto" />
      <Block text="Bloque 2" tailwind="bg-blue-400 bg-auto">
        <CardList/>
        {/* <AddItem/> */}
      </Block>
      <Block text="Bloque 3" tailwind="bg-yellow-400 bg-auto" />
    </div>
  )
}

export default App

function CardList() {
  return (
    <div>
      {card_list.map((CardComponent, index) => (
        <div key={index}>
          {CardComponent && <CardComponent />}
        </div>
      ))}
    </div>
  )
}
