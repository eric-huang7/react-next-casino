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
      500: "#d7a33c"
    },
    text: {
      100: "#f7fafc",
      150: "#cbcaca",
      200: "#919191",
      250: "#8f8f8f",
      300: "#757575",
      // ...
      900: "#2d2d2d",
    },
    grey: {
      100: "#f2f6f9",
      200: "#ecedf1",
      400: "#a7a7a7",
      600: "#8f8f8f",
    },
    scroll: {
      100: "#fda3a2",
      500: "#dcdcdc",
    }
  },
})

export default theme
