/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { useSelector } from 'react-redux';

import NoAccess from '../403';

interface ProtectedRouteProps {
  children: React.ReactNode;
}
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useSelector((state: any) => state.userSlice.user);

  return user.role.name === 'SUPER_ADMIN' ? <>{children}</> : <NoAccess />;
}
