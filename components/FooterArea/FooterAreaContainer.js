import {ImgContainer} from "./ImgContainer";
import {useEffect, useRef, useState} from "react";
import {GamesContainer} from "./GamesContainer";
import {useDispatch} from "react-redux";
import {getLatestGames, getTopGames} from "../../redux/games/action";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import { Box } from "@chakra-ui/react";

export const FooterAreaContainer = ({userData}) => {
  const { t } = useTranslation('common')
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
    <Box w="100%" h="38px" bg="rgba(21,21,21,0.9)" position="fixed" bottom={0} zIndex={10}>
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
    </Box>
  )
}
