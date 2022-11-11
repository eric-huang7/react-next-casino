import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import {HStack} from "@chakra-ui/layout";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import {SearchBar} from "./SearchBar";

const linksData = [
  {href: '/games-page/btc-games', name: "btcGames", icon: '/assets/icons/home/btc_games_icon.svg', activeIcon: '/assets/icons/home/btc_games_icon_active.svg'},
  {href: '/games-page/new-games', name: "newGames", icon: '/assets/icons/home/new_games_icon.svg', activeIcon: '/assets/icons/home/new_games_icon_active.svg'},
  {href: '/games-page/top-games', name: "topGames", icon: '/assets/icons/home/top_games_icon.svg', activeIcon: '/assets/icons/home/top_games_icon_active.svg'},
  {href: '/games-page/jackpot-games', name: "jackpotGames", icon: '/assets/icons/home/jackpot_games_icon.svg', activeIcon: '/assets/icons/home/jackpot_games_icon_active.svg'},
  {href: '/games-page/table-games', name: "tableGames", icon: '/assets/icons/home/table_games_icon.svg', activeIcon: '/assets/icons/home/table_games_icon_active.svg'},
]


export const ChooseCategoryBlock = ({t}) => (
  <HStack h="85px" w="100%" spacing={0} backgroundColor="accent.850"
          backgroundImage="url('/assets/img/mainLayoutImg/header_bg.webp')">
    <HStack
      w="100%"
      maxW="1920px"
      margin="auto"
      h="85px"
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
              color="white"
              fontSize="22px"
              fontWeight="bold"
              fontFamily="Lithograph"
              textTransform="uppercase"
              whiteSpace="nowrap"
              minW="165px"
              px="30px"
            >
              <Link href={el.href}>
                <a>{t(`homePage.${el.name}`)}</a>
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
            bg="accent.500"
            lineHeight="40px"
            color="white"
            textTransform="uppercase"
            fontFamily="Lithograph"
            fontWeight={600}
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
