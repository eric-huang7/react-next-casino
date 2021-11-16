import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss';
import {GameItem} from "./GameItem";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGames, getLatestGames} from "../../../redux/actions/games";


export const SideGamesContainer = () => {
  const dispatch = useDispatch();
  let userData = useSelector((store) => store.authInfo);
  let gamesStoredData = useSelector((store) => store.games);

  console.log(gamesStoredData, 'games');

  const [gamesData, setGamesData] = useState([])
  useEffect(() => {
    if (userData.isAuthenticated) {
      dispatch(getLatestGames(userData.user.user.id));
    }

  },[userData.isAuthenticated])
let gamesArr = [];
  if (gamesStoredData.latestGames?.results.length === 0) {
    gamesArr = gamesStoredData.games.results.map((el) => {
      return (
        <GameItem key={`game id key ${el.id}`} gameData={el} isLoading={gamesStoredData.loadingLatestGames}/>
      )
    }).slice(0, 3);
  } else {
    gamesArr = gamesStoredData.latestGames?.results.map((el) => {
      return (
        <GameItem key={`game id key ${el.id}`} gameData={el} isLoading={gamesStoredData.loadingLatestGames}/>
      )
    }).slice(0, 3);
  }
  console.log(gamesArr)
  return (
    <div className={styles.sideGamesWrapper}>
      {
        gamesArr
      }
    </div>
  )
}