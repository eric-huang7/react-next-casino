import {InstructionsTextItem} from "./InstructionsTextItem";
import {InstructionsIconItem} from "./InstructionsIconItem";
import { Box } from "@chakra-ui/react";
import {HStack, Stack} from "@chakra-ui/layout";

const data = {
  wallet: {
    heading: 'whyUseCryptoPage.instructionsSection.iconsHeadings.wallet',
    icon: '/assets/img/whyUseCrypto/itemsIcons/wallet.svg',
    itemClass: 'walletItem',
    textInfo: 'whyUseCryptoPage.instructionsSection.textBlocks.blockOne'
  },
  bitcoin: {
    heading: 'whyUseCryptoPage.instructionsSection.iconsHeadings.bitcoin',
    icon: '/assets/img/whyUseCrypto/itemsIcons/bitcoin.svg',
    itemClass: 'bitcoinItem',
    textInfo: 'whyUseCryptoPage.instructionsSection.textBlocks.blockTwo'
  },
  spending: {
    heading: 'whyUseCryptoPage.instructionsSection.iconsHeadings.spending',
    icon: '/assets/img/whyUseCrypto/itemsIcons/spending.svg',
    itemClass: 'spendingItem',
    textInfo: 'whyUseCryptoPage.instructionsSection.textBlocks.blockThree'
  }
}

export const GetStartedInstructionsContainer = ({ t }) => (
  <Box w="100%" mb={{base: "70px", lg: "140px"}}>
    <HStack display={{base: "none", lg: "flex"}} spacing="100px" justifyContent="center" position="relative" mb="100px">
      <InstructionsIconItem t={t} data={data.wallet} arrow/>
      <InstructionsIconItem t={t} data={data.bitcoin} arrow/>
      <InstructionsIconItem t={t} data={data.spending}/>
      <Box position="absolute" bg="primary.500" zIndex={1} w="10000vw" h="100px" bottom="-32px" left="-500px"/>
    </HStack>

    <Stack direction={{base: "column", lg: "row"}}  spacing="100px" justifyContent="center"
           alignItems="flex-start"  p={{base: "24px", lg: 0}}>
      <InstructionsTextItem data={data.wallet} t={t}/>
      <InstructionsTextItem data={data.bitcoin} t={t}/>
      <InstructionsTextItem data={data.spending} t={t}/>
    </Stack>
  </Box>
)
