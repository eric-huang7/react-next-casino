import styles from '../../styles/FooterArea/FooterArea.module.scss';
import {SliderComponent} from "./SliderComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameItemErrorHandler from "./ErrorHandler/GameItemErrorHandler";
import {GameItemContainer} from "../HomePageComponents/GamesSliderBlock/GameItemContainer";
import React from "react";

export const GamesSlider = ({t, gamesData, userInfo, activeSlots, activeTime, playFunClickHandler, playGameClickHandler}) => {

  let gamesLast = [];
  let gamesTop = [];

  if (activeTime && !gamesData.loadingLatestGames) {
    gamesLast = gamesData.latestGames.results
  } else if (!gamesData.loadingTopGames) {
    gamesTop = gamesData.topGames.results
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

  const items = (activeTime ? gamesLast : (activeSlots ? gamesTop : [])).map((el) => (
    <GameItemErrorHandler key={`${el.id} ${el.name} game page`}>
      <GameItemContainer
        w="185px"
        h="115px !important"
        m="10px !important"
        playGameClickHAndler={playFunClickHandler}
        playFunClickHandler={playGameClickHandler}
        t={t}
        gameData={el}
        user={userInfo}
        fontSize="14px"
      />
    </GameItemErrorHandler>
  ))

  return <SliderComponent t={t} sliderSettings={sliderSettings} itemsArr={items}/>
}
