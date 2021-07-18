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

export const Mobile: Story<BannerProps> = (args) => (
  <div style={{maxWidth: '104rem', margin: '0 auto'}}>
    <Banner {...args} />
  </div>
);
Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Desktop: Story<BannerProps> = (args) => (
  <div style={{maxWidth: '104rem', margin: '0 auto'}}>
    <Banner {...args} />
  </div>
);
Desktop.parameters = {
  layout: 'fullscreen',
};

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{maxWidth: '104rem', margin: '0 auto'}}>
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};

export const WithRibbonMobile: Story<BannerProps> = (args) => (
  <div style={{maxWidth: '104rem', margin: '0 auto'}}>
    <Banner {...args} />
  </div>
);

WithRibbonMobile.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};

WithRibbonMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
