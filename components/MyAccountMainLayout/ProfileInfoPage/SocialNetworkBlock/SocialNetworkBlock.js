import styles from '../../../../styles/MyAccount/UserInfoPage/SocialNetworkBlock.module.scss';


export const SocialNetworkBlock = ({t, userInfo}) => {


  return (
    <div className={styles.socialNetworkBlock}>
      <h3 className={styles.socialNetworkHeading}>Social Network Accounts</h3>

      <p>Use social network accounts to login into our casino.</p>
      <p>You currently do not have any social network accounts.</p>
    </div>
  )
}