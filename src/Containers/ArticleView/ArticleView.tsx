import Nav from "../../Components/Nav/Nav";
import ArticleDetail from "../../Components/ArticleDetail/ArticleDetail";
import { Multimedia } from "../../Components/ArticleTile/ArticleTile";

interface Props {
  selectedArticle: undefined | {
    title: string;
    multimedia: Multimedia[];
    section: string;
    subsection: string;
  };
  setSelectedArticle: Function;
}

export default function ArticleView({selectedArticle, setSelectedArticle}: Props) {
  

  return (
    <main>
      <Nav />
      <ArticleDetail selectedArticle={selectedArticle} />
    </main>
  )
}