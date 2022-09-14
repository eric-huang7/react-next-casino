import Link from 'next/link'
import {useEffect, useState} from "react";
import { Badge, Text, HStack } from "@chakra-ui/react";

export const SideMenuItem = ({ t, data, router, userInform }) => {
  const [countOfBonuses, setCountOfBonuses] = useState([]);

  useEffect(() => {
    if (userInform.loadingActivePendingBonuses) {
      setCountOfBonuses([])
    } else {
      setCountOfBonuses(userInform.activePendingBonuses.bonuses.length > 0 ? userInform.activePendingBonuses.bonuses : [])
    }
  }, [userInform?.loadingActivePendingBonuses])

  const isActive = router.query.pageType === data.pageType;

  return (
    <Link href={data.path}>
      <a>
        <HStack
          w="100%"
          h="70px"
          alignItems="center"
          borderBottom="1px solid #a7a7a7"
          position="relative"
          px="24px"
          bg={isActive && "primary.500"}
          // className={`${isActive ? styles.activeItem : ''}`}
        >
          <img src={router.query.pageType === data.pageType ? data.icon_active : data.icon_disabled}
               alt={'link ' + data.name + ' icon'}/>
          <Text as="span" ml={2} color={isActive ? "white" : "black"} fontSize="17px">{t(data.name)}</Text>
          {data.pageType === 'bonuses' && !userInform.loadingActivePendingBonuses && countOfBonuses.length > 0 &&
            <Badge bg="white" ml="20px" borderRadius="5px" fontSize="16px" px={2}>
              {countOfBonuses.length}
          </Badge>}
        </HStack>
      </a>
    </Link>
  )
}
