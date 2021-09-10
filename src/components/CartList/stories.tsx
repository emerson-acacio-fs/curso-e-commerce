import {Meta, Story} from '@storybook/react/types-6-0';

import {CartList, CartListProps} from '.';
import items from './mock';

const data = {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: '',
    },
    items: {
      type: '',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story = (args) => (
  <div style={{maxWidth: 800}}>
    <CartList {...args} hasButton />
  </div>
);

Default.args = {
  total: 'R$ 330,00',
  cartContextValue: {items},
};

export const Empty: Story = () => (
  <div style={{maxWidth: 800}}>
    <CartList />
  </div>
);
