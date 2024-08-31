'use client';
import { ButtonProps } from 'antd/lib';

import { WrapperButton } from './styled';
export const Button: React.FC<ButtonProps> = (props) => {
  return <WrapperButton {...props}>{props.children}</WrapperButton>;
};
