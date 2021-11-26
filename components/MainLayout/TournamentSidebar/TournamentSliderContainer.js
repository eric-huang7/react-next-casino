import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import Slider from "react-slick";
import {useRef, useState} from "react";
import {SlideItem} from "./SlideItem";
import {useSelector} from "react-redux";

export const TournamentSliderContainer = ({t, tournaments, router, setSliderPosition, sliderPosition}) => {





  let slideRef = useRef('')
  if (typeof slideRef.current.slickGoTo === 'function') {

    slideRef.current.slickGoTo(sliderPosition)
  }

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${styles.nextArr} ${sliderPosition === tournaments.tournaments.results.length - 1 ? styles.hide : ''}`}
        onClick={onClick}
        onMouseUp={() => setSliderPosition(sliderPosition + 1)}
      >&gt;</div>
    );
  };
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${styles.prevArr} ${sliderPosition === 0 ? styles.hide : ''}`}
        onClick={onClick}
        onMouseUp={() => setSliderPosition(sliderPosition - 1)}
      >&lt;</div>
    );
  };

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // slidesToScroll: 1,
    // afterChange: () => {
    //   setSliderCount({...sliderCount, updateCount: sliderCount.updateCount + 1 })
    //   console.log(slideRef.current, 'ref')
    // },
    // beforeChange: (current, next) => setSliderCount({...sliderCount, slideIndex: next })
  };

  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <div className={`${styles.sliderWrapper}`}>
        <Slider
          ref={slideRef}
          {...settings}>
          {tournaments.tournaments.results.map((el, index) => {
            return (
              <SlideItem
                setSliderPosition={setSliderPosition}
                count={index}
                tournamentData={el}
                router={router}
              />
            )
          })}
        </Slider>
      </div>
    )
  }
}