import styles from '../../styles/ForgotPassword/ForgotPassword.module.scss';
import {HeadingBlock} from "./HeadingBlock";
import {ResetPasswordButton} from "./ResetPasswordButton";
import {EmailEnteringContainer} from "./EmailEnteringContainer/EmailEnteringContainer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaEmail} from "../../schemasForms/emailForm";
import {InstructionsSendContainer} from "./InstructionsSendContainer/InstructionsSendContainer";
import {useState} from "react";
import {ResendEmailContainer} from "./ResendEmailContainer/ResendEmailContainer";


export const ForgotPasswordComponent = ({t}) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaEmail),
  });

  const [successSend, setSuccessSend] = useState(false);

  const onSubmitHandler = (data) => {
    console.log(data, 'USER EMAIL');
  }


  if (successSend) {
    return (
      <div className={`${styles.forgotPasswordWrapper} `}>
        <div className={styles.mainContainer}>
          <div className={styles.instructionsBlock}>
            <HeadingBlock t={t}/>
            <InstructionsSendContainer t={t} />
          </div>
        </div>
      </div>
      // <ResendEmailContainer
      //   t={t}
      //   register={register}
      //   onSubmitHandler={onSubmitHandler}
      //   handleSubmit={handleSubmit}
      //   errors={errors}
      // />
    )
  } else {
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

}