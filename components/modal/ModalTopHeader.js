import {Box, Text} from "@chakra-ui/layout";
import {useRouter} from "next/router";

const ModalTopHeader = ({
  width = '430px', title, fontSize = {base: "30px", lg: "40px"}, top = {base: "-120px", lg: "-80px"}
}) => {
  const router = useRouter();

  return (
    <Box
      position="absolute"
      top={top}
      left={{base: 0, lg: `calc((${width} - 70vw) / 2)`, xl: `calc((${width} - 50vw) / 2)`}}
      width={{base: "100%", lg: '70vw', xl: '50vw'}}
    >
      <Text
        fontFamily="Montserrat"
        color="white"
        fontSize={fontSize}
        fontWeight={900}
        letterSpacing="1px"
        textTransform="uppercase"
        textAlign="center"
      >
        {title}
      </Text>
    </Box>
  )
}

export default ModalTopHeader;
