import {forwardRef} from 'react';
import SlickSlider, {Settings} from 'react-slick';
import * as S from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const SliderOnly: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  {children, settings},
  ref,
) => (
  <S.WrapperSlider>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.WrapperSlider>
);

export const Slider = forwardRef(SliderOnly);
