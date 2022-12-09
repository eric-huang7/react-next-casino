import {urlGen} from "./url";
import {Text} from "@chakra-ui/react";
import {Box, HStack} from "@chakra-ui/layout";

export const WinnersInfoBlock = ({isHidden, heading, winnersData}) => !isHidden && (
  <Box textAlign="center">
    <Text as="h1" fontSize="20px" color="white" fontWeight={700} fontFamily="Roboto"
          whiteSpace="nowrap" textTransform="uppercase">
      {heading}
    </Text>
    <Box ml="8px">
      <Box w="97%" h="inherit" bg="rgba(0,0,0, 0.2)" borderRadius="25px" p="25px" m={0}>
        {(winnersData.length > 0) ? winnersData.map((el, ind) => {
          let numString = Number(el.winnings).toFixed(2);
          let num = +numString;
          let locale = num.toLocaleString('de');

          if (!locale.includes(',')) {
            locale += ',00'
          }
          return (
            <HStack key={ind} flexWrap="nowrap" alignItems="center" marginBottom="5px" w="100%">
              <Box w="33.5%" border="2px solid #47f9fd">
                <img src={urlGen(el.game_id)} alt={`game ${el.game_id}`}/>
              </Box>
              <Box w="150px" textAlign="center" ml="40px">
                <Text fontSize="14px" color="white" fontWeight={600} fontFamily="Lato Latin Sem Bd" m={0}>
                  $ {locale}
                </Text>
                <Text fontSize="16px" color="currency.500" fontFamily="Swiss721 LT" whiteSpace="nowrap"
                      noOfLines={1} m={0}>
                  {el.game_name}
                </Text>
              </Box>
            </HStack>
          )
        }) : <Text as="h2" m="0 auto" textAlign="center" color="primary.500">Loading...</Text>}
      </Box>
    </Box>
  </Box>
)
