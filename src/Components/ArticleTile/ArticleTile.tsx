import './ArticleTile.css'

export default function ArticleTile() {

  return (
    <section className='article-tile'>
      <img className='tile-img' src='https://static01.nyt.com/images/2023/04/19/multimedia/19dominion-cwfh/19dominion-cwfh-thumbLarge.jpg' />
      <h3 className='tile-title'>What’s Next for Dominion After Its $787.5 Million Settlement With Fox News?</h3>
      <p className='tile-category'>Business<br/>Media</p>
    </section>
  )
}