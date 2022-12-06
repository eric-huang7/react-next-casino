import {useTranslation} from "next-i18next";
import { Text, HStack, Box, Image } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/layout";
import BonusesSlide from "./BonusesSlide";
import Slider from "react-slick";
import BonusArrowButton from "/components/buttons/BonusArrowButton";
import {useState} from "react";

const BonusesSlider = (props) => {
  const {t} = useTranslation('promotionsPage');
  const [active, setActive] = useState()
  const slides = [
    {
      title: '50 Free Spains',
      amount: '0.5',
      abbr: 'LTC',
      deadline: '11/12/2022',
      minDeposit: '$20.00',
      bg: 'rgba(5, 174, 113, 0.73)'
    },
    {
      title: '50 Free Spains',
      amount: '0.0256832',
      abbr: 'BTC',
      deadline: '11/10/2022',
      minDeposit: '$10.00',
      bg: 'rgba(243, 147, 33, 0.6)'
    },
    {
      title: '50 Free Spains',
      amount: '0.1',
      abbr: 'ETH',
      deadline: '11/09/2022',
      minDeposit: '$30.00',
      bg: 'rgba(37, 33, 243, 0.62)'
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

  const handleClick = (index) => {
    if (active === index) {
      setActive(undefined)
    } else {
      setActive(index)
    }
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
              title={item.title}
              abbr={item.abbr}
              deadline={item.deadline}
              minDeposit={item.minDeposit}
              bg={item.bg}
              active={active === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </Slider>
      </Box>
    </VStack>
  )
}

export default BonusesSlider;