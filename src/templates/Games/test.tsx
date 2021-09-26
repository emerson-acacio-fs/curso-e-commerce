import 'session.mock';
import {screen} from '@testing-library/react';
import {GamesTemplate} from '.';
import {render} from 'utils/test-utils';
import {MockedProvider} from '@apollo/client/testing';
import filterItemsMock from 'components/ExploreSidebar/mock';
import userEvent from '@testing-library/user-event';
import {fetchMoreMock, gamesMock, noGamesMock} from './mocks';
import apolloCache from 'utils/apolloCache';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
  prefetch: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  Base: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

describe('<GamesTemplate />', () => {
  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    // it starts without data
    // shows loading

    // we wait until we have data to get the elements
    // get => tem certeza do elemento
    // query => Não tem o elemento
    // find => processos assincronos
    expect(await screen.findByText(/Price/i)).toBeInTheDocument();
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', {name: /show more/i}),
    ).toBeInTheDocument();
  });

  it('should render more games when show more is clicked', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', {name: /show more/i}));

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
  });

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    userEvent.click(await screen.findByRole('checkbox', {name: /windows/i}));
    userEvent.click(await screen.findByRole('checkbox', {name: /linux/i}));
    userEvent.click(await screen.findByLabelText(/low to high/i));

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: {platforms: ['windows', 'linux'], sort_by: 'low-to-high'},
    });
  });

  it('should render empty when no games found', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(
      await screen.findByText(/We didn't find any games with this filter/i),
    ).toBeInTheDocument();
  });
});
