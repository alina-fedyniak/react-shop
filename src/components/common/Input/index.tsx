import React, { ChangeEvent, ReactNode } from 'react';
import { StyledInput, StyledFormLabel, StyledFormControl } from './styled';

type TProps = {
  name?: string;
  value?: any;
  defaultValue?: any;
  label?: string;
  type: string;
  width?: string;
  height?: string;
  border?: string;
  placeholder?: string;
  iconRender?: (visible: boolean) => ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: any;
  onPressEnter?: () => void;
  max?: string;
  min?: string;
  step?: string;
  required?: any;
  addonAfter?: ReactNode;
  disabled?: boolean;
  style?: any;
  prefix?: any;
};

export const FormInput = ({
  name,
  type,
  label,
  placeholder,
  width,
  border,
  inputRef,
  required,
  addonAfter,
  disabled,
  style,
  prefix,
  ...props
}: TProps): JSX.Element => (
  <StyledFormControl width={width}>
    {label && <StyledFormLabel>{label}</StyledFormLabel>}
    <StyledInput
      {...{
        required,
        name,
        type,
        placeholder,
        border,
        ref: inputRef,
        addonAfter,
        disabled,
        style,
        prefix,
        ...props,
      }}
    />
  </StyledFormControl>
);
