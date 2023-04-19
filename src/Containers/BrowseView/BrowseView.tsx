import './BrowseView.css'
import NewsSelector from '../../Components/NewsSelector/NewsSelector'
import NewsResults from '../NewsResults/NewsResults'
import { useEffect, useState } from 'react';

export default function BrowseView() {
  const [newsData, setNewsData] = useState();
  const [newsType, setNewsType] = useState("");

  useEffect(() => {

  }, [])

  return (
    <section className="browse-view">
      <NewsSelector newsType={newsType} setNewsType={setNewsType} />
      <NewsResults />
    </section>
  )
}