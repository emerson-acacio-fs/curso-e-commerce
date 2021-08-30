import {Meta, Story} from '@storybook/react/types-6-0';

import {OrdersList, OrdersListProps} from '.';
import itemsMock from './mock';

const data = {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock,
  },
} as Meta;

export default data;

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{maxWidth: 850, margin: 'auto'}}>
    <OrdersList {...args} />
  </div>
);
