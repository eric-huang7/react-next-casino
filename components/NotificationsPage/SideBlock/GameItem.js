import styles from '../../../styles/NotificationsPage/SideBlockNotifyPage.module.scss';
import {urlGen} from "../../HomePageComponents/GamesSliderBlock/url";


export const GameItem = ({gameData, isLoading}) => {
  console.log(gameData, 'items')
  return (
    <div className={styles.gameItemWrapper}>
      <div className={styles.gameImgBlock}>
        <img src={urlGen(gameData.id)} alt={`game image ${gameData.name}`}/>
      </div>
      <div className={styles.gameNameBlock}>
        <p>{gameData.name}</p>
      </div>
    </div>
  )
}