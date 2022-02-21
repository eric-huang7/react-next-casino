import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss'

export const EmailBlock = ({ userInfo }) => {

  return (
    <div className={styles.emailWrapper}>
      <label htmlFor="changePasswordEmail">Email<abbr title="required">*</abbr></label>
      <input id={'changePasswordEmail'} type="email" value={userInfo.email} disabled={true}/>
    </div>
  )
}