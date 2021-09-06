import {useEffect, useState} from 'react';
import xor from 'lodash.xor';
import {Button} from 'components/Button';
import {Checkbox} from 'components/Checkbox';
import {Heading} from 'components/Heading';
import {Radio} from 'components/Radio';
import {Close} from '@styled-icons/material-outlined/Close';
import {FilterList} from '@styled-icons/material-outlined/FilterList';
import * as S from './styles';
import {ParsedUrlQueryInput} from 'querystring';

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

type Field = {
  label: string;
  name: string;
};

type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

export const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter,
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onFilter(values);
    // this method comes from another template
    // that we don't have access
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleFilterMenu = () => {
    setIsOpen(false);
  };

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((s) => ({...s, [name]: value}));
  };

  // []
  // ['windows']
  // ['windows', 'linux']

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || [];
    setValues((s) => ({...s, [name]: xor(currentList, [value])}));
  };

  return (
    <S.WrapperExploreSidebar isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>
      <S.Content>
        {items.map(({title, name, type, fields}) => (
          <S.Items key={title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {title}
            </Heading>
            {type === 'checkbox' &&
              fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[name] as string[])?.includes(field.name)}
                  onCheck={() => handleCheckbox(name, field.name)}
                />
              ))}
            {type === 'radio' &&
              fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  name={name}
                  label={field.label}
                  labelFor={field.name}
                  value={field.name}
                  defaultChecked={String(field.name) === String(values[name])}
                  onChange={() => handleRadio(name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.WrapperExploreSidebar>
  );
};
