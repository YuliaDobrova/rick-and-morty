import React from 'react';
import CharacterCard from '../../components/CharacterCard';
import { useGetAllCharactersQuery } from '../../store/api/characters';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { data: allCharacters, isLoading, error } = useGetAllCharactersQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <>
      <div className={styles.container}>
        {allCharacters?.results.map((characterData) => (
          <CharacterCard key={characterData.id} data={characterData} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
