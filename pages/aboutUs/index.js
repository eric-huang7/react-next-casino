import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { WhySlotsIdol } from '../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol'
import { MainBlock } from '../../components/AboutUsPageComponents/MainBlock/MainBlock'
import { TextBlocks } from '../../components/AboutUsPageComponents/TextBlocks/TextBlocks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Box } from "@chakra-ui/react"
import { getCurrency } from '../../redux/currency/action'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const AboutUS = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <>
      <MainLayout>
        <MainBlock/>
        <Box backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover">
          <TextBlocks/>
          <ErrorText>
            <WhySlotsIdol isBackShow={false} title="WHY SLOTS IDOL"/>
          </ErrorText>
        </Box>
        <ErrorText>
          <NewsBlock isBackShow={false}/>
        </ErrorText>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default AboutUS
