import SelectField from "../../../form/SelectField";
import {HStack} from "@chakra-ui/react";

export const StatusSelector = ({t, setStatusFilter}) => (
  <HStack alignItems="center" mb="20px">
      <SelectField name="statusSelectHistory" onChange={setStatusFilter}
                 label={t('myAccount.history.transactions.inputsLabels.status')}
    >
      <option value={null}>{null}</option>
      <option value={1}>{t("myAccount.history.transactions.inputsItems.status.pending")}</option>
      <option value={2}>{t("myAccount.history.transactions.inputsItems.status.success")}</option>
      <option value={3}>{t("myAccount.history.transactions.inputsItems.status.error")}</option>
    </SelectField>
  </HStack>
)
