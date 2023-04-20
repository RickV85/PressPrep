import './ArticleDetail.css'

interface Props {
  selectedArticle: undefined | {
    title: string;
  };
}

export default function ArticleDetail({selectedArticle}: Props) {

  return (
    <section>
      <p>{selectedArticle?.title}</p>
    </section>
  )
}