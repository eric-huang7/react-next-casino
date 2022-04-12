import styles from '../../../styles/HomePage/PromotionsBlock.module.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {PromotionItem} from "./PromotionItem/PromotionItem";
import {bonusesCalculator} from "../../PromotionsPageComponents/BonusesContainer/bonusesCalculator";
import {useEffect} from "react";
import {getActiveBonuses, getAllBonuses} from "../../../redux/bonuses/action";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import {IoChevronForwardOutline} from "react-icons/io5";

export const PromotionsBlock = ({t, titleImage}) => {
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();

  const userCurrency = useSelector((state) => state.userFinance);

  const promotionsData = useSelector((store) => store.bonuses);


  useEffect(() => {
    dispatch(getActiveBonuses(userCurrency?.userCurrencyData?.id));
  }, [userCurrency?.userCurrencyData?.id])


  let itemsCount = 4;

  if (!promotionsData.loadingActiveBonuses && promotionsData.activeBonuses) {

    if (promotionsData.activeBonuses.offers.length >= 4) {
      if (width <= 1165) {
        itemsCount = 3;
      } else {
        itemsCount = 4;
      }
    } else if (promotionsData.activeBonuses.offers.length === 3) {
      if (width <= 1165) {
        itemsCount = 1;
      } else {
        itemsCount = 3;
      }
    } else if (promotionsData.activeBonuses.offers.length === 2) {
      if (width <= 1165) {
        itemsCount = 1;
      } else {
        itemsCount = 2;
      }
    } else if (promotionsData.activeBonuses.offers.length === 1) {

      if (width <= 1165) {
        itemsCount = 1;
      } else {
        itemsCount = 1;
      }
    }

  } else {
    if (width <= 1165) {
      itemsCount = 1;
    } else {
      itemsCount = 1;
    }
  }


// let data = promoData();

  function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
      <div
        className={styles.nextArr}
        onClick={onClick}
      />
    );
  };

  function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
      <div
        className={styles.prevArr}
        onClick={onClick}
      />
    );
  };
  const sliderSettings = {
    // className: 'center',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemsCount,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  }

  return (
    <section className={`${styles.promotionsMainWrapper} _promotionsBlock`}>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <div className={styles.title}><img src={titleImage} /> ({promotionsData?.activeBonuses?.offers?.length})</div>
          <Link href={'/promotions'}><a className={styles.moreLink}>{t(`homePage.viewAll`)} <IoChevronForwardOutline /></a></Link>
        </div>
      </div>
      {promotionsData.loadingActiveBonuses && !promotionsData.activeBonuses ? (
        <h2 className={styles.loadingEmptyPromotions}>{t('homePage.loading')}</h2>
      ) : (promotionsData.activeBonuses.offers.length === 0 ? (
          <h2 className={styles.loadingEmptyPromotions}>{t('homePage.checkLater')}</h2>
        ) : (
          <div className={styles.promotionsBackground}>
            <div className={styles.promotionsSliderWrapper}>
              <>
                <Slider {...sliderSettings}>
                  {promotionsData.activeBonuses.offers.map((el) => {
                    let bonusCalculations = bonusesCalculator(el, userCurrency, t);

                    return (
                      <ErrorEmpty key={el.id}>
                        <PromotionItem
                          key={el.id}
                          bonusInfo={el}
                          bonusCalculations={bonusCalculations}
                        />
                      </ErrorEmpty>
                    )
                  })}
                </Slider>
              </>
            </div>
          </div>
        )
      )}
    </section>
  )
}
