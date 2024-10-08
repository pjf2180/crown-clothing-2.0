import type { Meta, StoryObj } from "@storybook/react";

import { CollectionItem } from "./collection-item.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/CollectionItem",
  component: CollectionItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} satisfies Meta<typeof CollectionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MinWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "165px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    item: {
      id: "asdf",
      imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      name: "Adidas NMD",
      price: 220,
    },
  },
};
export const MaxWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    item: {
      id: "asdf",
      imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      name: "Adidas NMD",
      price: 220,
    },
  },
};
