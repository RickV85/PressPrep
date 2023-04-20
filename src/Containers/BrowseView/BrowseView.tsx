import "./BrowseView.css";
import { useEffect, useState } from "react";
import NewsSelector from "../../Components/NewsSelector/NewsSelector";
import NewsResults from "../NewsResults/NewsResults";
import getNewsResults from "../../APICalls";
import { Multimedia } from "../../Components/ArticleTile/ArticleTile";

interface Props {
  setSelectedArticle: Function;
}

export default function BrowseView({
  setSelectedArticle,
}: Props) {
  const [newsData, setNewsData] = useState(undefined);
  const [newsType, setNewsType] = useState("home");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setLoading(true);
    getNewsResults(newsType)
      .then((data) => {
        if (data) {
          setNewsData(data.results);
          setLoading(false);
        }
      })
      .catch((error) => {
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
