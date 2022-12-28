import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useGetCharacterDetailsByIdQuery } from "../../store/api/characters";

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
      <div>Name: {data.name}</div>
      <div>Gender:{data.gender}</div>
      <div>Species: {data.species}</div>
      <div>Location: {data.location.name}</div>
    </div>
  );
};

export default CharacterDetailsPage;
