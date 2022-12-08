import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import {HStack} from "@chakra-ui/layout";
import ErrorText from "/components/ErrorBoundaryComponents/ErrorText";
import {SearchBar} from "./SearchBar";
import {assetsPath} from "../../../../../envs/theme";

const linksData = [
  {href: '/games-page/btc-games', name: "btcGames", icon: `${assetsPath}/icons/home/categories/bitcoin.svg`, activeIcon: '${assetsPath}/icons/home/categories/bitcoin.svg'},
  {href: '/games-page/new-games', name: "newGames", icon: `${assetsPath}/icons/home/categories/fire.svg`, activeIcon: '${assetsPath}/icons/home/categories/fire.svg'},
  {href: '/games-page/top-games', name: "topGames", icon: `${assetsPath}/icons/home/categories/medal.svg`, activeIcon: '${assetsPath}/icons/home/categories/medal.svg'},
  {href: '/games-page/jackpot-games', name: "jackpotGames", icon: `${assetsPath}/icons/home/categories/jackpot.svg`, activeIcon: '${assetsPath}/icons/home/categories/jackpot.svg'},
  {href: '/games-page/table-games', name: "tableGames", icon: `${assetsPath}/icons/home/categories/cards.svg`, activeIcon: '${assetsPath}/icons/home/categories/cards.svg'},
]


export const ChooseCategoryBlock = ({t}) => (
  <HStack h={{base: "53px", lg: "85px"}} w="100%" spacing={0} backgroundColor="white">
    <HStack
      w="100%"
      maxW="1920px"
      margin="auto"
      h={{base: "53px", lg: "85px"}}
      justifyContent="space-between"
      alignItems="center"
      pr="22px"
      spacing={4}
      overflow="hidden"
    >
      <HStack spacing={0}>
        {
          linksData.map((el) => (
            <Box
              key={el.name}
              lineHeight="85px"
              color="grey.700"
              fontSize="16px"
              fontWeight={400}
              fontFamily="Roboto"
              textTransform="uppercase"
              whiteSpace="nowrap"
              minW="165px"
              px="20px"
            >
              <Link href={el.href}>
                <a><HStack><img src={el.icon} alt=""/><Text>{t(`homePage.${el.name}`)}</Text></HStack></a>
              </Link>
            </Box>
          ))
        }
      </HStack>

      <Link href={'/providers-page'}>
        <a>
          <Text
            as="div"
            fontSize="16px"
            p="0 15px"
            border="1px solid"
            borderColor="grey.300"
            color="grey.700"
            lineHeight="33px"
            textTransform="uppercase"
            fontFamily="Roboto"
            fontWeight={400}
            whiteSpace="nowrap"
          >{t('homePage.providers')}</Text>
        </a>
      </Link>

      <ErrorText>
        <SearchBar />
      </ErrorText>

    </HStack>
  </HStack>
)
