import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameItemErrorHandler from "./ErrorHandler/GameItemErrorHandler";
import {GameItemContainer} from "../HomePageComponents/GamesSliderBlock/GameItemContainer";
import React, {useState} from "react";
import ArrowButton from "../buttons/ArrowButton";
import Slider from "react-slick";

export const GamesSlider = ({
  t, gamesData, userInfo, activeSlots, activeTime, playFunClickHandler, playGameClickHandler
}) => {
  const [games, setGames] = useState([]);
  let gamesLast = [];
  let gamesTop = [];

  if (activeTime && !gamesData.loadingLatestGames) {
    gamesLast = gamesData.latestGames.results
  } else if (!gamesData.loadingTopGames) {
    gamesTop = gamesData.topGames.results
  }

  const SampleNextArrow = ({onClick}) => (
    <ArrowButton
      onClick={onClick}
      direction="next"
      display
    />
  );

  const SamplePrevArrow = ({onClick}) => (
    <ArrowButton
      onClick={onClick}
      direction="prev"
      display
    />
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 7,
    rows: 1,
    swipe: false,
    slidesToScroll: 1,
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

  const getItems = () => (activeTime ? gamesLast : (activeSlots ? gamesTop : [])).map((el) => (
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

  return <Slider {...sliderSettings}>
    {getItems()}
  </Slider>
}
