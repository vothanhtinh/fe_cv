import { Button } from 'antd';
import styled from 'styled-components';

export const WrapperButton = styled(Button)`
  border-radius: 10px;
  font-weight: 500 !important;

  &.ant-btn-primary {
    background-color: #22c55e !important;
    color: white !important;
    border: transparent !important;
  }

  &.ant-btn-default {
    background-color: #fff !important;
    color: #22c55e !important;
    border: 1px solid #22c55e !important;
  }

  :hover {
    &.ant-btn-default {
      color: #22c55e !important;
      opacity: 0.8 !important;
    }

    &.ant-btn-primary {
      background-color: #22c55e !important;
      opacity: 0.8 !important;
    }
  }
`;
