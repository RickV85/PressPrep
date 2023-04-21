import Nav from "../../Components/Nav/Nav";
import ArticleDetail from "../../Components/ArticleDetail/ArticleDetail";
import { Multimedia } from "../../Components/ArticleTile/ArticleTile";

interface Props {
  selectedArticle:
    | undefined
    | {
        title: string;
        multimedia: Multimedia[];
        byline: string;
        abstract: string;
        section: string;
        subsection: string;
        url: string;
      };
}

export default function ArticleView({
  selectedArticle
}: Props) {
  return (
    <main>
      <Nav />
      <ArticleDetail selectedArticle={selectedArticle} />
    </main>
  );
}
