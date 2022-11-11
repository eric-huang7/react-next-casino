import { HStack } from "@chakra-ui/react"
import SelectField from "../../../form/SelectField";

export const StatusSelector = ({ t, setStatusFilter, statusFilter }) => (
  <HStack alignItems="center" mb="20px">
      <SelectField value={statusFilter} name="statusSelectHistory" onChange={setStatusFilter}
       label={t('myAccount.history.bonus.inputsLabels.status')}
    >
      <option value={undefined}>{null}</option>
      <option value={1}>{t('myAccount.history.bonus.statusItems.active')}</option>
      <option value={2}>{t('myAccount.history.bonus.statusItems.lost')}</option>
      <option value={3}>{t('myAccount.history.bonus.statusItems.redeemed')}</option>
      <option value={4}>{t('myAccount.history.bonus.statusItems.canceled')}</option>
      <option value={6}>{t('myAccount.history.bonus.statusItems.expired')}</option>
    </SelectField>
  </HStack>
)
