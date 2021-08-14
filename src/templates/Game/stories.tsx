import {Meta, Story} from '@storybook/react/types-6-0';

import { Game } from '.';

const data = {
  title: 'Game',
  component: Game,
  argTypes: {},
} as Meta;

export default data;

export const Default: Story = (args) => <Game {...args} />;

