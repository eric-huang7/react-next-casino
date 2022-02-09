import {GamePageMainContainer} from "./GamePageMainContainer";
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {minimizeGameWindow, showGameWindow} from "../../redux/actions/showGameWindow";


export const GameProvider = ({children}) => {
  const {t} = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {

    if (router.pathname.slice(1).split('/')[0] === 'accounts') {
      dispatch(showGameWindow(false));
      dispatch(minimizeGameWindow(false));
    }
  }, [router])

  const showPlayWindow = useSelector((store) => store.showPlayWindowReducer);


  return (
    <>
      {children}
      {
        showPlayWindow.isShowPlayWindow
        ?
          <GamePageMainContainer
            t={t}
            isMinimized={showPlayWindow.isMinimizePlayWindow}
          />
          :
          <></>
      }

    </>
  )

}