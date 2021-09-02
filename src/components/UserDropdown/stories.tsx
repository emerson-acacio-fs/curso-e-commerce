import {Meta, Story} from '@storybook/react/types-6-0';

import {UserDropdown, UserDropdownProps} from '.';

const data = {
  title: 'UserDropdown',
  component: UserDropdown,
  argTypes: {},
  args: {username: 'Emerson'},
  parameters: {backgrounds: {default: 'won-dark'}},
} as Meta;

export default data;

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{maxWidth: '98%', display: 'flex', justifyContent: 'flex-end'}}>
    <UserDropdown {...args} />
  </div>
);
