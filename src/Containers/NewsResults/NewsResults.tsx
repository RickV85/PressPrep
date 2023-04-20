import { NavLink } from "react-router-dom";
import ArticleTile from "../../Components/ArticleTile/ArticleTile";
import "./NewsResults.css";

interface Props {
  newsData: [] | undefined;
  loading: boolean;
  errorMsg: string;
}

interface ArticleData {
  title: string;
  multimedia: [];
  section: string;
  subsection: string;
};

export default function NewsResults({ newsData, loading, errorMsg }: Props) {
  return (
    <section className="news-results">
      {loading ? <p className="loading">Loading...</p> : null}
      {errorMsg ? <p className="loading">{errorMsg}</p> : null}
      { newsData ?
        newsData.map((articleData: ArticleData, i) => {
          return (
            <NavLink to={`/article/${articleData.title}`} className='navlink'>
              <ArticleTile articleData={articleData} key={i} />
            </NavLink>
          )
        }) : null}
    </section>
  );
}
