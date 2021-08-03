import {Meta, Story} from '@storybook/react/types-6-0';

import {GameInfo, GameInfoProps} from '.';
import mockGame from './mock';

const data = {
  title: 'Game/GameInfo',
  component: GameInfo,
  argTypes: {},
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Desktop: Story<GameInfoProps> = (args) => (
  <div style={{maxWidth: '144rem', margin: 'auto', padding: '1.5rem'}}>
    <GameInfo {...args} />
  </div>
);

export const Mobile: Story<GameInfoProps> = (args) => (
  <div style={{maxWidth: '144rem', margin: 'auto', padding: '1.5rem'}}>
    <GameInfo {...args} />
  </div>
);
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
