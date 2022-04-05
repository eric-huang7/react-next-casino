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
import Link from "next/link";
import {IoChevronForwardOutline} from "react-icons/io5";


export const NewsBlock = ({ isBackShow, titleImage }) => {
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
    const { currentSlide, onClick } = props;

    return itemsCount * (currentSlide + 1) < newsData?.length ? (
      <div
        className={styles.nextArr}
        onClick={onClick}
      />
    ) : null;
  };

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;

    return currentSlide > 0 ? (
      <div
        className={styles.prevArr}
        onClick={onClick}
      />
    ) : null;
  };

  const sliderSettings = {
    dots: false,
    // infinite: false,
    speed: 500,
    slidesToShow: itemsCount,
    centerMode: true,
    centerPadding: width > 860 ? '50px' : 0,
    // slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <section className={styles.newsMainWrapper}>
      <div className={styles.newsHeadingWrapper}>
        <div className={styles.newsHeading}>
          <div className={styles.newsTitle}>
            <img src={titleImage} /> ({newsData?.length})
          </div>
        </div>
      </div>
      {newsError ? (
        <div className={`${styles.newsBackground}`}>
          <h3 className={styles.errorMessage}>{t(newsError)}</h3>
        </div>
      ) : (newsData.length === 0 ? (
          <div className={`${styles.newsBackground}`}>
            <h3 className={styles.errorMessage}>{t('homePage.checkLater')}</h3>
          </div>
        ) : (
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
        )
      )}
    </section>
  )
}
