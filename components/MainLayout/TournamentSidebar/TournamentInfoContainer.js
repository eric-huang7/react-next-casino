import {TournamentSliderContainer} from "./TournamentSliderContainer";
import {useSelector} from "react-redux";
import {useState} from "react";
import {PrizerList} from "./PrizerList";
import {ButtonsBlock} from "./ButtonsBlock";


export const TournamentInfoContainer = ({t, router, userInfo, showDetails}) => {
  const tournaments = useSelector((store) => store.tournaments);

  const [sliderPosition, setSliderPosition] = useState(0);

  return (
    <>
      <TournamentSliderContainer
        t={t}
        router={router}
        sliderPosition={sliderPosition}
        setSliderPosition={setSliderPosition}
        tournaments={tournaments}
      />
      <ButtonsBlock
        t={t}
        sliderPosition={sliderPosition}
        tournaments={tournaments}
        router={router}
        userInfo={userInfo}
        showDetails={showDetails}
      />
      <PrizerList
        t={t}
        sliderPosition={sliderPosition}
        tournaments={tournaments}
      />
    </>

  )
}