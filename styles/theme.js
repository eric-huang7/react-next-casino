import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: { baseStyle: {  _focus: { boxShadow: 'none' } } }
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Segoe UI",
      }
    })
  },
  colors: {
    primary: {
      500: "#99cc33"
    },
    accent: {

    },
    text: {
      100: "#f7fafc",
      150: "#cbcaca",
      200: "#919191",
      300: "#757575",
      // ...
      900: "#2d2d2d",
    },
  },
})

export default theme
