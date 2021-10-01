import styles from '../../../styles/HomePage/NewsBlock.module.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Link from "next/link";
import {newsData} from "./newsData";


export const NewsBlock = ({t}) => {
  const {height, width} = useWindowDimensions();

  let itemsCount = 4;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 4;
  }

let data = newsData();

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
    className: 'center',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemsCount,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <section className={styles.newsMainWrapper}>
      <div className={styles.newsHeading}></div>
      <div className={styles.newsBackground}>
        <div className={styles.darkBackground}>
          <div className={styles.newsSliderWrapper}>
            <Slider {...sliderSettings}>
              {data.map((el) => {
                return (
                  <div key={el.id}>
                    <div className={styles.newItemWrapper}>
                      <div className={styles.newImage}>
                        <div className={styles.newFrame}>
                        </div>
                        <img src={el.image} alt={`new ${el.id}`}/>
                      </div>
                      <div className={styles.newTextBlock}>
                        <div className={styles.frameTextBlock}>
                          <p className={styles.newMainText}>{el.mainText}</p>
                          <p className={styles.newDateText}>{el.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
            <div className={styles.controlPanel}>
              <Link href={'/#'}><a>{t(`homePage.moreButton`)}</a></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}