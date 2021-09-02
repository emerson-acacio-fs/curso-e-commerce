import {Meta, Story} from '@storybook/react/types-6-0';

import {Dropdown, DropdownProps} from '.';

const data = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
  parameters: {backgrounds: {default: 'won-dark'}},
} as Meta;

export default data;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {title: 'Click here', children: 'content'};
