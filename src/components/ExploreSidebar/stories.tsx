import {Meta, Story} from '@storybook/react/types-6-0';

import {ExploreSidebar, ExploreSidebarProps} from '.';
import mock from './mock';
const data = {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: {
    items: mock,
    initialValues: {platforms: ['windows', 'linux'], sort_by: 'low-to-high'},
    onFilter: () => console.log('filter'),
  },
} as Meta;

export default data;

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
);
