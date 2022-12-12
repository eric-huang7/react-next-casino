import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "next-i18next";
import {showTermsModal} from "/redux/popups/action";
import LightModal from "../modal/LightModal";

export const TermsModal = () => {
  const {t} = useTranslation('termsAndConditions');
  const dispatch = useDispatch();
  const isShowTermsModal = useSelector(({popups}) => popups?.isShowTermsModal);

  const closeModal = () => {
    dispatch(showTermsModal(false));
  }

  return (
    <LightModal
      isOpen={isShowTermsModal}
      onClose={closeModal}
      title={t('heading')}
    >
      <div dangerouslySetInnerHTML={{__html: t('text')}}/>
    </LightModal>
  )
}
