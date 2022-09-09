import {TwoFaCodeInput} from "./FormsConponents/TwoFaCodeInput";
import {useEffect, useRef, useState} from "react";
import {qr_auth_url} from "../../redux/url/url";
import {auth} from "../../redux/user/action";
import {useDispatch} from "react-redux";
import {showTwoFaPopup} from "../../redux/popups/action";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import Connect from "../../helpers/connect";
import { HStack } from "@chakra-ui/react";
import {VStack, Text} from "@chakra-ui/layout";

export const TwoFaCodeInputContainer = ({t,}) => {
  const dispatch = useDispatch();

  const [authError, setAuthError] = useState('');
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const codeRef = useRef(undefined);

  const handleChange = (val) => {
    setAuthError('');
    setValue(val);
  }

  useEffect(() => {
    if (value.length === 6) {
      let googleAuthData = {
        token: value,
      }

      setIsLoading(true);
      Connect.post(qr_auth_url, googleAuthData, {}, (status, data) => {
        setIsLoading(false);
        dispatch(auth());
        setAuthError('');
        codeRef.current?.retry();
        setValue('');
        dispatch(showTwoFaPopup(false));
      }).catch((err) => {
        setIsLoading(false);
        setAuthError('twoFactorAuthPopup.errorMessage.wrongCode');
        setValue('');
        codeRef.current?.retry();
      })
      setValue('');
    }
  }, [value])

  return (
    <VStack>
      {isLoading
        ? <HStack mt="30px" h="60px" alignItems="center" justifyContent="center" overflow="hidden">
          <LoadingComponent t={t} />
        </HStack>
        : <>
          <Text fontSize={{base: "14px", lg: "18px"}} lineHeight="22px" color="#707070" my="20px">
            {t('twoFactorAuthPopup.instructionText')}
          </Text>

          <TwoFaCodeInput
            error={authError}
            handleChange={handleChange}
            value={value}
            codeRef={codeRef}
          />
          <Text fontSize={{base: "12px", lg: "14px"}} lineHeight="22px" color="red">
            {t(authError)}
          </Text>
        </>
      }
    </VStack>
  )
}
