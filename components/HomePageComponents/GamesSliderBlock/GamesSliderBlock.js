import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
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
  let load = games.loading;


  let itemsCount = 5;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 5;
  }
  let slides = [];

    if (type === 'NEW_GAMES') {
      if (games.loadingNewGames) {

        return <h1>Loading...</h1>
      } else {
        let newGamesSlicedArr = games.newGames.results.slice();
        slides = newGamesSlicedArr;

      }
    } else if (type === 'JACKPOT_GAMES') {
      if (games.loadingJackpotGames) {

        return <h1>Loading...</h1>
      } else {
        // filter by type 4
        let jackpotSlicedArr = games.jackpotGames.results.slice();
        slides = jackpotSlicedArr;

      }
    } else if (type === 'TABLE_GAMES') {
      if (games.loadingTableGames) {

        return <h1>Loading...</h1>
      } else {
        // filter by type 2
        let tableSlicedGames = games.tableGames.results.slice();
        slides = tableSlicedGames;


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
          {slides.map((el, ind) => {
            return (
                <div className={styles.slideItemsWrapperDesc} key={ind}>
                  {
                    <div className={styles.gameItemWrapper}>
                      <GameHoverButtons t={t} gameData={el}/>
                      <Image
                        // placeholder={"blur"}
                        // blurDataURL={'/assets/img/empty.webp'}
                        layout={"fill"}
                        key={el.id}
                        src={urlGen(el.id)}
                        alt={`Game ${el.name}`}/>
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