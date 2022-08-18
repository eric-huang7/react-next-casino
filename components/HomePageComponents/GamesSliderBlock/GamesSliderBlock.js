import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {GameItemContainer} from "./GameItemContainer";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import SectionHeader from "../../typography/SectionHeader";
import ArrowButton from "../../buttons/ArrowButton";
import usePlayGame from "../../../hooks/usePlayGame";

export const GamesSliderBlock = ({t, title, titleIcon, slides = [], count, loading, linkPath, titleImage}) => {
  const {height, width} = useWindowDimensions();
  const user = useSelector((state) => state.authInfo);
  const {playFun, playGame} = usePlayGame();

  const router = useRouter()

  let itemsCount = 5;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 5;
  }

  function SampleNextArrow(props) {
    const { currentSlide, onClick } = props;

    return itemsCount * (currentSlide + 1) < slides?.length ? (
      <ArrowButton
        onClick={onClick}
        direction="next"
        round
      />
    ) : null;
  };

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;

    return currentSlide > 0 ? (
        <ArrowButton
          onClick={onClick}
          direction="prev"
          round
        />
    ) : null;
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    rows: 1,
    slidesPerRow: itemsCount,
    centerMode: true,
    centerPadding: width > 590 ? '50px' : '16px',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  }

  return loading ? <h1>Loading...</h1> : (
    <Box w="100%" maxW="1920px" m="auto" mb="30px">
      <SectionHeader path={linkPath}>
        {title} {count && `(${count})`}
      </SectionHeader>
      <Box w="100%" maxW="1920px" m="0 auto" position="relative">
        <Slider {...sliderSettings}>
          {slides?.map((el, ind) => {
            return (
              <div key={ind}>
                <ErrorEmpty>
                  <GameItemContainer
                    playGameClickHAndler={playGame}
                    playFunClickHandler={playFun}
                    t={t}
                    gameData={el}
                    user={user}
                  />
                </ErrorEmpty>
              </div>
            )
          })}
        </Slider>
      </Box>
    </Box>
  )
}
