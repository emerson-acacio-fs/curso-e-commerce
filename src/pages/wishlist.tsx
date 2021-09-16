import {Wishlist, WishlistTemplateProps} from 'templates/Wishlist';
import gamesMock from 'components/GameCardSlider/mock';
import {QUERY_RECOMMENDED} from 'graphql/queries/QueryRecommended';
import {QueryRecommended} from 'graphql/generated/QueryRecommended';
import {initializeApollo} from 'utils/apollo';
import {gamesMapper, highlightMapper} from 'utils/mappers/mappers';
import {GetServerSidePropsContext} from 'next';
import protectedRoutes from 'utils/protected-routes';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const apolloClient = initializeApollo();

  const {data} = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
}
