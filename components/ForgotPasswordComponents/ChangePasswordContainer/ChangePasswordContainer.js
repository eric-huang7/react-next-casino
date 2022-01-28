import styles from "../../../styles/ForgotPassword/ForgotPassword.module.scss";
import {HeadingBlock} from "../HeadingBlock";
import {ResetPasswordButton} from "../ResetPasswordButton";
import {useDispatch} from "react-redux";
import {showChangePasswordPopup} from "../../../redux/actions/showPopups";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {PasswordInputsContainer} from "./PasswordInputsContainer";
import {useState} from "react";
import {schemaChangePasswordWindow} from "../../../schemasForms/changePasswordWindowForm";


export const ChangePasswordContainer = ({t}) => {
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaChangePasswordWindow),
  });

  const [requestError, setRequestError] = useState('');

  const backButtonClickHandler = () => {

  }

  const closeForgotPasswordHandler = () => {
    dispatch(showChangePasswordPopup(false));
  }

  const onSubmitHandler = (data) => {
    console.log(data, 'change password');
  }


  return (
    <div className={`${styles.forgotPasswordWrapper} `}>
      <div className={styles.mainContainer}>
        <div className={styles.instructionsBlock}>
          <HeadingBlock
            t={t}
            closeForgotPasswordHandler={closeForgotPasswordHandler}
            isShowBackButton={false}
            whatDoBackButton={backButtonClickHandler}
            text={'forgotPasswordForm.headings.changePassword'}
          />
          <div className={styles.innerContainer}>
            <PasswordInputsContainer
              t={t}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmitHandler={onSubmitHandler}
              register={register}
              requestError={requestError}
            />
          </div>
        </div>
        <ResetPasswordButton
          t={t}
          text={'forgotPasswordForm.buttonsText.submit'}
          whichForm={'changePasswordWindowForm'}
        />
      </div>
    </div>
  )
}