import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss';


export const ChangePasswordContainer = ({t}) => {


  return (
    <div className={styles.changePasswordMainWrapper}>
      <form id={'changePasswordForm'}>
        <div className={styles.emailWrapper}>
          <label htmlFor="changePasswordEmail">Email<abbr title="required">*</abbr></label>
        </div>
      </form>
    </div>
  )
}