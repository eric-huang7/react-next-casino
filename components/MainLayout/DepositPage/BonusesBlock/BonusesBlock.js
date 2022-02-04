import Link from "next/link";
import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useTranslation} from "next-i18next";
import {BonusInfoContainer} from "../../../BonusInfoComponents/BonusInfoContainer";
import {useState} from "react";


export const BonusesBlock = (props) => {
    const {t} = useTranslation('promotionsPage');
    let {
        isUseBonus,
        bonusHeading,
        bonusImage,
        bonusDescription,
        bonusLink,
        chooseBonusClickHandler,
        bonusId,
        classImageNotActive,
        bonusData,
        userCurrency,
        canShowInfo
    } = props;

    const [isShowBonusInfo, setIsShowBonusInfo] = useState(false);

    const bonusInfoClickHandler = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        setIsShowBonusInfo((prevState => !prevState));
    }


    const bonusClickHandler = () => {
        if (chooseBonusClickHandler) {
            chooseBonusClickHandler(bonusId)
        } else {
            // console.log('not choose bonus', bonusId);
        }
    }
    return (<>
        <div
            onClick={() => bonusClickHandler()}
            className={`${styles.activeBonusInfo} ${isUseBonus ? styles.activeBonusInfo : styles.notActiveBonusInfo}`}
        >
            <img className={styles[classImageNotActive]} src={bonusImage} alt="bonus image"/>
            <div className={styles.bonusInfoBlock}>
                <div className={styles.bonusHeadingBlock}>
                    <span className={styles.bonusInfoHeading}>{t(bonusHeading)}</span>
                    {
                        canShowInfo
                            ?
                            <span
                                className={styles.infoLable}
                                onClick={(e) => bonusInfoClickHandler(e)}
                            >
                            {t("bonuses.bonusBlockInfoLink")}
                        </span>
                            :
                            <></>
                    }

                </div>
                <p className={styles.bonusDescriptionInfo}>{bonusDescription}</p>
            </div>
        </div>

        {
            isShowBonusInfo
                ?
                <BonusInfoContainer
                    bonusData={bonusData}
                    infoClickHandler={setIsShowBonusInfo}
                    isShow={isShowBonusInfo}
                    userCurrency={userCurrency}
                    fromDeposit={true}
                />
                :
                <></>
        }
    </>)
}