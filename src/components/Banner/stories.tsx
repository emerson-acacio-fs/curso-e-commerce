import {Meta, Story} from '@storybook/react/types-6-0';

import {Banner, BannerProps} from '.';

const data = {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
} as Meta;

export default data;

export const Mobile: Story<BannerProps> = (args) => <Banner {...args} />;
Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Desktop: Story<BannerProps> = (args) => <Banner {...args} />;
Desktop.parameters = {
  layout: 'fullscreen',
};
