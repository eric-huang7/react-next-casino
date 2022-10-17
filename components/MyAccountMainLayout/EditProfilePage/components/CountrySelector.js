import {countryListAllIsoData} from "../../../../helpers/countryData";
import {countryISOCreator} from "../../../../helpers/countryISOCreator";
import {useRouter} from "next/router";
import Selector from "./Selector";
import SelectContainer from "./SelectContainer";

export const CountrySelector = ({t, countrySelectorHandler, value, disableEdit}) => {
  const router = useRouter();

  return (
    <SelectContainer label={t("myAccount.editProfilePage.country")} id="countrySelector">
      <Selector id="countrySelector" value={value} disabled={disableEdit}
                onChange={countrySelectorHandler}>
        <option value={undefined}>{null}</option>
        {
          countryListAllIsoData.map((el) => {
            let countryItemData = countryISOCreator(el.number, router.locale);
            return (
              <option key={el.name} value={countryItemData.countryCode}>{countryItemData.countryName}</option>
            )
          })
        }
      </Selector>
    </SelectContainer>
  )
}
