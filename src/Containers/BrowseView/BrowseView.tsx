import './BrowseView.css'
import { useEffect, useState } from 'react';
import NewsSelector from '../../Components/NewsSelector/NewsSelector';
import NewsResults from '../NewsResults/NewsResults';
import getNewsResults from '../../APICalls';


export default function BrowseView() {
  const [newsData, setNewsData] = useState(undefined);
  const [newsType, setNewsType] = useState("home");

  useEffect(() => {
    getNewsResults(newsType)
    .then(data => {
      if (data) {
        setNewsData(data.results)
      }
    })
    .catch(error => {
      alert(error)
    })
  }, [newsType])

  return (
    <section className="browse-view">
      <NewsSelector newsType={newsType} setNewsType={setNewsType} />
      <NewsResults newsData={newsData} />
    </section>
  )
}