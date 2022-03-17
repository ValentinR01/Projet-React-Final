import {Component} from 'react';
import React from 'react';
import Card from './Card';

const Todolist = ({cards, setCards}) => {
    function deleteCard(id) {
         const updatedCards = cards.filter((card) => card.id !== id)
         setCards(updatedCards)
      }
        
    const displayCards = () => {
        return cards.map((card) => (
                <Card key={card.id} titre={card.titre} message={card.message} id={card.id} deleteCard={deleteCard}/>
        ))
}
return (
    <div className='Todolist'>
        <h2>To start</h2>
        <div class="cardContainer">
        {displayCards()}
        </div>
        </div>
)
}



export default Todolist