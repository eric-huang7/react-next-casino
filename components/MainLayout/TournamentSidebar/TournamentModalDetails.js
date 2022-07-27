import {useDispatch, useSelector} from "react-redux";
import {showTournamentsDetails} from "../../../redux/popups/action";
import LightModal from "../../modal/LightModal";

export const TournamentModalDetails = ({t}) => {
  const dispatch = useDispatch();
  const tournamentsData = useSelector((store) => store.tournaments.activeTournament);

  const hideDetails = () => {
    dispatch(showTournamentsDetails(false));
  }

  return (
    <LightModal
      isOpen
      onClose={hideDetails}
      title={t(`tournaments.details.${tournamentsData.frontend_id}.heading`)}
    >
      {t(`tournaments.details.${tournamentsData.frontend_id}.text`)}
    </LightModal>
  )
}
