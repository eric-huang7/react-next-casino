import Slider from "react-slick";
import styles from '../../styles/FooterArea/FooterArea.module.scss';
import {GamesItem} from "../GamesPageComponents/GamesItem";
import {SliderComponent} from "../SearchGamesModalWindow/SliderComponent";


export const GamesSlider = ({t, gamesData, userInfo, activeSlots, activeTime, playFunClickHandler, playGameClickHandler}) => {

  let gamesLast = [];
  let gamesTop = [];
  if (activeTime) {
    if (!gamesData.loadingLatestGames) {
      gamesLast = gamesData.latestGames.results.map((el) => {
        return <GamesItem showFrame={false}
                          playFunClickHandler={playFunClickHandler}
                          playGameClickHandler={playGameClickHandler}
                          key={`${el.id} ${el.name} game page`}
                          userInfo={userInfo}
                          t={t}
                          gameData={el}
        />
      })
    }
  } else {
    if (!gamesData.loadingTopGames) {
      gamesTop = gamesData.topGames.results.map((el) => {
        return <GamesItem showFrame={false}
                          playFunClickHandler={playFunClickHandler}
                          playGameClickHandler={playGameClickHandler}
                          key={`${el.id} ${el.name} game page`}
                          userInfo={userInfo}
                          t={t}
                          gameData={el}
        />
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
    slidesToShow: 6,
    rows: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1725,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 4,
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
      <Slider {...sliderSettings}>
        {gamesTop}
      </Slider>
    )
  } else {
    return (
      <Slider {...sliderSettings}>
        <div></div>
      </Slider>
    )
  }

}