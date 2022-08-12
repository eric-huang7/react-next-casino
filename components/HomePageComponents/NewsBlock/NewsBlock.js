import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Box } from "@chakra-ui/react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {NewsItem} from "./NewsItem";
import {useEffect, useState} from "react";
import {news_active_url} from "../../../redux/url/url";
import {useRouter} from "next/router";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import { useTranslation } from 'next-i18next'
import Connect from "../../../helpers/connect";
import SectionHeader from "../../typography/SectionHeader";
import ArrowButton from "../../buttons/ArrowButton";
import {HStack, Text} from "@chakra-ui/layout";

export const NewsBlock = ({ isBackShow, titleImage }) => {
  const { t } = useTranslation('common');

  const {width} = useWindowDimensions();
  const router = useRouter();

  const [newsData, setNewsData] = useState([]);
  const [newsError, setNewsError] = useState('');
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    Connect.get(news_active_url, {}, (status, data) => {
      setNewsData(data.results);
      setLoadingNews(false);
    }).catch((data) => {
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
      <ArrowButton
        onClick={onClick}
        direction="next"
      />
    ) : null;
  };

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;

    return currentSlide > 0 ? (
      <ArrowButton
        onClick={onClick}
        direction="prev"
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
    <Box w="100%">
      <SectionHeader>
        {t('homePage.news')} ({newsData?.length})
      </SectionHeader>
      {newsError || newsData.length === 0 ? (
        <HStack pb="1px" w="100%" maxW="1920px" m="auto">
          <Text
            as="h3"
            m="70px auto 70px"
            textAlign="center"
            textTransform="uppercase"
            fontSize="24px"
            color="white"
          >
            {/*{newsError ? t(newsError) : t('homePage.checkLater')}*/}
          </Text>
        </HStack>
        ) : (
          <Box
            pb="1px"
            w="100%"
            maxW="1920px"
            m="auto"
            backgroundPosition={isBackShow && 'center'}
            backgroundSize={isBackShow && 'cover'}
            backgroundRepeat={isBackShow && "no-repeat"}
          >
            <Box bg="rgba(0,0,0,0)" pb="85px">
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
            </Box>
          </Box>
        )
      }
    </Box>
  )
}
