import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const aboutUS = (props) => {
  console.log(props)
  const { t } = useTranslation('common')
  return (
    <h1>
      ABOUT US {t('header.navbarLinks.contactUs')}
    </h1>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['navbarLinks', 'common']),
    },
  })
}

export default  aboutUS;