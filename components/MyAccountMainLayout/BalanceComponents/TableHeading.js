import { FaSort } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { Text, chakra } from '@chakra-ui/react';
import {HStack} from "@chakra-ui/layout";

export const TableHeading = ({onSort, columns, sort, direction}) => {
  return (
    <chakra.tr bg="white">
      <chakra.th w={{base: "80px", lg: "135px"}} />
      {columns.map(column => (
        <chakra.th
          key={column.name}
          sx={column.style}
          onClick={() => column.sort && onSort(column.name)}
          cursor={column.sort ? 'pointer' : 'default'}
          p="0 1px"
        >
          <HStack h="41px" justifyContent="center" spacing={0} bg="#eee">
            <Text fontSize="15px" textAlign="center" lineHeight={1} fontFamily="Verdana" fontWeight={400}>
              {column.title}
            </Text>
            {sort === column.name ? (direction ? <FaSortDown /> : <FaSortUp />) : column.sort && <FaSort color="#999" />}
          </HStack>
        </chakra.th>
      ))}
    </chakra.tr>
  )
}
