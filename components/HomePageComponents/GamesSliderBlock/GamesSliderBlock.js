import styles from '../../../styles/HomePage/GamesSliderBlock.module.scss';
import axios from 'axios';
import {gamesImagesUrl} from "../../../redux/url/url";
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {useEffect} from "react";
import {urlGen} from "./url";
import {GameHoverButtons} from "./GameHoverButtons";


export const GamesSliderBlock = ({type, games}) => {
  const {height, width} = useWindowDimensions();

  let images = [];

  let itemsCount = 10;
  if (width <= 1165) {
    itemsCount = 6;
  } else {
    itemsCount = 10;
  }
  let slides = [];

  if (type === 'NEW_GAMES') {
    if (games.loading) {
      console.log('loading')
      return <h1>Loading...</h1>
    } else {
      slides = games.games.results.sort((a, b) => a.release_date - b.release_date);
    }
  } else if (type === 'JACKPOT_GAMES') {
    if (games.loading) {
      console.log('loading')
      return <h1>Loading...</h1>
    } else {
      slides = games.games.results.filter((a) => a.type === 1);
      console.log(slides, 'slidessssssss')
    }
  }
  //
  //   let countSlides = sorted.length / itemsCount;
  //   let items = [];
  //   sorted.forEach((el, ind, arr) => {
  //     if ( ind % itemsCount === 0 && ind !== 0 ) {
  //       slides.push(
  //         <div key={ind}>
  //           {items}
  //         </div>
  //       )
  //       items = [];
  //       items.push(
  //         <div key={el.id}>
  //           <GameHoverButtons />
  //           <img src={urlGen(el.id)} alt={'game ' + el.name}/>
  //         </div>
  //       )
  //     } else if (ind === arr.length - 1 ) {
  //       items.push(
  //         <div key={el.id}>
  //           <GameHoverButtons />
  //           <img src={urlGen(el.id)} alt={'game ' + el.name}/>
  //         </div>
  //       )
  //       slides.push(
  //         <div key={ind}>
  //           {items}
  //         </div>
  //       )
  //     } else {
  //       items.push(
  //         <div key={el.id}>
  //           <GameHoverButtons />
  //           <img src={urlGen(el.id)} alt={'game ' + el.name}/>
  //         </div>
  //       )
  //     }
  //   });
  // }
  //   else if (type === 'JACKPOT_GAMES') {
  //   if (games.loading) {
  //     console.log('loading')
  //     return <h1>Loading...</h1>
  //   } else {
  //     let sorted = games.games.results.sort((a, b) => b.times_played - a.times_played);
  //
  //     let countSlides = sorted.length / itemsCount;
  //     let items = [];
  //     sorted.forEach((el, ind, arr) => {
  //       if ( ind % itemsCount === 0 && ind !== 0 ) {
  //         slides.push(
  //           <div key={ind}>
  //             {items}
  //           </div>
  //         )
  //         items = [];
  //         items.push(
  //           <div key={el.id}>
  //             <GameHoverButtons />
  //             <img src={urlGen(el.id)} alt={'game ' + el.name}/>
  //           </div>
  //         )
  //       } else if (ind === arr.length - 1 ) {
  //         items.push(
  //           <div key={el.id}>
  //             <GameHoverButtons />
  //             <img src={urlGen(el.id)} alt={'game ' + el.name}/>
  //           </div>
  //         )
  //         slides.push(
  //           <div key={ind}>
  //             {items}
  //           </div>
  //         )
  //       } else {
  //         items.push(
  //           <div key={el.id}>
  //             <GameHoverButtons />
  //             <img src={urlGen(el.id)} alt={'game ' + el.name}/>
  //           </div>
  //         )
  //       }
  //     });
  //   }
  // }

    function SampleNextArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={styles.nextArr}
          onClick={onClick}
        />
      );
    };
    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className={styles.prevArr}
          onClick={onClick}
        />
      );
    };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    rows: 2,
    slidesPerRow: 5,
    // slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <section className={styles.sliderMainWrapper}>
      <div className={`${type === 'NEW_GAMES' ? styles.sliderHeadingNewGames : styles.sliderHeadingJackpotGames} ${styles.sliderHeading}`}></div>
      <div className={styles.gamesWrapper}>
        <Slider {...sliderSettings}>
          {slides.map((el, ind) => {
            return (
                <div className={styles.slideItemsWrapperDesc} key={ind}>
                  {
                    <div className={styles.gameItemWrapper}>
                      <GameHoverButtons />
                      <img key={el.id} src={urlGen(el.id)} alt={`game ${el.name}`}/>
                    </div>
                  }
                </div>
            )
          })}
        </Slider>
        <div className={styles.controlPanel}>
          <Link href={'/#'}><a>more...</a></Link>
        </div>
      </div>
    </section>
  )
}