import './NewsSelector.css'

export default function NewsSelector() {

  return (
    <section className='news-selector'>
      <h2 className='choose-news'>Choose your news:</h2>
      <select className='news-dropdown'>
        <option>Options</option>
      </select>
    </section>
  )
}