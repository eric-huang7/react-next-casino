import {BackupCodeInput} from "./FormsConponents/BackupCodeInput";
import {useEffect, useRef, useState} from "react";
import {qr_auth_url} from "../../redux/url/url";
import {auth} from "../../redux/user/action";
import {showTwoFaPopup} from "../../redux/popups/action";
import {useDispatch} from "react-redux";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import Connect from "../../helpers/connect";
import {VStack, Text} from "@chakra-ui/layout";
import {HStack} from "@chakra-ui/react";

export const BackupCodeInputContainer = ({t}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const inputCodeHandler = (eValue) => {
    setValue(eValue)
  }

  useEffect(() => {

    if (value.length === 14) {
      let googleAuthData = {
        token: value,
      }

      setIsLoading(true);
      Connect.post(qr_auth_url, googleAuthData, {}, (status, data) => {
        setIsLoading(false);
        dispatch(auth());
        setAuthError('');
        setValue('');
        dispatch(showTwoFaPopup(false));
      }).catch((err) => {
        setIsLoading(false);
        setAuthError('twoFactorAuthPopup.errorMessage.wrongCode');
        setValue('');
      })
      setValue('');
    }
  }, [value])

  const backupCodeFormHandler = (e) => {
    e.preventDefault();
    setAuthError('twoFactorAuthPopup.errorMessage.wrongCode');
  }

  return (
    <VStack>
      {isLoading
        ? <HStack mt="30px" h="60px" alignItems="center" justifyContent="center" overflow="hidden">
          <LoadingComponent t={t}/>
        </HStack>
        : <>
          <Text fontSize={{base: "14px", lg: "18px"}} lineHeight="22px" color="#707070" my="20px">
            {t('twoFactorAuthPopup.instructionText')}
          </Text>

          <BackupCodeInput
            error={authError}
            value={value}
            inputCodeHandler={inputCodeHandler}
            backupCodeFormHandler={backupCodeFormHandler}
          />
          <Text fontSize={{base: "12px", lg: "14px"}} lineHeight="22px" color="red">
            {t(authError)}
          </Text>
        </>
      }
    </VStack>
  )
}
