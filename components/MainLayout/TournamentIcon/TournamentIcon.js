import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import Image from "next/image";
import {useDispatch} from "react-redux";
import {showTournaments} from "../../../redux/actions/showPopups";

export const TournamentIcon = ({toursref}) => {
  const dispatch = useDispatch();
  function showTournamentsHandler(e) {

    dispatch(showTournaments(true));
  }


  return (
    <div ref={toursref} onClick={() => showTournamentsHandler()} className={styles.tournamentIconWrapper}>
      <div className={styles.tournamentImage}>
        <Image src={'/assets/img/tournaments/tournament.png'} layout={'fixed'} width={34} height={37} alt={'tournament icon'}/>
      </div>
    </div>
  )
}