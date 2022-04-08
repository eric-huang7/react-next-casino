import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';

import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import {GameItemContainer} from "./GameItemContainer";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../../../redux/playGame/action";
import {showGameWindow} from "../../../redux/actions/showGameWindow";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import {IoChevronForwardOutline} from "react-icons/io5";


export const GamesSliderBlock = ({t, title, titleIcon, slides = [], loading, linkPath, titleImage}) => {
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();
  const playGames = useSelector((state) => state.playGame);
  const user = useSelector((state) => state.authInfo);

  const router = useRouter()

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 1065) {
          router.push(playGames.startGame.game_link);
        }
      }
    }

    if (playGames.freeGame?.game_link) {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 1065) {
          router.push(playGames.freeGame.game_link);
        }
      }
    }
  }, [playGames]);


  const playFunClickHandler = (gameData) => {

    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }

    if (typeof window !== "undefined") {
      let saveData = JSON.stringify({
        data: sendData,
        gameName: gameData.name ? gameData.name : "..."
      })

      localStorage.setItem("user_last_game", saveData);
    }

    dispatch(deleteGameLink());
    dispatch(freeGame({
      data: sendData,
      gameName: gameData.name ? gameData.name : "..."
    }))

    if (window.innerWidth > 1065) {
      router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
        dispatch(showGameWindow(true));
      });
    }
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
      if (typeof window !== "undefined") {
        let saveData = JSON.stringify({
          data: {
            game_provider_id: sendData.game_provider_id,
            game_id: sendData.game_provided_id
          },
          gameName: gameData.name ? gameData.name : "..."
        })
        localStorage.setItem("user_last_game", saveData);
      }
      // game_provider_id, game_id, user_id, is_bonus, balance_id

      dispatch(deleteGameLink());
      dispatch(playPayGame({
        data : sendData,
        gameName: gameData.name ? gameData.name : "..."
      })).then(() => {
        if (window.innerWidth > 1065) {
          router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
            dispatch(showGameWindow(true));
          });
        }
      });
    } else {

    }
  }

  let itemsCount = 5;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 5;
  }

  function SampleNextArrow(props) {
    const { currentSlide, onClick } = props;

    return itemsCount * (currentSlide + 1) < slides?.length ? (
      <div
        className={styles.nextArr}
        onClick={onClick}
      />
    ) : null;
  };

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;

    return currentSlide > 0 ? (
      <div
        className={styles.prevArr}
        onClick={onClick}
      />
    ) : null;
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    rows: 1,
    slidesPerRow: itemsCount,
    centerMode: true,
    centerPadding: width > 590 ? '50px' : '16px',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  }

  return loading ? <h1>Loading...</h1> : (
    <section className={styles.sliderMainWrapper}>
      <div className={styles.sliderHeadingWrapper}>
        <div className={styles.sliderHeading}>
          <div className={styles.sliderTitle}><img src={titleImage} /> ({slides?.length})</div>
          <Link href={linkPath}><a className={styles.moreLink}>{t(`homePage.viewAll`)} <IoChevronForwardOutline /></a></Link>
        </div>
      </div>
      <div className={styles.gamesWrapper}>
        <Slider {...sliderSettings}>
          {slides?.map((el, ind) => {
            return (
              <div className={styles.slideItemsWrapperDesc} key={ind}>
                <ErrorEmpty>
                  <GameItemContainer
                    playGameClickHAndler={playGameClickHAndler}
                    playFunClickHandler={playFunClickHandler}
                    ind={ind}
                    t={t}
                    gameData={el}
                    user={user}
                  />
                </ErrorEmpty>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
