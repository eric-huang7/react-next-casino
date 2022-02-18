import styles from '../../../styles/HomePage/NewsBlock.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {NewsItem} from "./NewsItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {news_active_url} from "../../../redux/url/url";
import {useRouter} from "next/router";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import { useTranslation } from 'next-i18next'


export const NewsBlock = ({ isBackShow}) => {
  const { t } = useTranslation('common');

  const {width} = useWindowDimensions();
  const router = useRouter();

  const [newsData, setNewsData] = useState([]);
  const [newsError, setNewsError] = useState('');
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    axios.get(news_active_url)
      .then((data) => {
        setNewsData(data.data.results);
        setLoadingNews(false);
      })
      .catch((data) => {
        setLoadingNews(false);
        setNewsError('errors.errorMessage');
      })
  }, [])

  let itemsCount = 4;
  if (!loadingNews && newsData) {
    if (newsData.length >= 4) {
      if (width <= 1165) {
        itemsCount = 3;
      } else {
        itemsCount = 4;
      }
    } else if (newsData.length === 3) {
      if (width <= 1165) {
        itemsCount = 3;
      } else {
        itemsCount = 3;
      }
    } else if (newsData.length === 2) {
      if (width <= 1165) {
        itemsCount = 1;
      } else {
        itemsCount = 2;
      }
    } else {
      if (width <= 1165) {
        itemsCount = 1;
      } else {
        itemsCount = 1;
      }
    }
  }


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

  if (newsError) {
    return (
      <section className={styles.newsMainWrapper}>
        <div className={styles.newsHeading}></div>
        <div className={`${styles.newsBackground}`}>
          <h3 className={styles.errorMessage}>{t(newsError)}</h3>
        </div>
      </section>
    )
  } else if (newsData.length === 0) {
    return (
      <section className={styles.newsMainWrapper}>
        <div className={styles.newsHeading}></div>
        <div className={`${styles.newsBackground}`}>
          <h3 className={styles.errorMessage}>{t('homePage.checkLater')}</h3>
        </div>
      </section>
    )
  } else {
    return (
      <section className={styles.newsMainWrapper}>
        <div className={styles.newsHeading}></div>
        <div className={`${styles.newsBackground} ${isBackShow ? styles.backShow : ''}`}>
          <div className={styles.darkBackground}>
            <div className={styles.newsSliderWrapper}>
              <Slider {...sliderSettings}>
                {newsData.map((el) => {
                  return (
                    <ErrorEmpty key={`${el.id} news item`}>
                      <NewsItem
                        key={`${el.id} news item`}
                        newsData={el}
                        locale={router.locale}
                      />
                    </ErrorEmpty>
                  )
                })}
              </Slider>
              <div className={styles.controlPanel}>
                <span>{""}</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}