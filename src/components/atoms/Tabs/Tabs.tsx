'use client';
import { TabsProps } from 'antd';
import React from 'react';

import { StyledTabs } from './styled';

export const Tabs = (props: TabsProps) => {
  return <StyledTabs {...props} />;
};
