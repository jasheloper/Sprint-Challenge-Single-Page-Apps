import React from 'react';

export default function CharacterCard(props) {
    return (
      <div>
        <h2>Name: {props.episode.name}</h2>
        <h3>Episode: {props.episode.episode}</h3>
        <h3>Air Date: {props.episode.air_date}</h3>
      </div>
    );
  }