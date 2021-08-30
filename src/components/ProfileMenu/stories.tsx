import {Meta, Story} from '@storybook/react/types-6-0';

import {ProfileMenu, ProfileMenuProps} from '.';

const data = {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
);
