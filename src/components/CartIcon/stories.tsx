import {Meta, Story} from '@storybook/react/types-6-0';

import {CartIcon} from '.';

const data = {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {},
} as Meta;

export default data;

export const withItems: Story = (args) => <CartIcon {...args} />;

withItems.args = {
  quantity: 3,
};
