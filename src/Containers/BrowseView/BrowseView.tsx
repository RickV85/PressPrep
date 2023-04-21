import "./BrowseView.css";
import { useEffect, useState } from "react";
import NewsSelector from "../../Components/NewsSelector/NewsSelector";
import NewsResults from "../NewsResults/NewsResults";
import getNewsResults from "../../APICalls";
import { Multimedia } from "../../Components/ArticleTile/ArticleTile";

interface Props {
  setSelectedArticle: Function;
}

interface Article {
  title: string;
  multimedia: Multimedia[];
  byline: string;
  abstract: string;
  section: string;
  subsection: string;
  url: string;
}

export default function BrowseView({ setSelectedArticle }: Props) {
  const [newsData, setNewsData] = useState(undefined);
  const [newsType, setNewsType] = useState("home");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setLoading(true);
    getNewsResults(newsType)
      .then((data) => {
        if (data) {
          const cleanData = data.results.map((article: Article) => {
            const newArticle = {
              section: article.section,
              subsection: article.subsection,
              title: article.title,
              abstract: article.abstract,
              url: article.url,
              byline: article.byline,
              multimedia: article.multimedia,
            };
            return newArticle;
          });
          setNewsData(cleanData);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
        setErrorMsg(`An error occurred, please try refreshing`);
      });
  }, [newsType]);

  return (
    <section className="browse-view">
      <NewsSelector newsType={newsType} setNewsType={setNewsType} />
      <NewsResults
        newsData={newsData}
        loading={loading}
        errorMsg={errorMsg}
        setSelectedArticle={setSelectedArticle}
      />
    </section>
  );
}
