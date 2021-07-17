import {Meta, Story} from '@storybook/react/types-6-0';

import {MediaMatch} from '.';

const data = {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta;

export default data;

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
