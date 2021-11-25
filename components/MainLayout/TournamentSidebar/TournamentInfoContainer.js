import {TournamentSliderContainer} from "./TournamentSliderContainer";
import {useSelector} from "react-redux";
import {useState} from "react";
import {PrizerList} from "./PrizerList";


export const TournamentInfoContainer = ({t, router}) => {
  const tournaments = useSelector((store) => store.tournaments)

  const [sliderPosition, setSliderPosition] = useState(0);

  console.log(tournaments)

  return (
    <>
      <TournamentSliderContainer t={t} router={router} sliderPosition={sliderPosition} setSliderPosition={setSliderPosition} tournaments={tournaments}/>
      <PrizerList t={t} sliderPosition={sliderPosition} tournaments={tournaments}/>
    </>

  )
}