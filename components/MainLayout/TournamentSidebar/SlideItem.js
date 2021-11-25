import styles from "../../../styles/TournamentSidebar/TournamentSidebar.module.scss";
import {imagesUrl} from "../../../helpers/imgUrl";


export const SlideItem = ({setSliderPosition, count, tournamentData, router}) => {
  let image = imagesUrl(tournamentData.image.split('.')[0] + `_${router.locale}` + '.png');

  return (
    <div onClick={() => setSliderPosition(count)} className={styles.slideItemWrapper}>
      <div className={styles.slideItem}>
        <img src={image} alt={tournamentData.frontend_id}/>
      </div>
    </div>
  )
}