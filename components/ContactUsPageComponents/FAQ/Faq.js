import { data } from './faqData'
import { FaqDropdownItem } from './FaqDropdownItem'
import {Accordion, Box} from "@chakra-ui/react"
import {Text} from "@chakra-ui/layout";

export const Faq = ({ t }) => (
  <>
  <Box w="100%" mt="0" p="20px 20px 30px" bg="transparent" >
    <Box m="0 auto" maxW="830px">
      <Text as="h2" id={'faq'} fontFamily="Lithograph" fontWeight={700} fontSize="36px" lineHeight="31px"
        color="#FFFFFF" m={0} position="relative">
        FAQ
      </Text>
    </Box>
  </Box>
  <Box w="100%" bg="white" mt="0" p="0 20px">
    <Box m="0 auto" maxW="830px">
        <Accordion allowMultiple>
        {data.map((el, index) => (
          <Box key={el.id} borderBottom={index < data.length - 1 && "1px solid #A93618"}>
            <FaqDropdownItem
              t={t}
              heading={el.heading}
              img={el.img}
              innerInfo={el.innerInfo}
            />
          </Box>
        ))}
        </Accordion>
    </Box>
  </Box>
  </>
)
