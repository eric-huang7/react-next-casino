import { extendTheme } from "@chakra-ui/react"

export const bgGradientGrey = 'linear-gradient(0deg, #7E7E7E, #7E7E7E), linear-gradient(0deg, #7E7E7E, #7E7E7E), #7E7E7E;';
export const bgGradient = 'linear-gradient(0deg, #FA6179, #FA6179), linear-gradient(0deg, #7E7E7E, #7E7E7E), #7E7E7E;';
export const buttonGradient = 'linear-gradient(180deg, #F7DB6D 0%, #FEF8A0 8.33%, #FFCF54 16.15%, #F17E3D 99.99%, #FEF99B 100%);';

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-28px)",
  backgroundColor: "white",
};

export const thinScroll = {
  scrollbarColor: "scroll.100 scroll.500",
  scrollbarWidth: "thin",
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
    },
    Text: {
      baseStyle: {

      },
      variants: {
        heading: {
          letterSpacing: "1px",
          color: "primary.500",
          fontWeight: 700,
          fontFamily: "Trebuchet",
        },
        text: {
          letterSpacing: "1px",
          color: "white",
          fontWeight: 400,
          fontFamily: "Verdana",
        },
        base: {},
      },
      sizes: {
        lg: {
          fontSize: "30px",
        },
        md: {
          fontSize: "23px",
        },
        sm: {
          fontSize: "16px"
        },
        xs: {
          fontSize: "12px"
        },
        base: {}
      },
      defaultProps: {
        size: 'base',
        variant: 'base',
      },
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
      100: "#FFD9DD",
      300: "#F3E0DA",
      500: "#FAA9B2",
      600: "#FA6179",
      700: "#FF5064",
      900: "#BE2051",
    },
    accent: {
      100: "#FFFFCB",
      300: "#FCDC8F",
      400: "#FFC353",
      500: "#C4C4C4",
      550: "#D16F41",
      600: "#C06313",
      700: "#AD4B1D",
      800: "#996533",
      870: "#8e5f02",
      850: "#910015",
      860: "#73392C",
      820: "#663605",
      890: "#51241A",
      900: "#481500",
      950: "#3a1912",
    },
    text: {
      50: "#fefefe",
      100: "#f7fafc",
      150: "#cbcaca",
      180: "#b7b7b7",
      190: "#a1a1a1",
      200: "#919191",
      250: "#8f8f8f",
      300: "#757575",
      400: "#6c6c6c",
      450: "#595656",
      500: "#4d4d4d",
      800: "#333333",
      900: "#2d2d2d",
      950: "#060606",
    },
    grey: {
      100: "#f2f6f9",
      200: "#E5E5E5",
      250: "#e1eaf1",
      370: "#d5dee7",
      380: "#c5d1de",
      300: "#b0b0b0",
      400: "#a7a7a7",
      600: "#8f8f8f",
      700: "#707070",
      800: "#444444",
      850: "#393939",
      900: "#2a2a31",
    },
    currency: {
      500: "#fda3a2"
    },
    scroll: {
      100: "#fda3a2",
      500: "#dcdcdc",
    },
    bg: {
      500: '#E5E5E5'
    }
  },
})

export default theme
