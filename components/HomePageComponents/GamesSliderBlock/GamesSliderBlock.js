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


export const GamesSliderBlock = ({t, type, games}) => {
  const {height, width} = useWindowDimensions();

  let itemsCount = 5;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 5;
  }
  let slides = [];

  if (type === 'NEW_GAMES') {
    if (games.loading) {
      // console.log('loading')
      return <h1>Loading...</h1>
    } else {
      slides = games.games.results.sort((a, b) => a.release_date - b.release_date);
    }
  } else if (type === 'JACKPOT_GAMES') {
    if (games.loading) {
      // console.log('loading')
      return <h1>Loading...</h1>
    } else {
      // filter by type 4 not found any games
      slides = games.games.results.filter((a) => a.type === 1);
    }
  } else if (type === 'TABLE_GAMES') {
    if (games.loading) {
      // console.log('loading')
      return <h1>Loading...</h1>
    } else {
      // filter by type 2 not found any games
      slides = games.games.results.filter((a) => a.type === 1);
      // console.log(slides, 'slidessssssss')
    }
  }

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
    infinite: true,
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
          {slides.map((el, ind) => {
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