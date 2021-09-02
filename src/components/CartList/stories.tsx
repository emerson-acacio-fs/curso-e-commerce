import {Meta, Story} from '@storybook/react/types-6-0';

import {CartList, CartListProps} from '.';
import mockItems from './mock';

const data = {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00',
    hasButton: true,
  },
  argTypes: {
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

export const Default: Story<CartListProps> = (args) => (
  <div style={{maxWidth: 800}}>
    <CartList {...args} />
  </div>
);

export const Empty: Story<CartListProps> = (args) => (
  <div style={{maxWidth: 800}}>
    <CartList />
  </div>
);
