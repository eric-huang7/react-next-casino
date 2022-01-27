import styles from '../../styles/ForgotPassword/ForgotPassword.module.scss';
import {HeadingBlock} from "./HeadingBlock";
import {ResetPasswordButton} from "./ResetPasswordButton";
import {EmailEnteringContainer} from "./EmailEnteringContainer/EmailEnteringContainer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaEmail} from "../../schemasForms/emailForm";


export const ForgotPasswordComponent = ({t}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaEmail),
  });

  const onSubmitHandler = (data) => {
    console.log(data, 'USER EMAIL');
  }

  return (
    <div className={`${styles.forgotPasswordWrapper} `}>
      <div className={styles.mainContainer}>
        <div className={styles.instructionsBlock}>
          <HeadingBlock t={t}/>
          <div className={styles.innerContainer}>
            <EmailEnteringContainer
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmitHandler={onSubmitHandler}
              register={register}
              t={t}
            />
          </div>
        </div>
        <ResetPasswordButton t={t} />
      </div>
    </div>
  )
}