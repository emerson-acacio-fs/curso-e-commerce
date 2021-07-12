import {Meta, Story} from '@storybook/react/types-6-0';

import {Logo, LogoProps} from '.';

const data = {
  title: 'Logo',
  component: Logo,
  args: {},
} as Meta;

export default data;

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />;
