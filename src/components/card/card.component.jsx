import React from 'react';
import './card.styles.css';

export const Card = (props) => {

  return (
    <div className="card-container">
      <img alt="asassin" src={`https://robohash.org/${props.assassin.id}?set=set2`} />
      <h3> {props.assassin.name} </h3>
      <p className="font-weight-bold">{props.assassin.email}</p>
    </div>
  )
};