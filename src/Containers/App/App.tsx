import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import ArticleView from "../ArticleView/ArticleView";


export default function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/*" element={<ArticleView />} />
    </Routes>
  )
}