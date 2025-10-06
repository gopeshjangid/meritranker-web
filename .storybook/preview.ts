import type { Preview } from "@storybook/react"
import "../app/globals.css" // <-- Add this line to import your global styles

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Optional: Add backgrounds for light/dark mode testing if not using next-themes addon
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1E2F3C" }, // Your darkBlue color
      ],
    },
  },
}

export default preview
