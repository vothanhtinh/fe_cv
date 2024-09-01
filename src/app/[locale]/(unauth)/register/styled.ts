import styled from 'styled-components';

export const WrapperRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(234, 241, 251);
  width: 100%;
  height: 100%;
`;

export const WrapperForm = styled.section`
  label {
    min-width: 100px;
    max-width: 100px;
  }

  .ant-form-item-explain-error {
    font-size: 11px !important;
  }
`;
