import styles from '../../../styles/HomePage/PromotionsBlock.module.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Link from "next/link";
import {promoData} from "./promoData";


export const PromotionsBlock = () => {
  const {height, width} = useWindowDimensions();

  let itemsCount = 4;
  if (width <= 1165) {
    itemsCount = 3;
  } else {
    itemsCount = 4;
  }

let data = promoData();

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
    <section className={styles.promotionsMainWrapper}>
      <div className={styles.promotionsHeading}></div>
      <div className={styles.promotionsBackground}>
        <div className={styles.promotionsSliderWrapper}>
          <Slider {...sliderSettings}>
            {data.map((el) => {
              return (
                <div key={el.id}>
                  <div className={styles.promotionItemWrapper}>
                    <div className={styles.promotionFrame}>
                      <div className={styles.promoImage}>
                        <img src={el.image} alt={`promotion ${el.id}`}/>
                      </div>
                    </div>
                    <div className={styles.promotionTextBlock}>
                      <div className={styles.frameTextBlock}>
                        <p className={styles.promotionMainText}>{el.mainText}</p>
                        <p className={styles.promotionAddText}>{el.addText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
          <div className={styles.controlPanel}>
            <Link href={'/#'}><a>more...</a></Link>
          </div>
        </div>
      </div>
    </section>
  )
}