import './App.css';
import './style.css';
import Form from './Form';
import Card from './Card';
import Todolist from './Todolist'
import {useState} from 'react';

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      titre: "Faire mon projet React",
      message: "A terminer pour jeudi",
    }
  ])

    return (
      <div className="container">
        <Form setCards={setCards} cards={cards} />
        <Todolist cards={cards} setCards={setCards}/>
        </div>
      );
}

export default App;
