import SelectContainer from "./SelectContainer";
import Selector from "./Selector";


export const GenderSelector = ({t, disableEdit, value, genderSelectorHandler}) => (
  <SelectContainer label={t("myAccount.editProfilePage.gender")} id="genderSelector">
    <Selector id="genderSelector" value={value} disabled={disableEdit}
        onChange={(e) => genderSelectorHandler(e.target.value)}>
      <option value={0}>{null}</option>
      <option value={1}>{t("myAccount.editProfilePage.male")}</option>
      <option value={2}>{t("myAccount.editProfilePage.female")}</option>
    </Selector>
  </SelectContainer>
)
