import {useEffect, useRef, useState} from "react";
import {TwoFaCodeInputContainer} from "./TwoFaCodeInputContainer";
import {BackupCodeInputContainer} from "./BackupCodeInputContainer";
import {useDispatch} from "react-redux";
import {showTwoFaPopup} from "../../redux/popups/action";
import {Box} from "@chakra-ui/react";
import SelectModal from "../modal/SelectModal";
import LinkButton from "../buttons/LinkButton";
import {HStack} from "@chakra-ui/layout";

export const TwoFactorAutContainer = ({t}) => {
  const dispatch = useDispatch();
  const [showTwoFaInputCode, setShowTwoFaInputCode] = useState(true);

  const twoFaAuthRef = useRef();
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(twoFaAuthRef.current)) {
      dispatch(showTwoFaPopup(false));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {

      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  const closeTwoFaAuthHandler = () => {
    dispatch(showTwoFaPopup(false));
  }

  const changeWindowAction = () => {
    setShowTwoFaInputCode((prevState => !prevState));
  }

  return (
    <SelectModal
      isOpen={true}
      width={600}
      onClose={closeTwoFaAuthHandler}
      title={t(showTwoFaInputCode ? 'twoFactorAuthPopup.headings.twoFaCode' : 'twoFactorAuthPopup.headings.backupCode')}
    >
        <Box w="100%" pb={4}>
          {showTwoFaInputCode
            ? <TwoFaCodeInputContainer
              t={t}
            />
            : <BackupCodeInputContainer
              t={t}
            />
          }
          <HStack justifyContent="center">
            <LinkButton onClick={changeWindowAction} fontSize="14px" mt="25px">
              {t(showTwoFaInputCode ? 'twoFactorAuthPopup.buttons.useBackupCode' : 'twoFactorAuthPopup.buttons.useTwoFaCode')}
            </LinkButton>
          </HStack>
        </Box>
    </SelectModal>
  )
}
