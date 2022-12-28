import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={""} element={<HomePage />} />
        <Route path={"/character/:id"} element={<CharacterDetailsPage />} />
        <Route path={"*"} element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
// npx create-react-app . --template typescript
// npm install -g npm@9.2.0
