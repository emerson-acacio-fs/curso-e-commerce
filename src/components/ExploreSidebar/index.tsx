import {useState} from 'react';
import {Button} from 'components/Button';
import {Checkbox} from 'components/Checkbox';
import {Heading} from 'components/Heading';
import {Radio} from 'components/Radio';
import {Close} from '@styled-icons/material-outlined/Close';
import {FilterList} from '@styled-icons/material-outlined/FilterList';
import * as S from './styles';

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

type Values = {
  [field: string]: boolean | string;
};

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

  const handleFilter = () => {
    onFilter(values);
    setIsOpen(false);
  };

  const handelChange = (name: string, value: boolean | string) => {
    setValues((s) => ({...s, [name]: value}));
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
              fields.map((fild) => (
                <Checkbox
                  key={fild.name}
                  name={fild.name}
                  label={fild.label}
                  labelFor={fild.name}
                  isChecked={!!values[fild.name]}
                  onCheck={(v) => handelChange(fild.name, v)}
                />
              ))}
            {type === 'radio' &&
              fields.map((fild) => (
                <Radio
                  key={fild.name}
                  id={fild.name}
                  name={name}
                  label={fild.label}
                  labelFor={fild.name}
                  value={fild.name}
                  defaultChecked={fild.name === values[name]}
                  onChange={() => handelChange(name, fild.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.WrapperExploreSidebar>
  );
};
