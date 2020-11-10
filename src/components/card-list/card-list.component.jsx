import React from 'react';
// named exports like 'Card' require brackets to be imported.
import { Card } from '../card/card.component.jsx';
import './card-list.styles.css';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {
        props.assassins.map(assassin => 
          <Card key={assassin.id} assassin={assassin} />
        )
      }
    </div>
  )
};