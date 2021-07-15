import {Meta, Story} from '@storybook/react/types-6-0';

import {Menu} from '.';

const data = {
  title: 'Menu',
  component: Menu,
  argTypes: {},
} as Meta;

export default data;

export const Mobile: Story = (args) => <Menu {...args} />;

export const Desktop: Story = (args) => <Menu {...args} />;

Mobile.parameters = {
  backgrounds: {
    default: 'dark',
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};

Desktop.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
