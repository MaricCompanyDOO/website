export const theme = {
  colors: {
    darkBlue: (opacity = 1) => `rgba(10, 26, 64, ${opacity})`,
    darkGray: (opacity = 1) => `rgba(35, 35, 35, ${opacity})`,
    lightGray: (opacity = 1) => `rgba(240, 240, 240, ${opacity})`,
    mediumGray: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    orange: (opacity = 1) => `rgba(237, 105, 52, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  },
};