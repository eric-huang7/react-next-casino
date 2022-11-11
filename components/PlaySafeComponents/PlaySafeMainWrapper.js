import Link from "next/link";
import { useTranslation } from 'next-i18next'
import LightModal from "../modal/LightModal";
import {showPlaySafe} from "../../redux/popups/action";
import {useDispatch} from "react-redux";
import { Text, VStack } from "@chakra-ui/react";
import {HStack} from "@chakra-ui/layout";

const Label = ({children}) => <Text w={200}>{children}</Text>
export const PlaySafeMainWrapper = () => {
  const {t} = useTranslation('common');
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(showPlaySafe(false));
  }

  return (
    <LightModal
      isOpen
      onClose={closeHandler}
      title={t(`playSafe.heading`)}
    >
      <VStack alignItems="flex-start" spacing={4} sx={{
        "& a": {color: "primary.500"}
      }}>
        <Text>
          {t("playSafe.firstBlock")}
        </Text>
        <Text>{t("playSafe.secondBlockHeading")}</Text>
        <Text>
          {t("playSafe.secondBlock")}
          {<Link href={"mailto:support@slotsIdol.com"}><a>support@slotsidol.com</a></Link>}.
        </Text>

        <Text>
          {t("playSafe.thirdBlock.partOne")}{<Link href={"mailto:support@slotsIdol.com"}><a>support@slotsidol.com</a></Link>}. {t("playSafe.thirdBlock.partTwo")}
        </Text>
        <Text>{t("playSafe.fourthBlock")}</Text>

        <Text pt={3}>{t("playSafe.linksBlock.heading")}</Text>

        <VStack spacing={3} alignItems="flex-start">
          <HStack>
              <Label>{"GamCare"}</Label>
              <Link href={"https://gamcare.org/"}><a>{"gamcare.org"}</a></Link>
          </HStack>
          <HStack>
              <Label>{"GordonHouse"}</Label>
              <Link href={"https://gordonhouse.org/"}><a>{"gordonhouse.org"}</a></Link>
          </HStack>
          <HStack>
              <Label>{"Gam - Anon"}</Label>
              <Link href={"https://gamblersanonymous.org/"}><a>{"gamblersanonymous.org"}</a></Link>
          </HStack>
        </VStack>
      </VStack>
    </LightModal>
  )
}
