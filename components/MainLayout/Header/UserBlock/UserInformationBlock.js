import styles from "../../../../styles/Header/UserBlock.module.scss";


export const UserInformationBlock = ({userName, userBalanceInfo, userCurrency}) => {

  return (
    <div className={styles.userMainBlockUserInfoBlock}>
      <span>{userName}</span>
      <span>{`${userBalanceInfo} ${userCurrency}`}</span>
    </div>
  )
}