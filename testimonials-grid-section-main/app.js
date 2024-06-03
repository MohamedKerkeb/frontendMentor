tailwind.config = {
  theme: {
    extend: {
      colors: {
        moderateViolet: "hsl(263, 55%, 52%)",
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },
      backgroundImage: {
        quotation: "url('images/bg-pattern-quotation.svg')",
      },
    },
    backgroundPosition: {
      "right-top-lg": "right 6rem top ",
      "right-top": "right 2rem top",
    },
  },
};
