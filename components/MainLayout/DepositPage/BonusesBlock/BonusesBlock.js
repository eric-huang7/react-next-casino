import {useTranslation} from "next-i18next";
import {BonusInfoContainer} from "../../../BonusInfoComponents/BonusInfoContainer";
import {useState} from "react";
import { Text, HStack, Box, Image } from "@chakra-ui/react";

export const BonusesBlock = (props) => {
  const {t} = useTranslation('promotionsPage');
  let {
    bonusHeading,
    bonusImage,
    bonusDescription,
    onClick,
    bonusId,
    bonusData,
    canShowInfo,
    small
  } = props;

  const [isShowBonusInfo, setIsShowBonusInfo] = useState(false);

  const bonusInfoClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsShowBonusInfo((prevState => !prevState));
  }

  const bonusClickHandler = () => {
    onClick && onClick(bonusId)
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
      <HStack justifyContent="center" alignItems="center" width={{base: "37px", lg: "50px"}}
              height={{base: "37px", lg: "50px"}} >
        <Image src={bonusImage} borderRadius={12} alt="" width={{base: "37px", lg: small ? "33px" : "50px"}}
             height={{base: "37px", lg: small ? "33px" : "50px"}} />
      </HStack>
      <Box w={{base: "calc(100% - 70px)", lg: "calc(100% - 70px)"}}>
        {!small && <HStack
          fontSize="15px"
          lineHeight="24px"
          color="white"
          fontFamily="Montserrat"
          flexWrap="nowrap"
        >
          <Text as="span"
            fontSize="15px"
            lineHeight="24px"
            color="white"
            fontFamily="Montserrat"
            flexWrap="nowrap"
            textOverflow="ellipsis"
            display="block"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {t(bonusHeading)}
          </Text>
        </HStack>}
        <HStack
          fontSize="15px"
          lineHeight="24px"
          color="white"
          fontFamily="Montserrat"
          flexWrap="nowrap"
        >
          <Text as="p"
            color="#F39321"
            whiteSpace="nowrap"
            // textTransform="uppercase"
            overflow="hidden"
            textOverflow="ellipsis"
            sx={{
              base: {
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
          {canShowInfo && <Text fontSize={14} as="span" textDecoration="underline" mr={0} onClick={bonusInfoClickHandler}>
            {t("bonuses.bonusBlockInfoLink")}
          </Text>}
        </HStack>
      </Box>
    </HStack>

    {isShowBonusInfo && <BonusInfoContainer
      bonusData={bonusData}
      infoClickHandler={setIsShowBonusInfo}
      isShow={isShowBonusInfo}
      fromDeposit={true}
    />}
  </>)
}
