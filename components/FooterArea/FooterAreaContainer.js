import styles from '../../styles/FooterArea/FooterArea.module.scss';
import Image from "next/image";
import {ImgContainer} from "./ImgContainer";
import {useState} from "react";
import {GamesContainer} from "./GamesContainer";
import {useDispatch, useSelector} from "react-redux";
import {getLatestGames} from "../../redux/actions/games";

export const FooterAreaContainer = ({t, userData}) => {
  const dispatch = useDispatch();
  dispatch(getLatestGames(userData.user.user.id));
  const [activeSlots, setActiveSlots] = useState(false);
  const [activeTime, setActiveTime] = useState(false);




  return (
    <div className={styles.footerAreaMainContainer}>
      <ImgContainer
        activeSlots={activeSlots}
        setActiveSlots={setActiveSlots}
        activeTime={activeTime}
        setActiveTime={setActiveTime}
      />
      <GamesContainer
        activeSlots={activeSlots}
        setActiveSlots={setActiveSlots}
        activeTime={activeTime}
        setActiveTime={setActiveTime}
        t={t}
      />

    </div>
  )
}