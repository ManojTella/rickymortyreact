import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.status} - {character.species}</p>
      <p>Last seen on {character.location.name}</p>
    </div>
  );
};

export default CharacterCard;
