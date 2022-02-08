import {GamePageMainContainer} from "./GamePageMainContainer";
import {useTranslation} from "next-i18next";
import {useSelector} from "react-redux";


export const GameProvider = ({children}) => {
  const {t} = useTranslation('common');

  const showPlayWindow = useSelector((store) => store.showPlayWindowReducer.isShowPlayWindow);

  console.log(showPlayWindow);

  return (
    <>
      {children}
      {
        showPlayWindow
        ?
          <GamePageMainContainer
            t={t}
            isShow={true}
          />
          :
          <></>
      }

    </>
  )

}