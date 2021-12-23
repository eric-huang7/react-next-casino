import styles from "../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss";


export const InputContainer = ({t, inputId, inputName, value, valueHandler, disableEdit}) => {


if (inputId === 'mobileInput') {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={inputId} className={styles.phoneLabel}>{inputName}</label>
      <div className={styles.phoneNumberWrapper}>
        <input
          type="text"
          id={inputId}
          value={value}
          disabled={disableEdit}
          onChange={(e) => valueHandler(e.target.value)}
        />
        <span className={styles.phonePrompt}>{"+ (country code) (number)"}</span>
      </div>
    </div>
  )
} else {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={inputId}>{inputName}</label>
      <input
        type="text"
        id={inputId}
        value={value}
        disabled={disableEdit}
        onChange={(e) => valueHandler(e.target.value)}
      />
    </div>
  )
}

}