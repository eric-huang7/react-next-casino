import {Box, Image, HStack} from "@chakra-ui/react"

export const MainBlock = () => (
  <HStack
    position="relative"
    w="100%"
    h={{base: "500px", lg: "600px"}}
    alignItems="center"
    justifyContent="center"
    bg="url('/assets/img/homeImg/home_header_bckgr.jpg')"
  >
    <HStack pl={{base: 0, lg: "180px"}} position="relative" alignItems="center" h="100%">
      <Box h="80%">
        <Image
          onDragStart={(e) => e.preventDefault()}
          src='/assets/img/homeImg/slot_machine.webp'
          alt=""
          h="100%"
          w="auto"
          display={{base: 'none', lg: 'block'}}
        />
        <Image
          onDragStart={(e) => e.preventDefault()}
          src='/assets/img/homeImg/slot_machine-mobile.webp'
          alt=""
          h="auto"
          w="80%"
          mx="auto"
          display={{base: 'block', lg: 'none'}}
        />
      </Box>

      <Box position="relative" left="-180px" top="-15px">
        <Image
          onDragStart={(e) => e.preventDefault()}
          src={`/assets/img/homeImg/home-banner-title.webp`}
          alt=""
          w="21vw"
          display={{base: 'none', lg: 'block'}}
        />
      </Box>
    </HStack>
  </HStack>
)
