import {Box, Text} from "@chakra-ui/layout";
import {useRouter} from "next/router";

const ModalTopHeader = ({
  title, fontSize = {base: "30px", lg: "40px"}, top = {base: "-120px", lg: "-80px"}
}) => {
  const router = useRouter();

  return (
    <Box
      position="absolute"
      top={top}
      left={{base: 0, lg: "calc((430px - 100vw) / 2)"}}
      width={{base: "100%", lg: "100vw"}}
    >
      <Text
        fontFamily={router.locale === 'ru' ? "Arial" : "Lithograph"}
        color="primary.500"
        fontSize={fontSize}
        fontWeight={700}
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
