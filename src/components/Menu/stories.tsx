import {Meta, Story} from '@storybook/react/types-6-0';

import {Menu, MenuProps} from '.';

const data = {
  title: 'Menu',
  component: Menu,
} as Meta;

export default data;

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />;

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />;

export const logged: Story<MenuProps> = (args) => <Menu {...args} />;

Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};

Desktop.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};

logged.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
};
logged.args = {
  username: 'Emerson',
};
