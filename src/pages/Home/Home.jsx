import React from 'react'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import Navbar from '../../components/Navbar/Navbar'
import hero_title from '../../assets/hero_title.png'
import play from'../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='captions-img'/>
          <p>Discovering his ties to a secret ancinet order, a young man living in modern Istanbul
            embarks on a quesr to save the city from an imortal enemy.
          </p>
        <div className="hero-btns">
          <button className='btn'><img src={play} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
        </div>
        <Titlecards className='title-cards'/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecards title={"Only on Netflix"} category={'popular'}/>
      <Titlecards title={"Upcoming"} category={"upcoming"}/>
      <Titlecards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
