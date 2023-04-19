import './BrowseView.css'
import NewsSelector from '../../Components/NewsSelector/NewsSelector'
import NewsResults from '../NewsResults/NewsResults'

export default function BrowseView() {


  return (
    <section className="browse-view">
      <NewsSelector />
      <NewsResults />
    </section>
  )
}