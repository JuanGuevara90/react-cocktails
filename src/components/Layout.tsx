import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col items-center bg-yellow-50 min-h-screen">{children}</div>
  )
}

export default Layout