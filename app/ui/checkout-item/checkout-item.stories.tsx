import type { Meta, StoryObj } from '@storybook/react';

import { CheckoutItem } from './checkout-item';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Checkout/CheckoutItem',
  component: CheckoutItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    addItem: fn(),
    removeItem: fn(),
    clearCartItem: fn(),
  }
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} satisfies Meta<typeof CheckoutItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    item: {
        id: 1,
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        name: 'Adidas Yeezy',
        quantity: 2,
        price: 230
    }
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'CartItem',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'CartItem',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'CartItem',
//   },
// };
