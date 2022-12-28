import React, { FC } from 'react';
import { ICharacter } from '../../inretfaces';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.css';

interface IProps {
  data: ICharacter;
}

const CharacterCard: FC<IProps> = ({ data }) => {
  return (
    <Link to={`/character/${data.id}`}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={data.image}
          alt={data.name}
          width={280}
          height={280}
        />
        <div className={styles.name}>{data.name}</div>
      </div>
    </Link>
  );
};

export default CharacterCard;
