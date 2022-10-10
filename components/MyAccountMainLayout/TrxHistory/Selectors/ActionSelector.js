import SelectField from "../../../form/SelectField";
import {HStack} from "@chakra-ui/react";

export const ActionSelector = ({t, setActionFilter}) => (
  <HStack alignItems="center" mb="20px">
    <SelectField name="actionSelectHistory" onChange={(e) => setActionFilter(e.target.value)}
                 label={t('myAccount.history.transactions.inputsLabels.action')}
    >
      <option value={null}>{null}</option>
      <option value={'Deposit'}>{t("myAccount.history.transactions.inputsItems.action.deposit")}</option>
      <option value={'Withdrawal'}>{t("myAccount.history.transactions.inputsItems.action.withdrawal")}</option>
    </SelectField>
  </HStack>
)
