import Link from 'next/link';
import {Button} from 'components/Button';
import * as S from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

export const Empty = ({title, description, hasLink}: EmptyProps) => (
  <S.WrapperEmpty>
    <S.Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.WrapperEmpty>
);
