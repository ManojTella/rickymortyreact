import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(page);
      setCharacters(data.results);
    };

    getCharacters();
  }, [page]);

  return (
    <div>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
