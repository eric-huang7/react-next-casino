import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Box } from "@chakra-ui/react"

import useWindowDimensions from "/hooks/useWindowDimensions";
import {useDispatch, useSelector} from "react-redux";
import {PromotionItem} from "./PromotionItem/PromotionItem";
import {bonusesCalculator} from "/components/PromotionsPageComponents/BonusesContainer/bonusesCalculator";
import {useEffect} from "react";
import ErrorEmpty from "/components/ErrorBoundaryComponents/ErrorEmpty";
import SectionHeader from "/components/typography/SectionHeader";
import SectionLoading from "/components/typography/SectionLoading";
import SmallArrowButton from "/components/buttons/SmallArrowButton";

export const PromotionsBlock = ({t, title, titleImage}) => {
  const {height, width} = useWindowDimensions();

  const userCurrency = useSelector((state) => state.userFinance);

  const promotionsData = useSelector((store) => store.bonuses);


  useEffect(() => {
    // dispatch(getActiveBonuses(userCurrency?.userCurrencyData?.id));
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

  function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
      <SmallArrowButton
        direction="next"
        onClick={onClick}
      />
    );
  };

  function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
      <SmallArrowButton
        direction="prev"
        onClick={onClick}
      />
    );
  };
  const sliderSettings = {
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
    <Box w="100%" pb={{base: 0, lg: "50px"}} overflow="hidden">
      <SectionHeader path="/promotions" bg={{base: "white", lg: "transparent"}}>
        {title} ({promotionsData?.activeBonuses?.offers?.length})
      </SectionHeader>

      {promotionsData.loadingActiveBonuses && !promotionsData.activeBonuses ? (
        <SectionLoading>{t('homePage.loading')}</SectionLoading>
      ) : (promotionsData.activeBonuses.offers.length === 0 ? (
          <SectionLoading>{t('homePage.checkLater')}</SectionLoading>
        ) : (
          <Box w="100%" p={{base: "30px 0 60px", lg: "30px 0"}} bg="#C4C4C4">
            <Box w={{base: "100%", lg: "1290px"}} m="18px auto" pt="10px" position="relative" justifyContent="center">
              <Slider {...sliderSettings}>
                {promotionsData.activeBonuses.offers?.map((el) => {
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
            </Box>
          </Box>
        )
      )}
    </Box>
  )
}
