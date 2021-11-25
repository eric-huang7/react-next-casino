import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import {TournamentHeading} from "./TournamentHeading";
import {TournamentSliderContainer} from "./TournamentSliderContainer";
import {useDispatch} from "react-redux";
import {getTournaments} from "../../../redux/actions/getTournaments";
import {TournamentInfoContainer} from "./TournamentInfoContainer";
import {useRouter} from "next/router";


export const TournamentMainContainer = ({t, userInfo}) => {
  const dispatch = useDispatch();
  dispatch(getTournaments());

  const router = useRouter()


  return (
    <div className={styles.tournamentSideContainer}>
      <TournamentHeading t={t}/>
      <TournamentInfoContainer router={router} t={t}/>

    </div>
  )
}