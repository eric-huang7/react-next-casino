import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';



export const TextBlock = ({t}) => {


  return (
    <div className={styles.textBlock}>
      <p>We’re always looking out for you!</p>
      <p>2-factor authentication might sound complicated, but it’s super easy o setup, and will add another layer of security to your acount</p>
      <p>Once setup, you’ll have to enter a code when you login to your account, that is being generated in the Google Authenticator app on your phone. So it’s basically a second password, like the code generator you use for online banking, making it nearly impossible for anyone else to access!</p>
      <p>If you need any more info. Let us know via Live Chat.</p>
    </div>
  )
}