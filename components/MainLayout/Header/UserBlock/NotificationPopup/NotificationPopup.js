import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Image } from "@chakra-ui/react"
import { browserNotifications } from '../../../../../helpers/browserNotifications'
import {
  changeLocalUserSubscriptions,
  changeUserSubscriptions
} from '../../../../../redux/userSubscriptions/action'
import ErrorEmpty from '../../../../ErrorBoundaryComponents/ErrorEmpty'
import { useTranslation } from 'next-i18next'
import {HStack, chakra, Text, Box} from "@chakra-ui/layout";
import {MessageItem} from "./MessageItem";
import Link from "next/link";

export const NotificationPopup = ({ notifyData, checkReadMessages, subscriptInfo }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  let timerCount = 0

  useEffect(() => {
    let timerShow = setInterval(() => {
      timerCount = timerCount + 1

    }, 1000)
    return () => {
      if (timerCount >= 5) {
        checkReadMessages()
      }
      clearInterval(timerShow)
    }
  }, [])

  const userInfo = useSelector((state) => state.authInfo.user.user)

  const [emailSubscript, setEmailSubscript] = useState(userInfo.transactional_email_opt_in)
  const [smsSubscript, setSmsSubscript] = useState(userInfo.transactional_sms_opt_in)
  const [notifySubscript, setNotifySubscript] = useState(userInfo.browser_opt_in)

  const soundClickHandler = () => {
    browserNotifications()
    let userData
    if (notifySubscript === 1) {
      userData = {
        id: userInfo.id,
        transactional_email_opt_in: emailSubscript,
        transactional_sms_opt_in: smsSubscript,
        browser_opt_in: 0
      }
      setNotifySubscript(0)
    } else {
      userData = {
        id: userInfo.id,
        transactional_email_opt_in: emailSubscript,
        transactional_sms_opt_in: smsSubscript,
        browser_opt_in: 1
      }
      setNotifySubscript(1)
    }
    dispatch(changeUserSubscriptions(userData))
    dispatch(changeLocalUserSubscriptions(userData))
  }

  return (
    <Box
      position="absolute"
      top="45px"
      right="-80px"
      color="white"
      w="301px"
      maxH="840px"
      p="5px 0px 10px 0px"
      backgroundColor="black"
      fontFamily="Franklin Gothic"
    >
      <HStack py="10px" px="15px" w="100%" justifyContent="space-between">
        <Text
          as="span"
          fontSize="16px"
          color="text.180"
          fontFamily="Franklin Gothic"
        >
          {t('notificationPopup.header.heading')}
        </Text>
        <Image
          w="28px"
          h="19px"
          mr="15px"
          onClick={soundClickHandler}
          src={`/assets/icons/notifications/${notifySubscript === 1 ? 'sound_on.svg' : 'sound_off.svg'}`}
          alt=""
        />
      </HStack>

      <Box maxH="720px" overflow="hidden">
        <ErrorEmpty>
          {notifyData?.map((el) => {
            return (
              <ErrorEmpty key={`notification ${el.id}`}>
                <MessageItem
                  key={`notification ${el.id}`}
                  messageType={el.type}
                  text={el.text}
                  additionalText={el.text_additional}
                  icon={el.image}
                  link={el.link}
                  time={el.time_created}
                />
              </ErrorEmpty>
            )
          })}
        </ErrorEmpty>
      </Box>

      <HStack
        h="20px"
        alignItems="flex-end"
        justifyContent="center"
        mt="5px"
      >
        <Link href={'/notifications'}>
          <chakra.a
            fontSize="14px"
            lineHeight="18px"
            color="text.250"
          >
            {t("notificationPopup.moreLink")}
          </chakra.a>
        </Link>
      </HStack>
    </Box>
  )
}
