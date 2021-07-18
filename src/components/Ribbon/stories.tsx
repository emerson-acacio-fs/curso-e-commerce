import {Meta, Story} from '@storybook/react/types-6-0';

import {Ribbon, RibbonProps} from '.';

const data = {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export default data;

export const Defoult: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
    }}>
    <Ribbon {...args} />
  </div>
);
