import ArticleTile from "../../Components/ArticleTile/ArticleTile";
import "./NewsResults.css";

interface Props {
  newsData: [] | undefined;
}

export default function NewsResults({ newsData }: Props) {
  return (
    <section className="news-results">
      { newsData ?
        newsData.map((articleData, i) => {
          return <ArticleTile articleData={articleData} key={i} />;
        }) : null}
    </section>
  );
}
