import {Meta, Story} from '@storybook/react/types-6-0';

import {CartDropdown} from '.';
import items from 'components/CartList/mock';

const data = {
  title: 'CartDropdown',
  component: CartDropdown,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story = (args) => (
  <div style={{maxWidth: '98%', display: 'flex', justifyContent: 'flex-end'}}>
    <CartDropdown {...args} />
  </div>
);
Default.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 300,00',
  },
};
export const Empty: Story = (args) => (
  <div style={{maxWidth: '98%', display: 'flex', justifyContent: 'flex-end'}}>
    <CartDropdown />
  </div>
);
