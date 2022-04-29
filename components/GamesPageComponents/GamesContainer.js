import styles from '../../styles/GamesPage/GamesPage.module.scss';
import {GamesItem} from "./GamesItem";
import {useDispatch, useSelector} from "react-redux";
import {GamesPageHeading} from "./GamesPageHeading";
import {MoreButton} from "./MoreButton";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/playGame/action";
import {showGameWindow} from "../../redux/ui/action";
import GamesItemErrorHandler from "./GamesPageErrorHandler/GameItemErrorHandler";
import {SearchBar} from "../HomePageComponents/ChooseCategoryBlock/SearchBar";
import {gameUrl} from "../../helpers/imageUrl";

export const GamesContainer = (props) => {
  const {
    t,
    gamesData,
    heading,
    setRequestGamesData,
    pageCounter,
    setPageCounter,
    isShowMoreButton,
    setIsShowMoreButton,
    totalRows,
    setTotal_rows,
    gamesError
  } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    return () => {
      setPageCounter(0);
      setIsShowMoreButton(true);
    }
  },[])

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

  const playGameClickHandler = (gameData, user) => {
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
      }));
      if (window.innerWidth > 1065) {
        router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
          dispatch(showGameWindow(true));
        });
      }
    } else {

    }
  }

  const onLoadingComplete = () => {
    console.log('onLoadingComplete', loadedImages)
    if (!isLoaded) {
      setLoadedImages(loadedImages + 1);
    }
  }

  useEffect(() => {
    console.log('loadedImages', isLoaded, loadedImages, filteredGames().length)
    if (!isLoaded && gamesData.length > 0 && loadedImages >= filteredGames().length) {
      setIsLoaded(true)
    }
  }, [loadedImages, isLoaded, gamesData])

  function preloadImage (src) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = function() {
        resolve(img)
      }
      img.onerror = img.onabort = function() {
        resolve(src)
      }
      img.src = src
    })
  }

  useEffect(() => {
    // Images preload
  // ==================
    let isCancelled = false

    async function effect() {
      if (isCancelled) {
        return
      }

      const imagesPromiseList = []
      for (const game of gamesData) {
        imagesPromiseList.push(preloadImage(gameUrl(game.id)))
      }

      await Promise.all(imagesPromiseList)
      console.log('loaded isCancelled', isCancelled)
      if (isCancelled) {
        return
      }

      setIsLoaded(true)
    }

    if (gamesData.length > 0) {
      effect()
    }

    return () => {
      console.log('isCancelled')
      isCancelled = true
    }
  }, [isLoaded, gamesData])

  const filteredGames = () =>
    gamesData.filter(game => searchQuery ? game.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 : true)

  let games = filteredGames().map((el, ind) => {
    return (
      <GamesItemErrorHandler key={`${el.id} ${el.name} game page`}>
        <GamesItem
          showFrame={false}
          playFunClickHandler={playFunClickHandler}
          playGameClickHandler={playGameClickHandler}
          key={`${el.id} ${el.name} game page`}
          userInfo={userInfo}
          t={t}
          gameData={el}
          onLoadingComplete={onLoadingComplete}
        />
      </GamesItemErrorHandler>
    )
  })

  const handleSearch = (value) => {
    setSearchQuery(value);
  }

  return gamesError ? (
    <div className={styles.gamesMainContainer}>
      <GamesPageHeading heading={heading} t={t} />
      <div className={styles.gamesItemsContainer}>
        <h2 className={styles.errorMessage}>{t(gamesError)}</h2>
      </div>
    </div>
  ) : (
    <>
      <div className={styles.gamesMainContainer}>
        <SearchBar onSearch={handleSearch} type={heading} t={t}/>
        <GamesPageHeading heading={heading} t={t} />
        {!isLoaded ? <div className={styles.gamesItemsContainer} style={{ paddingBottom: 60 }}>
            <span className={`${styles.MuiSkeletonRoot} ${styles.MuiSkeletonRectangular} ${styles.MuiSkeletonPulse}`}></span>
            <span className={`${styles.MuiSkeletonRoot} ${styles.MuiSkeletonRectangular} ${styles.MuiSkeletonPulse}`}></span>
            <span className={`${styles.MuiSkeletonRoot} ${styles.MuiSkeletonRectangular} ${styles.MuiSkeletonPulse}`}></span>
            <span className={`${styles.MuiSkeletonRoot} ${styles.MuiSkeletonRectangular} ${styles.MuiSkeletonPulse}`}></span>
            <span className={`${styles.MuiSkeletonRoot} ${styles.MuiSkeletonRectangular} ${styles.MuiSkeletonPulse}`}></span>
          </div>: (
          <div className={styles.gamesItemsContainer}>
            {games}
          </div>
        )}
      </div>
      {isLoaded && <MoreButton

        heading={heading}
        setRequestGamesData={setRequestGamesData}
        gamesData={gamesData}
        isShowMoreButton={isShowMoreButton}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        t={t}
        setTotal_rows={setTotal_rows}
      />}
    </>
  )
}

