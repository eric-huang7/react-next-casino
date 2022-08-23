import { ProviderItem } from './ProviderItem'
import { useRouter } from 'next/router'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'
import SectionHeader from "../typography/SectionHeader";
import {Text, VStack} from "@chakra-ui/layout";
import React from "react";
import {HStack} from "@chakra-ui/react";
import LoadingItems from "../GamesPageComponents/LoadingItems";

export const ProvidersContainer = ({ t, isLoaded, providersData, providersError }) => {
  const router = useRouter()

  let countOfGames = 0
  providersData.map((el) => {
    countOfGames += Number(el.games)
  })

  const allGamesClickHandler = () => {
    router.push({
      pathname: '/games-page/[id]',
      query: { id: 'all-games' },
    })
  }

  const providerClickHandler = (provider) => {
    router.push({
      pathname: `/games-page/[id]/`,
      query: { id: provider.game_producer }
    })
  }

  let providers = providersData.map((el, index) => {
    return (
      <ErrorEmpty key={`${index} ${el.game_producer}`}>
        <ProviderItem
          onClick={providerClickHandler}
          key={`${index} ${el.game_producer}`}
          t={t}
          providerData={el}
        />
      </ErrorEmpty>
    )
  })

  return (
    <VStack
      maxW="1360px"
      m={{base: "16px", lg: "30px auto"}}
      p={{base: "0 0 30px", lg: "0 30px 50px"}}
    >
      <SectionHeader px={{base: "16px", lg: "20px"}} fontSize={30} justifyContent={{base: 'center', lg: 'flex-start'}}>
        {t('providersPage.heading')}
      </SectionHeader>
      <HStack w="100%" spacing={0} p={{base: 0, lg: "12px 6px 6px 6px"}} flexWrap="wrap" pb={0}>
        {providersError ?
          <Text as="h2" m="0 auto" fontSize="24px" fontFamily="Arial" color="#ffffff">{t(providersError)}</Text>
          : (isLoaded
            ? <>
              <ProviderItem
                onClick={allGamesClickHandler}
                t={t}
                text={t('providersPage.allProviders')}
                providerData={{games: countOfGames}}
              />
              {providers}
            </>
            : <LoadingItems />
          )
        }
      </HStack>
    </VStack>
  )
}
