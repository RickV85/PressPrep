import "./Home.css";
import Nav from "../../Components/Nav/Nav";
import BrowseView from "../BrowseView/BrowseView";
import { Multimedia } from "../../Components/ArticleTile/ArticleTile";

interface Props {
  setSelectedArticle: Function;
}

export default function Home({ setSelectedArticle}: Props) {
  return (
    <main>
      <Nav />
      <BrowseView
        setSelectedArticle={setSelectedArticle}
      />
    </main>
  );
}
