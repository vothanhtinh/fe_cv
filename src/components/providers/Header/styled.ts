import { Menu } from 'antd';
import styled from 'styled-components';

export const NavbarItem = styled.li`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  a {
    border-radius: 8px;

    font-size: 16px;
    font-weight: 400;
    padding: 0 10px;

    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMenu = styled(Menu)`
  border-bottom: none !important;

  background: ${({ theme }) => theme === 'dark' && '#121212'};

  .ant-menu-item {
    color: ${({ theme }) => theme === 'dark' && 'white'};
    :hover {
      color: ${({ theme }) => theme === 'dark' && 'white !important'};
    }
  }

  :hover {
    color: ${({ theme }) => theme === 'dark' && 'white'};
  }

  .ant-menu-item:not(.ant-menu-item-selected):not(
      .ant-menu-submenu-selected
    ):hover {
    color: ${({ theme }) => theme === 'dark' && 'white'};
  }

  .ant-menu-item-selected {
    color: #22c55e !important;
  }

  .ant-menu-item:hover::after,
  .ant-menu-item-selected::after {
    border-bottom-color: #22c55e !important;
  }
`;

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
