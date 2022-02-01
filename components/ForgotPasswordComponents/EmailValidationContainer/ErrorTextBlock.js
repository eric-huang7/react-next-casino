import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";


export const ErrorTextBlock = ({t, text}) => {


    return (
        <div className={styles.errorTextBlock}>
            <p>
                {t(text)}
            </p>
        </div>
    )
}