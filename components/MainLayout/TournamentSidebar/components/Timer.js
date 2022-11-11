import {useEffect, useState} from "react";
import {dateTimer} from "../../../../helpers/timer";
import {HStack, chakra} from "@chakra-ui/react";
import Image from "next/image";

export const Timer = ({t, router, time}) => {
  const [timeEnd, setTime] = useState('')

  useEffect(() => {
    let timer;
    timer = setInterval(() => setTime(dateTimer(time, router.locale)), 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [timeEnd]);

  return (
    <HStack>
      <Image src="/assets/img/tournaments/time.webp" width="21px" height="21px"/>
      <chakra.p
        fontSize="12px"
        color="#78797d"
        fontFamily="Verdana"
        m={0}
      >
        {router.locale === 'ru' ? `${t("tournaments.timeLeft")} ${timeEnd}` : `${timeEnd} ${t("tournaments.timeLeft")}`}
      </chakra.p>
    </HStack>
  )
}
