import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useWindowDimensions from "/hooks/useWindowDimensions";
import {GameItemContainer} from "./GameItemContainer";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import ErrorEmpty from "/components/ErrorBoundaryComponents/ErrorEmpty";
import ArrowButton from "/components/buttons/ArrowButton";
import usePlayGame from "/hooks/usePlayGame";
import LoadingItems from "/components/GamesPageComponents/LoadingItems";
import {HStack} from "@chakra-ui/layout";
import SectionHeaderCount from "/components/typography/SectionHeaderCount";

export const GamesSliderBlock = ({t, title, titleIcon, slides = [], count, loading, linkPath, titleImage}) => {
  const {height, width} = useWindowDimensions();
  const user = useSelector((state) => state.authInfo);
  const {playFun, playGame} = usePlayGame();

  const router = useRouter()

  let itemsCount = 5;
  if (width <= 1165) {
    itemsCount = 2;
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
    prevArrow: <SamplePrevArrow/>,
    className: 'slider-with-bg'
  }

  return (
    <Box w="100%" maxW="1920px" m="auto" mb="30px">
      <SectionHeaderCount path={linkPath} count={count} mb={{base: "0", lg: "25px"}}>
        {title}
      </SectionHeaderCount>
      <Box w="100%" maxW="1920px" m="0 auto" position="relative" className="">
        {loading
          ? <HStack px={{base: "16px", lg: "50px"}}>
              <LoadingItems height={{base: "95px", lg: "180px"}} width={{base: "145px", lg: "275px"}} />
            </HStack>
          : <Slider {...sliderSettings}>
            {slides?.map((el, ind) => {
              return (
                <Box key={ind} bg="white">
                  <ErrorEmpty>
                    <GameItemContainer
                      playGameClickHAndler={playGame}
                      playFunClickHandler={playFun}
                      t={t}
                      gameData={el}
                      user={user}
                    />
                  </ErrorEmpty>
                </Box>
              )
            })}
          </Slider>}
      </Box>
    </Box>
  )
}
