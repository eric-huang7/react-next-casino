import Slider from "react-slick";
import styles from '../../styles/FooterArea/FooterArea.module.scss';
// import {GamesItem} from "../GamesPageComponents/GamesItem";
import {SliderComponent} from "../SearchGamesModalWindow/SliderComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GamesItem} from "./GameItem";
import GameItemErrorHandler from "./ErrorHandler/GameItemErrorHandler";


export const GamesSlider = ({t, gamesData, userInfo, activeSlots, activeTime, playFunClickHandler, playGameClickHandler}) => {

  let gamesLast = [];
  let gamesTop = [];
  if (activeTime) {
    if (!gamesData.loadingLatestGames) {
      gamesLast = gamesData.latestGames.results.map((el) => {
        return (
          <GameItemErrorHandler key={`${el.id} ${el.name} game page`}>
            <GamesItem
              t={t}
              playFunClickHandler={playFunClickHandler}
              playGameClickHandler={playGameClickHandler}
              userInfo={userInfo}
              gameData={el}
              key={`${el.id} ${el.name} game page`}
            />
          </GameItemErrorHandler>
          )
      })
    }
  } else {
    if (!gamesData.loadingTopGames) {
      gamesTop = gamesData.topGames.results.map((el) => {
        return (
          <GameItemErrorHandler key={`${el.id} ${el.name} game page`}>
            <GamesItem
              t={t}
              playFunClickHandler={playFunClickHandler}
              playGameClickHandler={playGameClickHandler}
              userInfo={userInfo}
              gameData={el}
              key={`${el.id} ${el.name} game page`}
            />
          </GameItemErrorHandler>
        )
      })
    }
  }


  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={styles.nextArr}
        onClick={onClick}
      >&gt;</div>
    );
  };
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={styles.prevArr}
        onClick={onClick}
      >&lt;</div>
    );
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 7,
    rows: 1,
    swipe: false,
    slidesToScroll: 1,
    className: `${styles.customSlider}`,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1725,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }
    ]
  }

  if (activeTime) {
    return (
      <SliderComponent t={t} sliderSettings={sliderSettings} itemsArr={gamesLast}/>
    )
  } else if (activeSlots) {
    return (
      <SliderComponent t={t} sliderSettings={sliderSettings} itemsArr={gamesTop}/>
      // <Slider {...sliderSettings}>
      //   {gamesTop}
      // </Slider>
    )
  } else {
    return (
      <Slider {...sliderSettings}>
        <div></div>
      </Slider>
    )
  }

}