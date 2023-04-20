import "./ArticleTile.css";
import StringUtil from "../../util/util";
import { NavLink } from "react-router-dom";

export interface Props {
  articleData: {
    title: string;
    multimedia: Multimedia[];
    section: string;
    subsection: string;
  };
  setSelectedArticle: Function;
}

export interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export default function ArticleTile({ articleData, setSelectedArticle }: Props) {
  
  const thumbnailImg = articleData?.multimedia?.find(
    (pic) => pic.format === "Large Thumbnail"
  );

  let section;
  let subsection;

  if (articleData.section) {
    section = StringUtil.capFirstLetter(articleData.section);
  }
  if (articleData.subsection) {
    subsection = StringUtil.capFirstLetter(articleData.subsection);
  }

  return (
    <section className="article-tile">
      <img className="tile-img" src={thumbnailImg ? thumbnailImg?.url : `Image N/A`} />
      <NavLink to={`/article/${articleData.title}`} className='navlink' onClick={event => setSelectedArticle(articleData)}>
        <h3 className="tile-title">{articleData.title}</h3>
      </NavLink >
      <p className="tile-category">
        {section}
        <br />
        {subsection}
      </p>
    </section>
  );
}
