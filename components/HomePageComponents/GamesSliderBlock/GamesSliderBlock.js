import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
import axios from 'axios';
import {gamesImagesUrl} from "../../../redux/url/url";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import {useEffect} from "react";



export const GamesSliderBlock = ({type, games}) => {
let heading = '';
let images = [];
let slides = [];

if (type === 'NEW_GAMES') {
  heading = 'New Games';
  if (games.loading) {
    console.log('loading')

  } else {

    let sorted = games.games.results.sort((a, b) => a.release_date - b.release_date);
    console.log(sorted, 'slider');
    const itemsCount = 10;
    let countSlides = sorted.length / 10;
    let counter = 0;
    let items = [];
      sorted.forEach((el, ind, arr) => {
        if ( ind % 10 === 0 && ind !== 0 ) {
          console.log(ind, 'new slide')

          slides.push(
            <div key={ind}>
              {items}
            </div>
          )
          items = [];
          items.push(
            <div>
              <Image  key={el.id} src={'/assets/img/gameSlider/game.png'} width={248} height={371} alt={'game' + el.name}/>
            </div>
          )
        } else if (ind === arr.length - 1 ) {
          items.push(
            <div>
              <Image  key={el.id} src={'/assets/img/gameSlider/game.png'} width={248} height={371} alt={'game' + el.name}/>
            </div>
          )
          slides.push(
            <div key={ind}>
              {items}
            </div>
          )
        } else {
          items.push(
            <div>
              <Image  key={el.id} src={'/assets/img/gameSlider/game.png'} width={248} height={371} alt={'game' + el.name}/>
            </div>
          )
        }
      });
    console.log(slides, 'asd');
  }
} else if (type === 'JACKPOT_GAMES') {
  heading = 'Jackpot Games';
  if (games.loading) {
    console.log('loading')
  } else {
    let sorted = games.games.results.sort((a, b) => b.times_played - a.times_played);
    console.log(sorted, 'slider')
  }
}
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
  return (
    <section className={styles.sliderMainWrapper}>
      <div className={styles.sliderHeading}>{heading}</div>
      <div className={styles.gamesWrapper}>
        <Slider {...sliderSettings}>
          {slides.map((el, ind) => {
            return (
              <div className={styles.slideItemsWrapper} key={ind}>
                {el}
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}