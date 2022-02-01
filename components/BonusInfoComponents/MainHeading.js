import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";


export const MainHeading = ({text}) => {
  const {t} = useTranslation('common');

  const router = useRouter();

  return (
    <h3 className={`${styles.mainHeading} ${router.locale === 'ru' ? styles.ru : ""}`}>
      {t(text)}
    </h3>
  )
}