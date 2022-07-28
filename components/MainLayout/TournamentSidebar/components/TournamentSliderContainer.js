import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'
import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import { useRef, useState } from 'react'
import { SlideItem } from './SlideItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import {IoChevronBack, IoChevronForward} from "react-icons/io5";

const Arrow = ({children, ...props}) => <Box
  position="absolute"
  top="35%"
  w="30px"
  h="55px"
  display="flex"
  alignItems="center"
  justifyContent="center"
  fontSize={25}
  color="white"
  bg="rgba(0,0,0, 0.3)"
  zIndex={1}
  cursor="pointer"
  {...props}
>{children}</Box>

export const TournamentSliderContainer = ({ t, tournaments, router, setSliderPosition, sliderPosition }) => {

  let slideRef = useRef('')
  if (slideRef.current) {
    if (typeof slideRef.current.slickGoTo === 'function') {
      slideRef.current.slickGoTo(sliderPosition)
    }
  }

  function SampleNextArrow (props) {
    const { onClick } = props
    return sliderPosition !== tournaments.tournaments.results.length - 1 && (
      <Arrow
        right={0}
        borderRadius="10px 0 0 10px"
        borderTop="2px solid rgba(255,255,255,0.56)"
        borderLeft="2px solid rgba(255,255,255,0.56)"
        borderBottom="2px solid rgba(255,255,255,0.56)"
        onClick={onClick}
        onMouseUp={() => setSliderPosition(sliderPosition + 1)}
      ><IoChevronForward /></Arrow>
    )
  }

  function SamplePrevArrow (props) {
    const { onClick } = props
    return sliderPosition !== 0 && (
      <Arrow
        left={0}
        borderRadius="0 10px 10px 0"
        borderTop="2px solid rgba(255,255,255,0.56)"
        borderRight="2px solid rgba(255,255,255,0.56)"
        borderBottom="2px solid rgba(255,255,255,0.56)"
        onClick={onClick}
        onMouseUp={() => setSliderPosition(sliderPosition - 1)}
      ><IoChevronBack /></Arrow>
    )
  }

  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    centerPadding: '0px',
    swipeToSlide: false,
    swipe: false,
    className: styles.sliderCustom,
    speed: 500,
    slidesToShow: 1,
    rows: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,

  }

  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <Box
        flexShrink={0}
        w="100%"
        bg="#2a2a31"
        position="relative"
        p="10px 0"
      >
        <Slider
          ref={slideRef}
          {...settings}>
          {tournaments.tournaments.results.map((el, index) => {
            return (
              <ErrorEmpty key={`${index} ${el.id} tournament`}>
                <SlideItem
                  key={`${index} ${el.id} tournament`}
                  setSliderPosition={setSliderPosition}
                  sliderPosition={sliderPosition}
                  count={index}
                  tournamentData={el}
                  router={router}
                  t={t}
                />
              </ErrorEmpty>
            )
          })}
        </Slider>
      </Box>
    )
  }
}
