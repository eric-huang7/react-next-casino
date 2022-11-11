import {chakra} from "@chakra-ui/react";

const Cell = ({children, ...props}) => <chakra.td textAlign="center" p="12px 10px" {...props}>{children}</chakra.td>;

export default Cell;
