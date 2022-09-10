import Image from "next/image";
import {HStack, VStack} from "@chakra-ui/react";

export const ImgContainer = ({activeSlots, setActiveSlots, activeTime, setActiveTime, slotRef, timeref}) => {
  const slotsClickHandler = () => {
    setActiveSlots(!activeSlots)
    setActiveTime(false);
  }
  const timeClickHandler = () => {
    setActiveTime(!activeTime)
    setActiveSlots(false)
  }

  return (
    <HStack h="inherit" alignItems="center" spacing={0}>
      <HStack ref={slotRef} onClick={slotsClickHandler} w="54px" h="100%" alignItems="center" justifyContent="center"
              cursor="pointer" ml="20px">
        <Image layout='fixed' src={`/assets/img/footerArea/slot_${activeSlots ? 'active' : 'dis'}.webp`}
               width={34} height={23} alt={'icon of popular games'}/>
      </HStack>
      <HStack ref={timeref} onClick={timeClickHandler} w="54px" h="100%" alignItems="center" justifyContent="center"
              cursor="pointer">
        <Image layout='fixed' src={`/assets/img/footerArea/time_${activeTime ? 'active' : 'dis'}.webp`}
               width={20} height={19} alt={'icon of last games'}/>
      </HStack>
    </HStack>
  )
}
