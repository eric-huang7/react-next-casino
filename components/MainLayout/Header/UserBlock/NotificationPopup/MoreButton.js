import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import Link from "next/link";
import { useTranslation } from 'next-i18next'

export const MoreButton = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.moreButtonBlock}>
      <Link href={'/notifications'}><a>{t("notificationPopup.moreLink")}</a></Link>
    </div>
  )
}