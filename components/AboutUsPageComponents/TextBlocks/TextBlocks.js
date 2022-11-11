import { useTranslation } from 'next-i18next'
import { Box, Stack } from '@chakra-ui/react'
import {Text} from "@chakra-ui/layout";

const BlockWrapper = ({children}) => (
  <Box w={{base: "100%", lg: "22.3%"}} minH="auto" p="5px" m={{base: "14px 0 !important", lg: "14px !important"}}
       backgroundColor="rgba(58, 25, 18, 0.7)">
    {children}
  </Box>
)

const Block = ({children}) => (
  <Box w="100%" h="100%" border="1px solid #E39735" p="35px 17px 0px 17px">
    {children}
  </Box>
)

const Title = ({children}) => (
  <Text as="h2" color="primary.500" fontSize="30px" lineHeight="30px" fontWeight={600} fontFamily="Lithograph" mb="45px">
    {children}
  </Text>
)

const Txt = ({children}) => (
  <Text color="white" fontSize="14px" fontFamily="Verdana" mb="45px">
    {children}
  </Text>
)

export const TextBlocks = () => {
  const { t } = useTranslation('common')

  return (
    <Box p="115px 30px 170px 30px">
      <Stack
        direction={{base: 'column', lg: 'row'}}
        maxW="100%"
        minH="700px"
        m="0 auto"
        alignItems={{base: "center", lg: "stretch"}}
        justifyContent={{base: "flex-start", lg: "center"}}
        flexWrap="wrap"
        spacing={0}
      >
        <BlockWrapper>
          <Block>
            <Title>{t('aboutUsPage.textBlocks.slotsIdolBlock.heading')}</Title>
            <Txt>{t('aboutUsPage.textBlocks.slotsIdolBlock.firstPar')}</Txt>
            <Txt>{t('aboutUsPage.textBlocks.slotsIdolBlock.secondPar')}</Txt>
            <Txt>{t('aboutUsPage.textBlocks.slotsIdolBlock.thirdPar')}</Txt>
          </Block>
        </BlockWrapper>
        <BlockWrapper>
          <Block>
            <Title>{t('aboutUsPage.textBlocks.theFunStuf.heading')}</Title>
            <Txt>{t('aboutUsPage.textBlocks.theFunStuf.firstPar')}</Txt>
            <Txt>{t('aboutUsPage.textBlocks.theFunStuf.secondPar')}</Txt>
          </Block>
        </BlockWrapper>
        <BlockWrapper>
          <Block>
            <Title>{t('aboutUsPage.textBlocks.theSeriousStuff.heading')}</Title>
            <Txt>{t('aboutUsPage.textBlocks.theSeriousStuff.firstPar')}</Txt>
            <Txt>{t('aboutUsPage.textBlocks.theSeriousStuff.secondPar')}</Txt>
            <Txt>{t('aboutUsPage.textBlocks.theSeriousStuff.thirdPar')}</Txt>
          </Block>
        </BlockWrapper>
      </Stack>
    </Box>
  )
}
