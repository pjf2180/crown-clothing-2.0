import type { Meta, StoryObj } from "@storybook/react";

import { ItemSkeleton } from "./item-skeleton.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shop/category/ItemSkeleton",
  component: ItemSkeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    // label: "ItemSkeleton",
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "ItemSkeleton",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "ItemSkeleton",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "ItemSkeleton",
//   },
// };
