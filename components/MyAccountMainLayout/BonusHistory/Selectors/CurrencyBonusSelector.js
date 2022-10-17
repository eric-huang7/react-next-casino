import { currencyInfo } from '../../../../helpers/currencyInfo'
import { HStack } from "@chakra-ui/react"
import SelectField from "../../../form/SelectField";

export const CurrencyBonusSelector = ({ t, currencyData, userInfo, setCurrencyFilter, currencyFilter }) => (
  <HStack alignItems="center">
      <SelectField value={currencyFilter} name="currencySelectHistory" onChange={setCurrencyFilter}
      label={t('myAccount.history.bonus.inputsLabels.currency')}
    >
      <option key={`option currency select`} value={undefined}>{null}</option>
      {userInfo.balance.balances.map((el) => (
        <option
          key={`${el.id} option currency select`}
          value={el.currency_id}
        >
          {currencyInfo(currencyData.currency.results, el.currency_id)[0]?.abbreviation}
        </option>
      ))}
    </SelectField>
  </HStack>
)
