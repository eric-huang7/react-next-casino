import { InputsBlock } from './InputsBlock'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import BodyText from "../../typography/BodyText";

export const MainBlock = ({ t, userInfo }) => (
  <div>
    <BodyText p="0 100px 25px 0" borderBottom="1px solid #b6b6b6">
      {t("myAccount.selfExclusionPage.text")}
    </BodyText>
    <ErrorText>
      <InputsBlock t={t} userInfo={userInfo}/>
    </ErrorText>
  </div>
)
