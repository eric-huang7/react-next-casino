import { extendTheme } from "@chakra-ui/react"

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-28px)",
  backgroundColor: "white",
};

const theme = extendTheme({
  components: {
    Button: { baseStyle: {  _focus: { boxShadow: 'none' } } },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "transparent",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 3,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
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
      400: "#FFC353",
      500: "#d7a33c",
      600: "#C06313",
      900: "#481500"
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
      300: "#babbbc",
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
