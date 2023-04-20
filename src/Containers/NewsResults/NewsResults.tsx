import ArticleTile, { Multimedia } from "../../Components/ArticleTile/ArticleTile";
import "./NewsResults.css";

interface Props {
  newsData: [] | undefined;
  loading: boolean;
  errorMsg: string;
  setSelectedArticle: Function;
}

interface ArticleData {
  title: string;
  multimedia: Multimedia[];
  section: string;
  subsection: string;
};

export default function NewsResults({ newsData, loading, errorMsg, setSelectedArticle }: Props) {
  return (
    <section className="news-results">
      {loading ? <p className="loading">Loading...</p> : null}
      {errorMsg ? <p className="loading">{errorMsg}</p> : null}
      { newsData ?
        newsData.map((articleData, i) => {
          return (
            <ArticleTile articleData={articleData} setSelectedArticle={setSelectedArticle} key={i} />
          )
        }) : null}
    </section>
  );
}
