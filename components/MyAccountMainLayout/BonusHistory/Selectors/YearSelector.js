import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';


export const YearSelector = ({t, setYearFilter, yearFilter}) => {

  return (
    <div className={styles.yearSelectorWrapper}>
        <label htmlFor="yearSelector">{t("myAccount.history.bonus.inputsLabels.from")}</label>
        <select onChange={(e) => setYearFilter(e.target.value)} value={yearFilter} className={styles.yearSelector} name="yearSelector" id="yearSelector">
            <option value={undefined}>{null}</option>
            <option value={2016}>{2016}</option>
            <option value={2017}>{2017}</option>
            <option value={2018}>{2018}</option>
            <option value={2019}>{2019}</option>
            <option value={2020}>{2020}</option>
            <option value={2021}>{2021}</option>
            <option value={2022}>{2022}</option>
            <option value={2023}>{2023}</option>
            <option value={2024}>{2024}</option>
            <option value={2025}>{2025}</option>
            <option value={2026}>{2026}</option>
            <option value={2027}>{2027}</option>
            <option value={2028}>{2028}</option>
            <option value={2029}>{2029}</option>
            <option value={2030}>{2030}</option>
        </select>
    </div>
  )
}