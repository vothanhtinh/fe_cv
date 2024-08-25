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
`;

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
