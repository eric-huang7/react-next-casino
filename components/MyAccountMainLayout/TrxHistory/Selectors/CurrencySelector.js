import { currencyInfo } from '../../../../helpers/currencyInfo'
import SelectField from "../../../form/SelectField";
import {HStack} from "@chakra-ui/react";

export const CurrencySelector = ({ t, currencyData, userInfo, setCurrencyFilter }) => (
  <HStack alignItems="center">
      <SelectField name="currencySelectHistory" onChange={setCurrencyFilter}
                 label={t('myAccount.history.transactions.inputsLabels.currency')}
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
