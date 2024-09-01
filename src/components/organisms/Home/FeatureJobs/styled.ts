import { Pagination } from 'antd';
import styled from 'styled-components';

export const TableWrapper = styled.div`
  grid-template-columns: repeat(auto-fill, 300px);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  height: 100%;
`;

export const StyledPagination = styled(Pagination)`
  .ant-pagination-item {
    border-color: transparent !important;
  }

  .ant-pagination-item-active a {
    color: #00b14f !important;
  }
`;
