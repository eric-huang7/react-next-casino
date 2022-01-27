import {TextContainer} from "./TextContainer";
import {InputContainer} from "./InputContainer";
import {ResendButton} from "./ResendButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaEmail} from "../../../schemasForms/emailForm";


export const EmailEnteringContainer = ({t, handleSubmit, register, onSubmitHandler, errors, showResendContainerClickHandler}) => {



  return (
    <>
      <TextContainer
        t={t}
      />
      <InputContainer
        register={register}
        handleSubmit={handleSubmit}
        onSubmitHandler={onSubmitHandler}
        errors={errors}
        t={t}
      />
      <ResendButton
        t={t}
        showResendContainerClickHandler={showResendContainerClickHandler}
      />
    </>
  )
}