import {BonusesBlock} from "./BonusesBlock";
import {iconsUrl} from "../../../../helpers/imageUrl";
import {bonusInfoCalculator} from "../../../../helpers/bonusInfoCalculator";
import ErrorText from "../../../ErrorBoundaryComponents/ErrorText";
import {Box} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {HStack, VStack} from "@chakra-ui/layout";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {Button} from "@chakra-ui/button";

const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};

const Item = ({ children, ...props}) => <MenuItem
  px="0"
  w="calc(100% - 10px)"
  _hover={{backgroundColor: 'transparent'}}
  _active={{backgroundColor: 'transparent'}}
  _focus={{backgroundColor: 'transparent'}}
  bg={`transparent url('/assets/img/currency/line.svg') repeat-x center`}
  {...props}
>{children}</MenuItem>

const BonusesDropdown = ({
  t, allBonuses, isUseBonus,
  chooseBonusClickHandler, userSelectedBonus, userCurrency
}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setIsEmpty(!(allBonuses?.length && isUseBonus));
    if (allBonuses?.length) {
      setSelected(allBonuses[0]);
    }
  }, [allBonuses?.length])

  useEffect(() => {
    if (isEmpty) {
      chooseBonusClickHandler(0);
    }
  }, [isEmpty])

  const onChange = (value) => {
    // TODO
    setSelected(value)
  }

  const EmptyItem = () => <BonusesBlock
    t={t}
    classImageNotActive={'imageNotActive'}
    bonusImage={iDontNeedBonus.icon}
    bonusHeading={iDontNeedBonus.heading}
    bonusDescription={iDontNeedBonus.info}
    isUseBonus={isUseBonus}
    bonusLink={'/#bonusLink'}
    canShowInfo={false}
  />

  const bonusDescription = selected && bonusInfoCalculator(selected, userCurrency.userCurrencyData, t);

  return <Menu onChange={onChange} closeOnSelect>
    <MenuButton
      as={Button}
      rightIcon={allBonuses?.length > 1 && <ChevronDownIcon w={8} h={8} color="white" />}
      h="81px"
      w="100%"
      bg="accent.700"
      border="0"
      borderRadius="12px"
      alignItems="center"
      justifyContent="space-between"
      _hover={{bg: 'accent.700'}}
      _focus={{bg: 'accent.700'}}
      _active={{bg: 'accent.700'}}
      overflow="hidden"
      spacing={0}
      px="12px"
    >
      {isEmpty
        ? <EmptyItem/>
        :  selected && <BonusesBlock
          t={t}
          bonusId={selected.id}
          bonusImage={iconsUrl(selected.icon)}
          bonusHeading={`bonuses.bonus_${selected.id}.deposit_bonus.heading`}
          bonusDescription={`${bonusDescription.max_bonus}${bonusDescription.free_spins_amount ? ` + ${bonusDescription.free_spins_amount} ${t('bonusInfoContainer.bonusInfo.freeSpins')}` : ''}`}
          isUseBonus={isUseBonus}
          chooseBonusClickHandler={chooseBonusClickHandler}
          bonusData={selected}
          userCurrency={userCurrency}
          canShowInfo={true}
        />
      }
    </MenuButton>
    <MenuList minW="460px" bg="accent.700" borderRadius={12} border="none" p="10px">
      {isEmpty && <Item><EmptyItem /></Item>}
      {!isEmpty && allBonuses.sort((el) => {
        let res = el.id === userSelectedBonus.bonus_id ? -1 : 1
        if (userSelectedBonus.bonus_id === 0) {
          res = el.id === 1 ? -1 : 1
        }
        return res
      }).map((el) => {

        let bonusDescription = bonusInfoCalculator(el, userCurrency.userCurrencyData, t);

        return (<Item key={`${el.id} bonus`}>
          <ErrorText key={`${el.id} bonus`}>
            <BonusesBlock
              key={`${el.id} bonus`}
              t={t}
              bonusId={el.id}
              bonusImage={iconsUrl(el.icon)}
              bonusHeading={`bonuses.bonus_${el.id}.deposit_bonus.heading`}
              bonusDescription={`${bonusDescription.max_bonus}${bonusDescription.free_spins_amount ? ` + ${bonusDescription.free_spins_amount} ${t('bonusInfoContainer.bonusInfo.freeSpins')}` : ''}`}
              isUseBonus={isUseBonus}
              chooseBonusClickHandler={chooseBonusClickHandler}
              bonusData={el}
              userCurrency={userCurrency}
              canShowInfo={true}
            />
          </ErrorText>
        </Item>)
      })}
    </MenuList>
  </Menu>
}

export default BonusesDropdown;