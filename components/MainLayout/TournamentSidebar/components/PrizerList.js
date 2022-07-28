import {Box, chakra} from "@chakra-ui/react"
import {HStack, VStack} from "@chakra-ui/layout";
import Image from "next/image";
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

const PrizerList = ({sliderPosition, tournaments}) => {
  const tournament = tournaments?.tournaments?.results[sliderPosition]

  if (tournaments.loadingTournaments) return null;

  return (
    <Box
      w="100%"
      overflowY="scroll"
      height="calc(100% - 274px)"
      css={{
        scrollbarColor: "scroll.100 scroll.500",
        scrollbarWidth: "thin",
      }}
    >
      <VStack spacing={0}>
        {
          tournaments.tournaments?.results[sliderPosition]?.prizes?.map((el, index) => {
            let nickName = tournament?.players[index]
              ? tournament?.players[index].nickname
              : '-'
            let points = tournament?.players[index]
              ? Number(tournament?.players[index].points).toFixed(2)
              : '-'
            let moneyAward = el.money_award > 0
              ? Number(el.money_award)
              : el.freespins_count
            let currency = el.money_award > 0
              ? tournament?.currency
              : 'fs'
            return (
              <ErrorEmpty key={`${el.id} prizes list`}>
                <HStack
                  w="100%"
                  fontSize="13px"
                  color={index === 0 ? "accent.400" : "text.180"}
                  alignItems="center"
                  justifyContent="flex-start"
                  fontFamily="Verdana"
                  fontWeight={900}
                  p="10px"
                  spacing={0}
                  borderBottom="2px solid"
                  borderColor="grey.300"
                  pb="10px"
                  mb="3px"
                >
                  <Box display="flex" alignItems="center" w={120} minW={120}>
                    <chakra.span mr={1}>{index + 1}.{nickName}</chakra.span>
                    {index === 0 && <Image src="/assets/img/tournaments/first_place.webp" width={23} height={29}/>}
                  </Box>
                  <Box w="35%" minW={68} mr="35px">{points ? points : 'points null'}</Box>
                  <Box>{moneyAward} {currency}</Box>
                </HStack>
              </ErrorEmpty>
            )
          })
        }
      </VStack>
    </Box>
  )
}

export default PrizerList;
