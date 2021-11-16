import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";


import {urlGen} from "./url";
import {GameHoverButtons} from "./GameHoverButtons";
import {GameItemContainer} from "./GameItemContainer";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {freeGame, playPayGame} from "../../../redux/actions/playGames";


export const GamesSliderBlock = ({t, type, games}) => {
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);

  const router = useRouter()

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      router.push(playGames.startGame.game_link);
      // window.location.replace(games.startGame.game_link)
      console.log(playGames.startGame.game_link)
    }
    if (playGames.freeGame?.game_link) {
      router.push(playGames.freeGame.game_link);
      // window.open(games.freeGame.game_link);
      console.log(playGames.freeGame.game_link)
      // window.location.replace(games.freeGame.game_link)
    }
  }, [playGames]);
  const playFunClickHandler = (gameData) => {
    dispatch(freeGame(gameData.game_provider_id, gameData.game_provided_id));
  }
  const playGameClickHAndler = (gameData, user) => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      console.log(gameData, 'GAME DATA!!!')
      console.log(user.user.user, "USER!!!S")
      console.log(user, "USER!!!S bonus");
      console.log(user.balance.balances, 'balances ID')
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      // game_provider_id, game_id, user_id, is_bonus, balance_id
      dispatch(playPayGame(gameData.game_provider_id, gameData.game_provided_id, user.user.user.id, is_bonus, `${user.balance.balances[0].id}`));
    } else {
      console.log(gameData, 'GAME DATA!!!')
      console.log('ERROR no balance', user.balance);
      console.log(user, "USER!!!S")
      return
    }
  }


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
                  <GameItemContainer
                    playGameClickHAndler={playGameClickHAndler}
                    playFunClickHandler={playFunClickHandler}
                    ind={ind}
                    t={t}
                    gameData={el}
                    user={user}
                  />
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