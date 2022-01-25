import styles from '../../../styles/HomePage/NewsBlock.module.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Link from "next/link";
// import {newsData} from "./newsData";
import {NewsItem} from "./NewsItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {news_active_url} from "../../../redux/url/url";
import {useRouter} from "next/router";


export const NewsBlock = ({t, isBackShow}) => {
  const {height, width} = useWindowDimensions();
  const router = useRouter();

  const [newsData, setNewsData] = useState([]);
  const [newsError, setNewsError] = useState('');

  useEffect(() => {
    axios.get(news_active_url)
      .then((data) => {
        console.log(data, 'NEWS!@@@@@@@@@@@@@@@');
        setNewsData(data.data.results);
      })
      .catch((data) => {
        console.log(data);
        setNewsError("Ooops... Some error occurred!");
      })
  }, [])

  let itemsCount = 4;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 4;
  }

// let data = newsData();

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
      <div className={`${styles.newsBackground} ${isBackShow ? styles.backShow : ''}`}>
        <div className={styles.darkBackground}>
          <div className={styles.newsSliderWrapper}>
            <Slider {...sliderSettings}>
              {newsData.map((el) => {
                return (
                  <NewsItem
                    key={`${el.id} news item`}
                    newsData={el}
                    locale={router.locale}
                  />
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