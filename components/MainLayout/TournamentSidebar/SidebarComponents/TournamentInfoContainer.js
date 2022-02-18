import {TournamentSliderContainer} from "../TournamentSliderContainer";
import {useSelector} from "react-redux";
import {useState} from "react";
import {PrizerList} from "./PrizerList";
import {ButtonsBlock} from "./ButtonsBlock";
import ErrorText from '../../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'


export const TournamentInfoContainer = ({t, router, userInfo, showDetails}) => {
  const tournaments = useSelector((store) => store.tournaments);

  const [sliderPosition, setSliderPosition] = useState(0);

  return (
    <>
      <ErrorText>
        <TournamentSliderContainer
          t={t}
          router={router}
          sliderPosition={sliderPosition}
          setSliderPosition={setSliderPosition}
          tournaments={tournaments}
        />
      </ErrorText>
      <ButtonsBlock
        t={t}
        sliderPosition={sliderPosition}
        tournaments={tournaments}
        router={router}
        userInfo={userInfo}
        showDetails={showDetails}
      />
      <ErrorEmpty>
        <PrizerList
          t={t}
          sliderPosition={sliderPosition}
          tournaments={tournaments}
        />
      </ErrorEmpty>
    </>

  )
}