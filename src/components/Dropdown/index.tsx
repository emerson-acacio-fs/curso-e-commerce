import {useState} from 'react';
import * as S from './styles';

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Dropdown = ({title, children}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.WrapperDropdown isOpen={isOpen}>
      <S.Title
        onClick={() => {
          setIsOpen((v) => !v);
        }}>
        {title}
      </S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.WrapperDropdown>
  );
};
