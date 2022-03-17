import {Component} from 'react';
import React from 'react';

export default function Card({titre, message, id, deleteCard}) {
    
        return (
            <div className="card" key={id}>
                <h5>{titre}</h5>
                <p>{message}</p>
                <button className='deleteButton' id={id}  onClick={() => deleteCard(id)}>Delete</button>
            </div>
        )
}



