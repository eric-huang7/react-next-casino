import {showDepositModal} from "../../../redux/popups/action";
import {useDispatch, useSelector} from "react-redux";
import {setUserBonus} from "../../../redux/userBonus/action";
import {useRouter} from "next/router";
import {imagesUrl} from "../../../envs/url";
import { Box } from "@chakra-ui/react";

export const BonusButton = ({bonusInfo, userData}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal);

  const openDepositModalHandler = () => {
    if (userData.isAuthenticated) {
      if (!isShowDepositModal) {
        dispatch(setUserBonus(bonusInfo.id));
        dispatch(showDepositModal(true));
      }
    }
  }

  let bonusButton = null;
  if (bonusInfo.button) {
    bonusButton = bonusInfo.button.split('.').join(`_${router.locale}.`);
  }

  let bonusImage = '/assets/img/promotionsPage/bonus2.webp'
  return bonusButton ? (
    <Box
      position="absolute"
      top={{base: "95px", lg: 0}}
      right={{base: "-5px", lg: 0}}
      w={{base: "100px", lg: "auto"}}
      cursor="pointer"
      onClick={openDepositModalHandler}
    >
      <img draggable={false}
           src={bonusButton ? `${imagesUrl}images/${bonusButton}` : bonusImage}
           alt=""/>
    </Box>
  ) : null
}
