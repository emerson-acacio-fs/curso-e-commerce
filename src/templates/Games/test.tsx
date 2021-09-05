import {screen} from '@testing-library/react';
import {GamesTemplate} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';
import {MockedProvider} from '@apollo/client/testing';
import filterItemsMock from 'components/ExploreSidebar/mock';
import {QUERY_GAMES} from 'graphql/queries/games';
import userEvent from '@testing-library/user-event';
import {fetchMoreMock, gamesMock} from './mocks';
import apolloCache from 'utils/apolloCache';

jest.mock('templates/Base', () => ({
  __esModule: true,
  Base: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: function Mock({children}: {children: React.ReactNode}) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  },
}));

describe('<GamesTemplate />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: {limit: 15},
            },
            result: {
              data: {
                games: [
                  {
                    name: 'RimWorld',
                    slug: 'rimworld',
                    cover: {
                      url: '/uploads/rimworld_8e93acc963.jpg',
                    },
                    developers: [{name: 'Ludeon Studios'}],
                    price: 65.99,
                    __typename: 'Game',
                  },
                ],
              },
            },
          },
        ]}
        addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    // it starts without data
    // shows loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    expect(
      await screen.findByTestId('Mock ExploreSidebar'),
    ).toBeInTheDocument();
    expect(await screen.findByText(/RimWorld/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', {name: /show more/i}),
    ).toBeInTheDocument();
  });
  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', {name: /show more/i}));

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
  });
});
