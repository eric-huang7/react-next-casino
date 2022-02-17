import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {Heading} from "./MainContainerComponents/Heading";
import {BonusInfoBlock} from "./MainContainerComponents/BonusInfoBlock";
import {BonusAdditionalInfo} from "./MainContainerComponents/BonusAdditionalInfo";
import {BonusPageLink} from "./MainContainerComponents/BonusPageLink";
import {useTranslation} from "next-i18next";
import {bonusInfoCalculator} from "../../helpers/bonusInfoCalculator";
import BonusErrorHandler from "./ErrorHandlers/BonusErrorHandler";


export const MainBonusInfoContainer = ({closeButtonClickHandler, bonusData, userCurrency}) => {
    const {t} = useTranslation('common');


    let bonusInfo = bonusInfoCalculator(bonusData, userCurrency.userCurrencyData, t);


    return (
        <div className={styles.mainBonusContainer}>

            <Heading
                closeButtonClickHandler={closeButtonClickHandler}
                t={t}
            />
          <BonusErrorHandler>
            <BonusInfoBlock
              bonusData={bonusInfo}
              userCurrency={userCurrency}
              t={t}
            />
          </BonusErrorHandler>
          <BonusErrorHandler>
            <BonusAdditionalInfo
              bonusData={bonusInfo}
              userCurrency={userCurrency}
              t={t}
            />
          </BonusErrorHandler>
            <BonusPageLink
             t={t}
            />

        </div>
    )
}

