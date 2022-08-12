import {newsImageUrl} from "../../../helpers/imageUrl";
import {dateFormatter} from "../../../helpers/dateTranslator";
import {useTranslation} from "next-i18next";
import {Text, VStack, Image} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

export const NewsItem = ({newsData, locale}) => {
  const {t} = useTranslation('newsData');

  let imgName = 'news image';

  try {
    const imgArr = newsData.image.split(".");
    imgName = `${imgArr[0]}_${locale}.${imgArr[1]}`;
  } catch (e) {
    imgName = 'news image';
  }

  let date = `${new Date().getTime() / 1000}000`;
  try {
    date = dateFormatter(newsData.start_time, locale, false);
  } catch (e) {
    date = `${new Date().getTime() / 1000}000`;
  }

  return (
    <Box h="465px" bg="white" position="relative" outline="1px solid #FFBF69" outlineOffset="-10px" m="0 4px">
      <Box w="100%" h="295px" overflow="hidden">
        <Image src={newsImageUrl(imgName)} alt="" width="100%" m="0 auto"/>
      </Box>
      <Box bg="white" color="black" w="100%" h="165px" p="0 5px 5px 5px">
        <VStack w="100%" h="100%" p="10px" justifyContent="space-between">
          <Text color="#000" mb="15px">{t(`${newsData.frontend_id}.newsText`)}</Text>
          <Text color="#944639" alignSelf="flex-end">{date}</Text>
        </VStack>
      </Box>
    </Box>
  )
}
