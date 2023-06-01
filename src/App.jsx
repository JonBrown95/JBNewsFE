import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import Homepage from "./Components/Homepage";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
        <Route path="/topics" element={<Topics/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
