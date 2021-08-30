import {Meta, Story} from '@storybook/react/types-6-0';

import {CartIcon, CartIconProps} from '.';

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

export const withItems: Story<CartIconProps> = (args) => <CartIcon {...args} />;

withItems.args = {
  quantity: 3,
};
