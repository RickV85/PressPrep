import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import ArticleView from "../ArticleView/ArticleView";
import { useState } from "react";
import { Multimedia } from "../../Components/ArticleTile/ArticleTile";

export interface Article {
  title: string;
  multimedia: Multimedia[];
  byline: string;
  abstract: string;
  section: string;
  subsection: string;
  url: string;
}

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState <Article>();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            setSelectedArticle={setSelectedArticle}
          />
        }
      />
      <Route
        path="/article/*"
        element={
          <ArticleView
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
          />
        }
      />
    </Routes>
  );
}
