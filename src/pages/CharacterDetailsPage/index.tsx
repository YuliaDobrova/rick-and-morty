import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useGetCharacterDetailsByIdQuery } from "../../store/api/characters";
import styles from "./CharacterDetailsPage.module.css";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCharacterDetailsByIdQuery(
    Number(id) || null
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <Navigate to="/" replace />;

  if (!data) return <h1>Empty data</h1>;

  return (
    <div style={{ padding: 20 }}>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 10,
          borderRadius: 30,
        }}
        src={data.image}
        alt={data.name}
      />
      <div className={styles.name}>Name: {data.name}</div>
      <div className={styles.text}>Gender: {data.gender}</div>
      <div className={styles.text}>Species: {data.species}</div>
      <div className={styles.text}>Location: {data.location.name}</div>
    </div>
  );
};

export default CharacterDetailsPage;
