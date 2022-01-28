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
import {token_url} from "../../../redux/url/url";
import axios from "axios";
import {auth, changePasswordLogin} from "../../../redux/actions/userData";
import {InstructionsSendContainer} from "../InstructionsSendContainer/InstructionsSendContainer";


export const ChangePasswordContainer = ({t, token}) => {
  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaChangePasswordWindow),
  });

  const [requestError, setRequestError] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);

  const backButtonClickHandler = () => {

  }

  const closeForgotPasswordHandler = () => {
    dispatch(showChangePasswordPopup(false));
  }

  const onSubmitHandler = (data) => {
    let userData = {
      type: 2,
      password: data.password,
      token: token
    }

    axios.patch(token_url, userData)
      .then((data) => {
        setRequestError('');
        setRequestSuccess(true);
        dispatch(changePasswordLogin(data.data));
        if (typeof window !== "undefined") {
          localStorage.setItem("userAuth", 'true');
        }
      })
      .catch((err) => {
        reset();
        setRequestSuccess(false);
        setRequestError('forgotPasswordForm.errors.responseError');
        console.log(err.response, 'change password error!!!!');
      })
  }

  if (requestSuccess) {
    return (
      <div className={`${styles.forgotPasswordWrapper} `}>
        <div className={styles.mainContainer}>
          <div className={styles.instructionsBlock}>
            <HeadingBlock
              t={t}
              closeForgotPasswordHandler={closeForgotPasswordHandler}
              whatDoBackButton={backButtonClickHandler}
              text={'forgotPasswordForm.headings.passwordChanged'}
              isShowBackButton={false}
            />
            <InstructionsSendContainer
              t={t}
              text={'forgotPasswordForm.successPasswordChange'}
            />
          </div>
        </div>
      </div>
    )
  } else {
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
}