import Link from 'next/link';
import {Button} from 'components/Button';
import {GameItem, GameItemProps} from 'components/GameItem';
import * as S from './styles';
import {Empty} from 'components/Empty';
import {useCart} from 'hooks/use-cart';

export type CartListProps = {
  hasButton?: boolean;
};

export const CartList = ({hasButton = false}: CartListProps) => {
  const {items, total} = useCart();

  return (
    <S.WrapperCartList isEmpty={!items.length}>
      {items?.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total</span>}
            <S.Total>{total}</S.Total>
            {hasButton && (
              <Link href="/cart" passHref>
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games end offers"
          hasLink
        />
      )}
    </S.WrapperCartList>
  );
};
