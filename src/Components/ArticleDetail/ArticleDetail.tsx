import "./ArticleDetail.css";
import { Multimedia } from "../ArticleTile/ArticleTile";
import StringUtil from "../../util/util";

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

export default function ArticleDetail({ selectedArticle }: Props) {

  const jumboImg = selectedArticle?.multimedia?.find(
    (pic) => pic.format === "Super Jumbo"
  );

  let title;

  if (selectedArticle?.title) {
    title = <h2 className="article-title">{selectedArticle?.title}</h2>;
  } else {
    title = (
      <h2 className="link">
        Error loading article detail. Please return to the home page by clicking
        the site title above.
      </h2>
    );
  }

  let section;
  let subsection;

  if (selectedArticle?.section) {
    section = StringUtil.capFirstLetter(selectedArticle.section);
  }
  if (selectedArticle?.subsection) {
    subsection = `/ ${StringUtil.capFirstLetter(selectedArticle.subsection)}`;
  } else {
    subsection = "";
  }

  let link;

  if (selectedArticle?.url) {
    link = (
      <a className="article-copy link" href={selectedArticle?.url}>
        Link to article on NYT.com
      </a>
    );
  }

  return (
    <section className="article-view">
      <article className="article-detail">
        <div className="article-content">
          <img
            src={
              jumboImg
                ? jumboImg.url
                : `https://st.depositphotos.com/1011646/1255/i/600/depositphotos_12553000-stock-photo-breaking-news-screen.jpg`
            }
            className="jumbo-img"
          />
          <div className="article-copy-section">
            {title}
            <p className="article-copy">{selectedArticle?.byline}</p>
            <p className="article-copy">{selectedArticle?.abstract}</p>
            <p className="article-copy section-name">
              {section} {subsection}
            </p>
            {link}
          </div>
        </div>
      </article>
    </section>
  );
}
