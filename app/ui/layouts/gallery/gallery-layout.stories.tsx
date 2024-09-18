import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { GalleryLayout } from "./gallery-layout.component";
import { ItemSkeleton } from "../../item-skeleton/item-skeleton.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layouts/Gallery",
  component: GalleryLayout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof GalleryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Jackets",
    children: (
      <>
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
      </>
    ),
  },
};
