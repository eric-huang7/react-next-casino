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
    text: {
      100: "#f7fafc",
      200: "#919191",
      // ...
      900: "#2d2d2d",
    },
  },
})

export default theme
