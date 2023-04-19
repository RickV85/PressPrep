import { useState, useEffect } from 'react';
import './NewsSelector.css'

interface Props {
  newsType: string;
  setNewsType: Function;
}

export default function NewsSelector({newsType, setNewsType} : Props) {
  const [selectedNews, setSelectedNews] = useState(newsType);

  useEffect(() => {
    setNewsType(selectedNews)
  }, [selectedNews])
 
  return (
    <section className='news-selector'>
      <h2 className='choose-news'>Choose your news:</h2>
      <select className='news-dropdown' onChange={(event) => setSelectedNews(event.target.value)}>
        <option value="home">Home (Top Stories)</option>
        <option value="us">US News</option>
        <option value="world">World News</option>
        <option value="arts">Arts</option>
        <option value="automobiles">Automobiles</option>
        <option value="books">Books</option>
        <option value="business">Business</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="health">Health</option>
        <option value="insider">Insider</option>
        <option value="magazine">Magazine</option>
        <option value="movies">Movies</option>
        <option value="nyregion">NY Region</option>
        <option value="obituaries">Obituaries</option>
        <option value="opinion">Opinion</option>
        <option value="politics">Politics</option>
        <option value="realestate">Real Estate</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="sundayreview">Sunday Review</option>
        <option value="technology">Technology</option>
        <option value="theater">Theater</option>
        <option value="t-magazine">T-Magazine</option>
        <option value="travel">Travel</option>
        <option value="upshot">Upshot</option>
      </select>
    </section>
  )
}