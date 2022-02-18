import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import styles from '../../styles/AboutUs.module.scss'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { WhySlotsIdol } from '../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol'
import { MainBlock } from '../../components/AboutUsPageComponents/MainBlock/MainBlock'
import { TextBlocks } from '../../components/AboutUsPageComponents/TextBlocks/TextBlocks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCurrency } from '../../redux/actions/currency'
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
        <div className={styles.textWhyslotsBack}>
          <TextBlocks/>
          <ErrorText>
            <WhySlotsIdol isBackShow={false}/>
          </ErrorText>
        </div>
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