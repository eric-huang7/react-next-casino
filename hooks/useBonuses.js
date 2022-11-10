import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bonusesFinder} from "../helpers/bonusesFinder";

export default function useBonuses() {
  const [allBonuses, setAllBonuses] = useState([])

  const userLogin = useSelector((state) => state.authInfo.isAuthenticated)
  const activeBonuses = useSelector((state) => state.bonuses)
  const userSelectedBonus = useSelector((state) => state.userBonus)
  const userCurrency = useSelector((state) => state.userFinance)

  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.currency)

  useEffect(() => {
    if (userLogin) {

      let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency)
      if (bonuses.length > 0) {
        setAllBonuses(bonuses)
      } else {
        setAllBonuses([])
      }

    } else {
      setAllBonuses([])
    }

  }, [userCurrency])

  return {activeBonuses, allBonuses};
}
