import "../app/globals.css";
import type { Preview } from "@storybook/react";
import { StoryFontDecorator } from "../stories/utils/decorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StoryFontDecorator()],
};

export default preview;
