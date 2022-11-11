import SelectModal from "../../../modal/SelectModal";
import {VStack} from "@chakra-ui/layout";
import RoundButton from "../../../buttons/RoundButton";
import LinkButton from "../../../buttons/LinkButton";
import BodyText from "../../../typography/BodyText";

export const GoogleAuthConfirmModal = ({t, onClose, onConfirm }) => (
  <SelectModal
    isOpen={true}
    width={430}
    headerHeight={70}
    onClose={onClose}
    title={t('myAccount.twoFactorAuthPage.confirm.title')}
    scrollBehavior="outside"
  >
    <VStack w="100%" p={4} alignItems="center" textAlign="center">
        <BodyText pb="25px">{t('myAccount.twoFactorAuthPage.confirm.text')}</BodyText>

        <RoundButton px="30px" solid title={t('myAccount.twoFactorAuthPage.confirm.yes')} uppercase onClick={onConfirm}/>
        <LinkButton onClick={onClose} py="15px">{t('myAccount.twoFactorAuthPage.confirm.no')}</LinkButton>
    </VStack>
  </SelectModal>
)
