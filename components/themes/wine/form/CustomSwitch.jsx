import {Box} from "@chakra-ui/layout";
import {Switch} from "@chakra-ui/react";

const checkIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjAwMDEgMS4zNzgzNEMxNS45OTYxIDEuNzg2MTggMTUuODEwMyAyLjEwNjUzIDE1LjUzMDQgMi4zODY1QzEyLjU4NCA1LjMzMjkxIDkuNjQxNTggOC4yODMzNiA2LjY4NzA5IDExLjIyM0M2LjAwMzMyIDExLjkwNDEgNS4yNjE2NyAxMS44OTA3IDQuNTY1NzggMTEuMjAyOUMzLjIxMDM1IDkuODY0OTIgMS44NjU2OSA4LjUxNzU3IDAuNTI2NDEgNy4xNjM0OEMtMC4xMjY0MDQgNi41MDM5NCAtMC4xNjk0NzcgNS43MDMwNyAwLjM4NjQyNSA1LjEzNzc0QzAuOTM5NjM0IDQuNTc2NDYgMS43NjA3IDQuNjExNDUgMi40MTM1MSA1LjI0OTQ2QzMuMzI0NzYgNi4xNDQ1NiA0LjI0MTM5IDcuMDM1NjEgNS4xMTQ5NSA3Ljk2NzA1QzUuNDk3MjIgOC4zNzQ4OSA1LjcwODU0IDguNDM2ODEgNi4xNDMzIDcuOTkxMjhDOC41MjQzOSA1LjU1NjM1IDEwLjk0NTkgMy4xNjE4IDEzLjM1NTIgMC43NTY0ODZDMTMuNTQ1IDAuNTY2Njk4IDEzLjczMzQgMC4zNjYxNDMgMTMuOTU1NSAwLjIyMjEyQzE0LjQwNjQgLTAuMDY5OTYzNSAxNC44OTEgLTAuMDcxMzA5NSAxNS4zNTQgMC4yMDMyNzZDMTUuNzk0MiAwLjQ2MzA1NiAxNi4wMDE1IDAuODY4MjA0IDE2LjAwMDEgMS4zNzgzNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
const closeIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDU0MzkgMEMxLjMyNTAzIDAuMDA2MTMxOTIgMS41NzI1NCAwLjEzMTgzNiAxLjc4NTc2IDAuMzQ1NjE3QzIuOTgzMTYgMS41NDYwOCA0LjE4MzA3IDIuNzQzNzUgNS4zODIxMyAzLjk0MjU0QzUuOTE3NTYgNC40Nzc5NyA2LjQ1NTIyIDUuMDExMTcgNi45ODYxOSA1LjU1MTA2QzcuMDc1OTQgNS42NDI0OCA3LjExOTY5IDUuNjU1MyA3LjIxODY0IDUuNTU2MDdDOC44OTkwNiAzLjg3MzE0IDEwLjU4MzkgMi4xOTQxMSAxMi4yNjkxIDAuNTE1OTE3QzEyLjc3NjcgMC4wMTAzMTI4IDEzLjYxNTkgMC4xNjUwMDQgMTMuOTA1MiAwLjgyMDAwNEMxNC4wNzE5IDEuMTk3NjcgMTQuMDE1MyAxLjU1NDcyIDEzLjc2MjggMS44Nzk0M0MxMy43MTQ2IDEuOTQxNTkgMTMuNjU2NiAxLjk5NjIyIDEzLjYwMDkgMi4wNTE5NkMxMS45NTU1IDMuNjk3ODIgMTAuMzEwOCA1LjM0NDUyIDguNjYxMzEgNi45ODYyQzguNTU3MzUgNy4wODk4OSA4LjU3MTU3IDcuMTM2NzEgOC42NjYwNSA3LjIzMTQ4QzEwLjI2NzMgOC44MzYwOSAxMS44NjU1IDEwLjQ0MzUgMTMuNDYyMyAxMi4wNTI4QzEzLjk2OSAxMi41NjM1IDEzLjgyMSAxMy40MDYgMTMuMTcxNiAxMy42OTUxQzEyLjc5NDggMTMuODYyNiAxMi40MzcyIDEzLjgwMzUgMTIuMTEzNiAxMy41NDg3QzEyLjA1NTMgMTMuNTAzIDEyLjAwMzggMTMuNDQ4NyAxMS45NTE0IDEzLjM5NjNDMTAuMzY3OSAxMS44MTMxIDguNzg0MjMgMTAuMjMwNSA3LjIwMzU5IDguNjQ0NjFDNy4xMTY5MSA4LjU1NzY1IDcuMDcxNDggOC41NDg0NSA2Ljk3ODk0IDguNjQxMjZDNS4zMDM1MyAxMC4zMjI4IDMuNjI0NSAxMi4wMDEgMS45NDUxOSAxMy42Nzg2QzEuNTQ5MTMgMTQuMDc0NCAwLjk2NjU5NiAxNC4wOSAwLjU1MTI5OCAxMy43MjE4QzAuMTUyNzI0IDEzLjM2ODQgMC4wOTYxNDI5IDEyLjc4ODEgMC40MjE0MTMgMTIuMzY1NkMwLjQ3NDkyOCAxMi4yOTU5IDAuNTM3NjQxIDEyLjIzMjkgMC41OTk3OTYgMTIuMTcwNUMyLjI0ODQ1IDEwLjUyMSAzLjg5NjgyIDguODcwOTMgNS41NDkzNyA3LjIyNTA3QzUuNjQ0NjkgNy4xMzAwMiA1LjY0NDQxIDcuMDg0MzEgNS41NDkzNyA2Ljk4OTI3QzMuODExMjUgNS4yNTg0IDIuMDc4NDIgMy41MjI1MSAwLjM0MjUzNCAxLjc4OTY4QzAuMDQ4MjAyNSAxLjQ5NTYzIC0wLjA2ODU4MjcgMS4xNTM2NCAwLjAzOTg0MDggMC43NDkyMDlDMC4xNTc0NjIgMC4zMTE4OTIgMC41NzM1OTYgMCAxLjA1NDM5IDBaIiBmaWxsPSIjM0ExOTEyIi8+Cjwvc3ZnPgo="

const CustomSwitch = ({isChecked, onChange, ...props}) => <Box
    sx={{
        '& .chakra-switch__track': {bg: 'primary.300 !important', alignItems: 'center',h: '36px', w: '80px', boxShadow: 'none'},
        '& .chakra-switch__track:focus': { boxShadow: 'none' },
        // '& .chakra-switch__track[data-checked]': {bg: '#602B1F !important'},
        '& .chakra-switch__thumb': {
            bg: '#eee',
            w: '40px',
            h: '40px',
            transform: 'translateX(42px)',
            backgroundColor: '#95908F',
            backgroundImage: `url('${closeIcon}')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        },
        '& .chakra-switch__thumb[data-checked]': {
            transform: 'translateX(-3px)',
            backgroundColor: '#6D0202',
            backgroundImage: `url('${checkIcon}')`,
        },
    }}
    {...props}
>
    <Switch
        _focus={{ boxShadow: 'none' }}
        size='lg'
        id='isChecked'
        isChecked={isChecked}
        onChange={onChange}
        colorScheme="primary"
    />
</Box>

export default CustomSwitch;