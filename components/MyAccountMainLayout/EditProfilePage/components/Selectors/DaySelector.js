import Selector from "../Selector";

export const DaySelector = ({t, daySelectorHandler, day, disableEdit}) => {
  let daysArr = Array.from({length: 31}, (el, ind) => ind + 1);

  return (
    <Selector value={day} disabled={disableEdit} onChange={daySelectorHandler}>
      <option value={undefined}>{null}</option>
      {
        daysArr.map((el) => <option key={el} value={el}>{el}</option>)
      }
    </Selector>
  )
}
