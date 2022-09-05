import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { WhySlotsIdol } from '../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCurrency } from '../../redux/currency/action'
import { MainBlock } from '../../components/MainLayout/MainBlock'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'
import {Box} from "@chakra-ui/react";
import {TextBlock} from "../../components/typography/TextBlock";

const PrivacyPolicy = (props) => {
  const { t } = useTranslation('common')
  const privacyT = useTranslation('privacyPolicy');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <>
      <MainLayout t={t}>
        <MainBlock title={privacyT.t('heading')} />

        <Box pb="30px">
          <ErrorText>
            <TextBlock title={privacyT.t('heading')} content={privacyT.t('text')} />
          </ErrorText>
        </Box>

        <ErrorText>
          <WhySlotsIdol isBackShow={false}/>
        </ErrorText>

        <ErrorText>
          <NewsBlock isBackShow={false}/>
        </ErrorText>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'privacyPolicy', 'newsData']),
    },
  })
}

export default PrivacyPolicy
