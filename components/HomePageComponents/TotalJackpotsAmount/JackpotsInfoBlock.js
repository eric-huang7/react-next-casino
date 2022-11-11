import {gameUrl} from "../../../helpers/imageUrl";
import {Text} from "@chakra-ui/react";
import {Box, HStack} from "@chakra-ui/layout";

export const JackpotsInfoBlock = ({isHidden, heading, jackpotsData}) => !isHidden && (
  <Box textAlign="center">
    <Text as="h1" fontSize="30px" color="white" fontWeight={600} fontFamily="Lithograph"
          whiteSpace="nowrap" textTransform="uppercase">{heading}</Text>
    <Box ml="8px">
      <Box w="97%" h="inherit" bg="rgba(0,0,0, 0.2)" borderRadius="25px" p="25px" m={0}>
        {jackpotsData.map((el, ind) => {
          // Number(el.jackpot_amount[0].amount).toFixed(2).toLocaleString('de')
          let currency = el.jackpot_amount[0].currency;
          let numString = Number(el.jackpot_amount[0].amount).toFixed(2);
          let num = +numString;
          let locale = num.toLocaleString('de');

          if (!locale.includes(',')) {
            locale += ',00'
          }
          if (currency === 'EUR') {
            currency = '€';
          } else if (currency === 'USD') {
            currency = '$';
          }
          return (
            <HStack key={ind} flexWrap="nowrap" alignItems="center" marginBottom="5px" w="100%">
              <Box w="33.5%" border="2px solid #47f9fd">
                <img src={gameUrl(el.game.game.id)} alt={`game ${el.game.game.id}`}/>
              </Box>
              <Box w="150px" textAlign="center" ml="40px">
                <Text fontSize="14px" color="white" fontWeight={600} fontFamily="Lato Latin Sem Bd" m={0}>
                  {`${currency} ${locale}`}
                </Text>
                <Text fontSize="16px" color="currency.500" fontFamily="Swiss721 LT" whiteSpace="nowrap"
                      noOfLines={1} m={0}>
                  {el.game.game.name}
                </Text>
              </Box>
            </HStack>
          )
        })}
      </Box>
    </Box>
  </Box>
)
