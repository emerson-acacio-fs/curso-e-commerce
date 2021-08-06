import {Meta, Story} from '@storybook/react/types-6-0';

import {GameDetails, GameDetailsProps} from '.';
import argsData from './mock';
export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: argsData,
  argTypes: {
    releaseDate: {
      control: 'date',
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative'],
      },
    },
  },
} as Meta;

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{maxWidth: '130rem', margin: '0 auto'}}>
    <GameDetails {...args} />
  </div>
);
