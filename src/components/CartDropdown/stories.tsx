import {Meta, Story} from '@storybook/react/types-6-0';

import {CartDropdown, CartDropdownProps} from '.';
import items from 'components/CartList/mock';

const data = {
  title: 'CartDropdown',
  component: CartDropdown,
  argTypes: {},
  args: {
    items,
    total: 'R$ 300,00',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{maxWidth: '98%', display: 'flex', justifyContent: 'flex-end'}}>
    <CartDropdown {...args} />
  </div>
);
export const Empty: Story<CartDropdownProps> = (args) => (
  <div style={{maxWidth: '98%', display: 'flex', justifyContent: 'flex-end'}}>
    <CartDropdown />
  </div>
);
