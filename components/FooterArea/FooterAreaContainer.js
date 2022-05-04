import styles from '../../styles/FooterArea/FooterArea.module.scss';
import {ImgContainer} from "./ImgContainer";
import {useEffect, useRef, useState} from "react";
import {GamesContainer} from "./GamesContainer";
import {useDispatch} from "react-redux";
import {getLatestGames, getTopGames} from "../../redux/games/action";
import {useRouter} from "next/router";


export const FooterAreaContainer = ({t, userData}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/') {
      dispatch(getLatestGames(userData.user.user.id));
      dispatch(getTopGames());
    }
  }, [])

  const [activeSlots, setActiveSlots] = useState(false);
  const [activeTime, setActiveTime] = useState(false);

  const footerArea = useRef();
  const slotRef = useRef();
  const timeref = useRef();


  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(footerArea.current)) {
      setActiveSlots(false);
      setActiveTime(false);
    }
    if (path.includes((slotRef.current))) {
      setActiveSlots(true);
    }
    if (path.includes((timeref.current))) {
      setActiveTime(true);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);



  return (
    <div className={styles.footerAreaMainContainer}>
      <ImgContainer
        activeSlots={activeSlots}
        setActiveSlots={setActiveSlots}
        activeTime={activeTime}
        setActiveTime={setActiveTime}
        slotRef={slotRef}
        timeref={timeref}
      />
      <GamesContainer
        footerArea={footerArea}
        activeSlots={activeSlots}
        setActiveSlots={setActiveSlots}
        activeTime={activeTime}
        setActiveTime={setActiveTime}
        t={t}

      />

    </div>
  )
}
