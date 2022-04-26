import styles from '../../../styles/MyAccount/MainLayout/MainLayout.module.scss'
import { SideMenuItem } from './SideMenuItem'
import { useRouter } from 'next/router'

const sideMenuListData = [
  {
    id: 1,
    name: 'myAccount.pageHeadings.balance',
    icon_active: '/assets/img/myAccount/balance_active.webp',
    icon_disabled: '/assets/img/myAccount/balance.webp',
    path: '/accounts/balance',
    pageType: 'balance'
  },
  {
    id: 2,
    name: 'myAccount.pageHeadings.history',
    icon_active: '/assets/img/myAccount/history_active.webp',
    icon_disabled: '/assets/img/myAccount/history.webp',
    path: '/accounts/history',
    pageType: 'history'
  },
  {
    id: 3,
    name: 'myAccount.pageHeadings.bonuses',
    icon_active: '/assets/img/myAccount/bonuses_active.webp',
    icon_disabled: '/assets/img/myAccount/bonuses.webp',
    path: '/accounts/bonuses',
    pageType: 'bonuses'
  },
  {
    id: 4,
    name: 'myAccount.pageHeadings.profileInfo',
    icon_active: '/assets/img/myAccount/profile_info_active.webp',
    icon_disabled: '/assets/img/myAccount/profile_info.webp',
    path: '/accounts/profile-info',
    pageType: 'profile-info'
  },
  {
    id: 5,
    name: 'myAccount.pageHeadings.gamblingLimits',
    icon_active: '/assets/img/myAccount/gambling_limits_active.webp',
    icon_disabled: '/assets/img/myAccount/gambling_limits.webp',
    path: '/accounts/gambling-limits',
    pageType: 'gambling-limits'
  },
  {
    id: 6,
    name: 'myAccount.pageHeadings.documents',
    icon_active: '/assets/img/myAccount/documents_active.webp',
    icon_disabled: '/assets/img/myAccount/documents.webp',
    path: '/accounts/documents',
    pageType: 'documents'
  },
]

export const SideMenu = ({ t, userInform }) => {
  const router = useRouter()

  return (
    <aside className={styles.accountSideBlock}>
      <h2 className={styles.accountHeading}>{t('myAccount.heading')}</h2>
      <ul className={styles.accountLinksList}>
        {
          sideMenuListData.map((el) => {
            return (
              <SideMenuItem userInform={userInform} key={`${el.id} account link item`} t={t} data={el} router={router}/>
            )
          })
        }
      </ul>
    </aside>
  )
}
