import {useTranslation} from "next-i18next";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import {showEmailValidationErrorPopup, showForgotPasswordPopup} from "../../../redux/actions/showPopups";
import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";
import {HeadingBlock} from "../HeadingBlock";
import {InstructionsSendContainer} from "../InstructionsSendContainer/InstructionsSendContainer";
import {ResendButton} from "../EmailEnteringContainer/ResendButton";
import {ErrorTextBlock} from "./ErrorTextBlock";


export const EmailValidationError = ({t, emailError}) => {

    const dispatch = useDispatch();

    const emailValidationErrorRef = useRef();

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(emailValidationErrorRef.current)) {
            dispatch(showEmailValidationErrorPopup(false));
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
        return () => {

            document.body.removeEventListener('click', handleOutsideClick);
        }
    }, []);

    const closeButtonClickHandler = () => {
        dispatch(showEmailValidationErrorPopup(false));
    }

    const showResendContainerClickHandler = () => {
        dispatch(showEmailValidationErrorPopup(false));
        dispatch(showForgotPasswordPopup(true));
    }

    return (
        <div className={`${styles.forgotPasswordWrapper} `}>
            <div ref={emailValidationErrorRef} className={styles.mainContainer}>
                <div className={styles.instructionsBlock}>
                    <HeadingBlock
                        t={t}
                        closeForgotPasswordHandler={closeButtonClickHandler}
                        // whatDoBackButton={backButtonClickHandler}
                        text={'forgotPasswordForm.headings.error'}
                        isShowBackButton={false}
                    />
                    <ErrorTextBlock
                        text={"sd"}
                        t={t}
                    />

                    <ResendButton
                        t={t}
                        showResendContainerClickHandler={showResendContainerClickHandler}
                    />
                </div>
            </div>
        </div>
    )


}