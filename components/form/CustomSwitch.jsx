import {Box} from "@chakra-ui/layout";
import {Switch} from "@chakra-ui/react";

const checkIcon = "PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjAwMDEgMS4zNzgzNEMxNS45OTYxIDEuNzg2MTggMTUuODEwMyAyLjEwNjUzIDE1LjUzMDQgMi4zODY1QzEyLjU4NCA1LjMzMjkxIDkuNjQxNTggOC4yODMzNiA2LjY4NzA5IDExLjIyM0M2LjAwMzMyIDExLjkwNDEgNS4yNjE2NyAxMS44OTA3IDQuNTY1NzggMTEuMjAyOUMzLjIxMDM1IDkuODY0OTIgMS44NjU2OSA4LjUxNzU3IDAuNTI2NDEgNy4xNjM0OEMtMC4xMjY0MDQgNi41MDM5NCAtMC4xNjk0NzcgNS43MDMwNyAwLjM4NjQyNSA1LjEzNzc0QzAuOTM5NjM0IDQuNTc2NDYgMS43NjA3IDQuNjExNDUgMi40MTM1MSA1LjI0OTQ2QzMuMzI0NzYgNi4xNDQ1NiA0LjI0MTM5IDcuMDM1NjEgNS4xMTQ5NSA3Ljk2NzA1QzUuNDk3MjIgOC4zNzQ4OSA1LjcwODU0IDguNDM2ODEgNi4xNDMzIDcuOTkxMjhDOC41MjQzOSA1LjU1NjM1IDEwLjk0NTkgMy4xNjE4IDEzLjM1NTIgMC43NTY0ODZDMTMuNTQ1IDAuNTY2Njk4IDEzLjczMzQgMC4zNjYxNDMgMTMuOTU1NSAwLjIyMjEyQzE0LjQwNjQgLTAuMDY5OTYzNSAxNC44OTEgLTAuMDcxMzA5NSAxNS4zNTQgMC4yMDMyNzZDMTUuNzk0MiAwLjQ2MzA1NiAxNi4wMDE1IDAuODY4MjA0IDE2LjAwMDEgMS4zNzgzNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

const CustomSwitch = ({isChecked, onChange, ...props}) => <Box
    sx={{
        '& .chakra-switch__track': {bg: 'grey !important', alignItems: 'center'},
        '& .chakra-switch__track[data-checked]': {bg: '#602B1F !important'},
        '& .chakra-switch__thumb': {bg: '#eee', w: '30px', h: '30px', transform: 'translateX(20px)'},
        '& .chakra-switch__thumb[data-checked]': {
            transform: 'translateX(-4px)',
            backgroundColor: 'primary.500',
            backgroundImage: `url('data:image/svg+xml;base64,${checkIcon}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        },
    }}
    {...props}
>
    <Switch
        size='lg'
        id='isChecked'
        isChecked={isChecked}
        onChange={onChange}
        colorScheme="primary"
    />
</Box>

export default CustomSwitch;