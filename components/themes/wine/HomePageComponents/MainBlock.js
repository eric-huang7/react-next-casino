import {HStack} from "@chakra-ui/react"
import {assetsPath} from "../../../../envs/theme";

export const MainBlock = () => (
  <HStack
    position="relative"
    w="100%"
    h={{base: "709px", lg: "827px"}}
    alignItems="center"
    justifyContent="center"
    backgroundSize={{base: "cover", lg: "cover"}}
    backgroundImage={{
      base: `url('${assetsPath}/img/homeImg/home_header_bckgr_mobile.jpg')`,
      lg: `url('${assetsPath}/img/homeImg/home_header_bckgr.jpg')`
    }}
  >
  </HStack>
)
