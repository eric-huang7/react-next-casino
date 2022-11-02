import {useTranslation} from "next-i18next";
import {BonusInfoContainer} from "../../../BonusInfoComponents/BonusInfoContainer";
import {useState} from "react";
import { Text, HStack, Box, Image } from "@chakra-ui/react";

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
    }
  }
  return (<>
    <HStack
      w="100%"
      flexWrap="nowrap"
      alignItems="center"
      minH="60px"
      px="0"
      onClick={bonusClickHandler}
      cursor="pointer"
      spacing={3}
    >
      <Image src={bonusImage} borderRadius={12} alt="" width={{base: "37px", lg: "50px"}}
             height={{base: "37px", lg: "50px"}} />
      <Box w={{base: "175px", lg: "255px"}}>
        <HStack
          fontSize="15px"
          lineHeight="24px"
          color="white"
          fontFamily="Montserrat"
          flexWrap="nowrap"
        >
          <Text as="span"
            textOverflow="ellipsis"
            display="block"
            overflow="hidden"
            maxWidth="200px"
            whiteSpace="nowrap"
          >
            {t(bonusHeading)}
          </Text>
          {canShowInfo && <Text fontSize={14} as="span" textDecoration="underline" mr={0} onClick={bonusInfoClickHandler}>
              {t("bonuses.bonusBlockInfoLink")}
          </Text>}
        </HStack>
        <Text as="p"
          color="#F39321"
          whiteSpace="nowrap"
          // textTransform="uppercase"
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{
            base: {
              width: "255px",
              fontSize: "14px",
              fontFamily: "Montserrat",
              margin: "10px 0 0 -40px"
            },
            lg: {
              fontSize: "14px",
              fontFamily: "Montserrat",
              margin: "10px 0 0 0"
            }
          }}
        >{bonusDescription}</Text>
      </Box>
    </HStack>

    {isShowBonusInfo && <BonusInfoContainer
      bonusData={bonusData}
      infoClickHandler={setIsShowBonusInfo}
      isShow={isShowBonusInfo}
      userCurrency={userCurrency}
      fromDeposit={true}
    />}
  </>)
}
