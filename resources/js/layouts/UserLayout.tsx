import React, { ReactNode } from 'react';
import { UserHeader } from '../components/UserHeader';
import { UserFooter } from '../components/UserFooter';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <UserHeader />
      <main className="flex-grow">{children}</main>
      <UserFooter />
    </div>
  );
}
