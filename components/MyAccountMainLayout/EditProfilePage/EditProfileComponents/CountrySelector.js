import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';
import {countryListAllIsoData} from "../../../../helpers/countryData";
import {countryISOCreator} from "../../../../helpers/countryISOCreator";
import {useRouter} from "next/router";


export const CountrySelector = ({t, countrySelectorHandler, value, disableEdit}) => {
  const router = useRouter();

  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="countrySelector">{t("myAccount.editProfilePage.country")}</label>
      </div>
      <div className={styles.selectorsContainer}>
        <select
          id="countrySelector"
          onChange={(e) => countrySelectorHandler(e.target.value)}
          value={value}
          disabled={disableEdit}
        >
          <option value={undefined}>{null}</option>
          {
            countryListAllIsoData.map((el) => {
              let countryItemData = countryISOCreator(el.number, router.locale);
              return (
                <option key={el.name} value={countryItemData.countryCode}>{countryItemData.countryName}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}
