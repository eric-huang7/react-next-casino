import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import Image from "next/image";
import {useDispatch} from "react-redux";
import {showTournaments} from "../../../redux/popups/action";

export const TournamentIcon = ({toursref}) => {
  const dispatch = useDispatch();
  function showTournamentsHandler(e) {

    dispatch(showTournaments(true));
  }


  return (
    <div ref={toursref} onClick={() => showTournamentsHandler()} className={styles.tournamentIconWrapper}>
      <div className={styles.tournamentImage}>
        <Image src={'/assets/img/tournaments/sidebar-icon.webp'} layout={'fixed'} width={100} height={100} alt={'tournament icon'}/>
      </div>
    </div>
  )
}
