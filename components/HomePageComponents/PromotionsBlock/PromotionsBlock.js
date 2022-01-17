import styles from '../../../styles/HomePage/PromotionsBlock.module.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Link from "next/link";
import {promoData} from "./promoData";
import {useSelector} from "react-redux";
import {PromotionItem} from "./PromotionItem/PromotionItem";
import {bonusesCalculator} from "../../PromotionsPageComponents/BonusesContainer/bonusesCalculator";


export const PromotionsBlock = ({t}) => {
  const {height, width} = useWindowDimensions();

  const promotionsData = useSelector((store) => store.bonuses);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);


  console.log(promotionsData.activeBonuses, "<<<<<<<<<<<<<<<<<,promotionsData")

  let itemsCount = 4;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 4;
  }

// let data = promoData();

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
    <section className={`${styles.promotionsMainWrapper} _promotionsBlock`}>
      <div className={styles.promotionsHeading}></div>
      <div className={styles.promotionsBackground}>
        <div className={styles.promotionsSliderWrapper}>
          {promotionsData.loadingActiveBonuses && !promotionsData.activeBonuses
            ?
            <h2>Loading...</h2>
            :
            <>
              <Slider {...sliderSettings}>
                {promotionsData.activeBonuses.offers.map((el) => {
                  // let bonusCalculations = bonusesCalculator(el, userCurrency, t);
                  return (
                    <PromotionItem
                      key={el.id}
                      bonusInfo={el}
                      // bonusCalculations={bonusCalculations}
                    />
                  )
                })}
              </Slider>
              <div className={styles.controlPanel}>
                <Link href={'/promotions'}><a>{t(`homePage.moreButton`)}</a></Link>
              </div>
            </>
          }

        </div>
      </div>
    </section>
  )
}