import {Heading} from 'components/Heading';
import * as S from './styles';

export type TextContentProps = {
  title?: string;
  content: string;
};

export const TextContent = ({title, content}: TextContentProps) => (
  <S.WrapperTextContent>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{__html: content}} />
  </S.WrapperTextContent>
);
