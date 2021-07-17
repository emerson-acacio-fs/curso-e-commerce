import {Meta, Story} from '@storybook/react/types-6-0';

import {Menu, MenuProps} from '.';

const data = {
  title: 'Menu',
  component: Menu,
} as Meta;

export default data;

export const Mobile: Story = (args) => <Menu {...args} />;

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />;

Mobile.parameters = {
  layout: 'fullscreen',
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
