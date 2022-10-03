import Selector from "../Selector";

export const YearSelector = ({t, year, yearSelectorHandler, disableEdit}) => {
  let yearNow = new Date().getFullYear();
  let firstYear = yearNow - 15;
  let yearsArr = Array.from({length: 100}, (el, ind) => firstYear - ind);


  return (
    <Selector value={year} disabled={disableEdit} onChange={(e) => yearSelectorHandler(e.target.value)}>
      <option value={undefined}>{null}</option>
      {
        yearsArr.map((el) => <option key={el} value={el}>{el}</option>)
      }
    </Selector>
  )
}
