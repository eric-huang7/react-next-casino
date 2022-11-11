import {useRouter} from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Text } from '@chakra-ui/react'
import {useEffect, useState} from "react";

const selected = {
  bg: 'primary.500',
  color:'white'
}
const CustomTab = ({children}) => <Tab
  _selected={selected}
  _active={selected}
  color='primary.500'
  height="40px"
  p="0 5px"
  display='flex'
  alignItems='center'
  border="2px solid"
  borderColor="primary.500"
  bg="white"
  borderRadius="20px 20px 0 0"
  mr={1}
>
  {children}
</Tab>

const tabs = [
  {
    name: 'transactions',
    url: '/accounts/history',
    title: "myAccount.history.transactions.links.transactions",
    icon: '/assets/img/myAccount/history/trx-history.webp',
    iconActive: '/assets/img/myAccount/history/trx-history-active.webp',
  },
  {
    name: 'bets',
    url: '/accounts/history/history/bets',
    title: "myAccount.history.transactions.links.bets",
    icon: '/assets/img/myAccount/history/bets-history.webp',
    iconActive: '/assets/img/myAccount/history/bets-history-active.webp'
  },
  {
    name: 'bonuses',
    url: '/accounts/history/history/bonus',
    title: "myAccount.history.transactions.links.bonus",
    icon: '/assets/img/myAccount/history/bonus-history.webp',
    iconActive: '/assets/img/myAccount/history/bonus-history-active.webp'
  },
]
export const TrxHistoryLinksContainer = ({t}) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index) => {
    setTabIndex(index);
    router.push(tabs[index].url);
  }

  useEffect(() => {
    let index = 0;

    switch (router.query.typeOfHistory) {
      case 'bets':
        index = 1;
        break;
      case 'bonus':
        index = 2;
        break;
    }

    setTabIndex(index);
  }, [router.query?.typeOfHistory])

  return (
    <Tabs index={tabIndex} onChange={handleTabsChange} variant="unstyled">
      <TabList>
        {tabs.map((item, index) => (
          <CustomTab>
            <Image src={tabIndex === index ? item.iconActive : item.icon} alt=''/>
            <Text as="span" pl={2}>{t(item.title)}</Text>
          </CustomTab>
        ))}
      </TabList>
    </Tabs>
  )
}
