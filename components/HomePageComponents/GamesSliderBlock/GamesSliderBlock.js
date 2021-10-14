import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
import axios from 'axios';
import {gamesImagesUrl} from "../../../redux/url/url";
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";


import {urlGen} from "./url";
import {GameHoverButtons} from "./GameHoverButtons";
import {useEffect, useState} from "react";


export const GamesSliderBlock = ({t, type, games}) => {
  const {height, width} = useWindowDimensions();
  let load = games.loading;
  let itemsCount = 5;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 5;
  }
  let slides = [];
  const [someSlides, setSomeSlides] = useState([]);
useEffect(() => {
  if (type === 'NEW_GAMES') {
    if (games.loading) {

      return <h1>Loading...</h1>
    } else {
      setSomeSlides(games.games.results)
      // setSomeSlides(games.games.results.slice(0, games.games.results.length).sort((a, b) => a.release_date - b.release_date));
      console.log(someSlides, 'GAMES SLIDERs');
    }
  } else if (type === 'JACKPOT_GAMES') {
    if (games.loading) {

      return <h1>Loading...</h1>
    } else {
      // filter by type 4 not found any games .filter((a) => a.type === 1)
      setSomeSlides(games.games.results);
    }
  } else if (type === 'TABLE_GAMES') {
    if (games.loading) {

      return <h1>Loading...</h1>
    } else {
      // filter by type 2 not found any games .filter((a) => a.type === 1)
      setSomeSlides(games.games.results);

    }
  }
}, [load])



    function SampleNextArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={styles.nextArr}
          onClick={onClick}
        />
      );
    };
    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={styles.prevArr}
          onClick={onClick}
        />
      );
    };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    rows: 2,
    slidesPerRow: itemsCount,
    // slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <section className={styles.sliderMainWrapper}>
      <div className={`${type === 'NEW_GAMES' 
        ? styles.sliderHeadingNewGames : type === 'JACKPOT_GAMES' 
        ? styles.sliderHeadingJackpotGames : type === 'TABLE_GAMES'
        ? styles.sliderHeadingTableGames : styles.sliderHeadingTableGames
      } ${styles.sliderHeading}`}></div>
      <div className={styles.gamesWrapper}>
        <Slider {...sliderSettings}>
          {someSlides.map((el, ind) => {
            return (
                <div className={styles.slideItemsWrapperDesc} key={ind}>
                  {
                    <div className={styles.gameItemWrapper}>
                      <GameHoverButtons t={t} gameData={el}/>
                      <img key={el.id} src={urlGen(el.id)} alt={`game ${el.name}`}/>
                    </div>
                  }
                </div>
            )
          })}
        </Slider>

        <div className={styles.controlPanel}>
          <Link href={'/#'}><a>{t(`homePage.moreButton`)}</a></Link>
        </div>
      </div>
    </section>
  )
}