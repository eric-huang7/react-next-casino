import {Box} from "@chakra-ui/react";

const MainBlock = () => (
  <Box
    backgroundImage="url('/assets/img/homeImg/home_header_bckgr.jpg')"
    backgroundSize="contain"
    minH={{base: "45vw", lg: "424px"}}
    position="relative"
  >
    <Box w="100%" h="100%" position="absolute" left="0" top="0"
         backgroundImage="url('/assets/img/contactUs/banner-center-desktop.webp')"
         backgroundRepeat="no-repeat"
         backgroundPosition="center"
         backgroundSize="contain"
         _before={{
           content: `""`,
           backgroundImage: {base: "none", lg: "url('/assets/img/contactUs/banner-left.webp')"},
           backgroundRepeat: "no-repeat",
           backgroundPosition: "left top",
           position: "absolute",
           left: 0,
           top: 0,
           width: "100%",
           height: "100%",
           // zIndex: -1
         }}
         _after={{
           content: `""`,
           backgroundImage: {base: "none", lg: "url('/assets/img/contactUs/banner-right.webp')"},
           backgroundRepeat: "no-repeat",
           backgroundPosition: "right bottom",
           position: "absolute",
           right: 0,
           bottom: 0,
           width: "100%",
           height: "100%",
         }}
    >
    </Box>
  </Box>
)

export default MainBlock;
