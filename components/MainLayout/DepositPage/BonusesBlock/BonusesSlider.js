import {useTranslation} from "next-i18next";
import { Text, HStack, Box, Image } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/layout";
import BonusesSlide from "./BonusesSlide";
import Slider from "react-slick";
import BonusArrowButton from "../../../buttons/BonusArrowButton";
import {useState} from "react";

const BonusesSlider = (props) => {
  const {t} = useTranslation('promotionsPage');
  const [active, setActive] = useState()
  const slides = [
    {
      bonus: '50 Free Spains',
      amount: '0.0256832',
      abbr: 'BTC',
      time: '1:20:35:5',
    },
    {
      bonus: '50 Free Spains',
      amount: '0.0256832',
      abbr: 'BTC',
      time: '1:20:35:5',
    },
    {
      bonus: '50 Free Spains',
      amount: '0.0256832',
      abbr: 'BTC',
      time: '1:20:35:5',
    }
  ];


  function SampleNextArrow(props) {
    const { currentSlide, onClick } = props;

    return currentSlide + 1 < slides?.length ? (
      <BonusArrowButton
        onClick={onClick}
        direction="next"
        round
        w="120px"
      />
    ) : null;
  };

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;

    return currentSlide > 0 ? (
      <BonusArrowButton
        onClick={onClick}
        direction="prev"
        display
        round
        w="121px"
      />
    ) : null;
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    rows: 1,
    slidesPerRow: 1,
    centerMode: true,
    centerPadding: '130px',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  }

  return (
    <VStack
      w="100%"
      flexWrap="nowrap"
      px="0"
      cursor="pointer"
      spacing={3}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Text px="20px" fontSize={17} fontWeight={300} color="white" fontFamily="Montserrat" textTransform="capitalize">
        Choose a bonus
      </Text>
      <Box w="100%" maxW="500px" h={270} m="0 auto" position="relative">
        <Slider {...sliderSettings}>
          {slides?.map((item, index) => (
            <BonusesSlide
              key={index}
              amount={item.amount}
              bonus={item.bonus}
              abbr={item.currency}
              time={item.time}
              active={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </Slider>
      </Box>
    </VStack>
  )
}

export default BonusesSlider;