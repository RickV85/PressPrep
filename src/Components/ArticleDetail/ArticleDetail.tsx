import './ArticleDetail.css'
import { Multimedia } from '../ArticleTile/ArticleTile';
import StringUtil from "../../util/util";

interface Props {
  selectedArticle: undefined | {
    title: string;
    multimedia: Multimedia[];
    byline: string;
    abstract: string;
    section: string;
    subsection: string;
    url: string;
  };
}

export default function ArticleDetail({selectedArticle}: Props) {
  console.log(selectedArticle)

  const jumboImg = selectedArticle?.multimedia?.find(
    (pic) => pic.format === "Super Jumbo"
  );

  let section;
  let subsection;

  if (selectedArticle?.section) {
    section = StringUtil.capFirstLetter(selectedArticle.section);
  }
  if (selectedArticle?.subsection) {
    subsection = `/ ${StringUtil.capFirstLetter(selectedArticle.subsection)}`;
  } else {
    subsection = '';
  }

  return (
    <section className='article-view'>
      <article className='article-detail'>
        <div className='article-content'>
          <img src={jumboImg ? jumboImg.url : `Image N/A`} className='jumbo-img' />
          <div className='article-copy-section'>
            <h2 className='article-title'>{selectedArticle?.title}</h2>
            <p className='article-copy'>{selectedArticle?.byline}</p>
            <p className='article-copy'>{selectedArticle?.abstract}</p>
            <p className='article-copy section-name'>{section} {subsection}</p>
            <a className='article-copy link' href={selectedArticle?.url}>Link to article on NYT.com</a>
          </div>
        </div>
      </article>
    </section>
  )
}