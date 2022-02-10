import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import {GameItemContainer} from "./GameItemContainer";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../../../redux/actions/playGames";
import {showGameWindow} from "../../../redux/actions/showGameWindow";


export const GamesSliderBlock = ({t, type, games}) => {
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);

  const router = useRouter()

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      // if (width > 1065) {
      //   dispatch(showGameWindow(true));
      // } else {
      //   // router.push(playGames.startGame.game_link);
      //   // dispatch(deleteGameLink());
      // }
    }
    if (playGames.freeGame?.game_link) {
      // if (width > 1065) {
      //   console.log('start');
      //   router.push(`/game/${playGames.gameName}`).then((data) => dispatch(showGameWindow(true)));
      //
      // } else {
      //   // router.push(playGames.freeGame.game_link);
      //   // dispatch(deleteGameLink());
      // }
    }
    console.log(playGames, '@@@@@@@@@@!!!!!!!!!!')
  }, [playGames]);


  const playFunClickHandler = (gameData) => {
    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }

    dispatch(deleteGameLink());
    dispatch(freeGame({
      data: sendData,
      gameName: gameData.name ? gameData.name : "..."
    }))
    router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
      dispatch(showGameWindow(true));
    });

    // dispatch(showGameWindow(true));
  }
  const playGameClickHAndler = (gameData, user) => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      let userBalance = user.balance.balances.filter((el) => el.is_default !== "0");
      let sendData = {
        game_provider_id: gameData.game_provider_id,
        game_id: gameData.game_provided_id,
        user_id: user.user.user.id,
        is_bonus: is_bonus,
        balance_id: `${userBalance[0].id}`
      }
      // game_provider_id, game_id, user_id, is_bonus, balance_id
      dispatch(deleteGameLink());
      dispatch(playPayGame({
        data : sendData,
        gameName: gameData.name ? gameData.name : "..."
      }));
      router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
        dispatch(showGameWindow(true));
      });
    } else {
      console.log(gameData, 'GAME DATA!!!');
      console.log(user, "USER!!!S");
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
  let linkPath = '/';

  if (type === 'NEW_GAMES') {
    if (games.loadingNewGames) {

      return <h1>Loading...</h1>
    } else {
      // if (games.isSearchEmpty) {
      let newGamesSlicedArr = games.newGames.results.slice();
      slides = newGamesSlicedArr;

      linkPath = '/games-page/new-games';
      // } else {
      //   let newGamesSlicedArr = games.searchGames.slice();
      //   slides = newGamesSlicedArr;
      // }


    }
  } else if (type === 'JACKPOT_GAMES') {
    if (games.loadingJackpotGames) {

      return <h1>Loading...</h1>
    } else {
      // filter by type 4
      let jackpotSlicedArr = games.jackpotGames.results.slice();
      slides = jackpotSlicedArr;

      linkPath = '/games-page/jackpot-games';
    }
  } else if (type === 'TABLE_GAMES') {
    if (games.loadingTableGames) {

      return <h1>Loading...</h1>
    } else {
      // filter by type 2
      let tableSlicedGames = games.tableGames.results.slice();
      slides = tableSlicedGames;
      linkPath = '/games-page/table-games';

    }
  }


  function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
      <div
        className={styles.nextArr}
        onClick={onClick}
      />
    );
  };

  function SamplePrevArrow(props) {
    const {className, onClick} = props;
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
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
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
          <Link href={linkPath}><a>{t(`homePage.moreButton`)}</a></Link>
        </div>
      </div>
    </section>
  )
}