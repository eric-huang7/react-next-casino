import {HStack} from "@chakra-ui/react"
import {assetsPath} from "../../../../envs/theme";

export const MainBlock = () => (
  <HStack
    position="relative"
    w="100%"
    h={{base: "500px", lg: "827px"}}
    alignItems="center"
    justifyContent="center"
    backgroundSize="cover"
    bg={`url('${assetsPath}/img/homeImg/home_header_bckgr.jpg')`}
  />
)
