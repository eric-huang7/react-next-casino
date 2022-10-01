import styles from "../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import {Input} from "@chakra-ui/input";

export const InputContainer = ({t, inputId, inputName, value, valueHandler, disableEdit, phoneError}) =>
  inputId === 'mobileInput' ? (
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
        <span className={styles.errorMessage}>{phoneError}</span>
        <span className={styles.phonePrompt}>{t("myAccount.editProfilePage.mobileAdd")}</span>
      </div>
    </div>
  ) : (
    <>
      <FormControl display="flex" spacing={0} mb="45px">
        <FormLabel w="180px">{inputName}</FormLabel>
        <Input
          type="text"
          h="30px"
          w="239px"
          border="none"
          borderRadius={0}
          focusBorderColor="none"
          borderBottom="1px solid #b2b2b2 !important"
          value={value}
          id={inputId}
          disabled={disableEdit}
          onChange={(e) => valueHandler(e.target.value)}
        />
        {/*<FormHelperText></FormHelperText>*/}
      </FormControl>

    {/*<div className={styles.inputWrapper}>*/}
    {/*  <label htmlFor={inputId}>{inputName}</label>*/}
    {/*  <input*/}
    {/*    type="text"*/}
    {/*    id={inputId}*/}
    {/*    value={value}*/}
    {/*    disabled={disableEdit}*/}
    {/*    onChange={(e) => valueHandler(e.target.value)}*/}
    {/*  />*/}
    {/*</div>*/}
      </>
  )
