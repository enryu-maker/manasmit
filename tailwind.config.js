const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Web: ["Titillium+Web"],
      },
      colors: {
        bluesomething: "#2C6DAB",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tw-elements-react/dist/plugin.cjs")],
};
