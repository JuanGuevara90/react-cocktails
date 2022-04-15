import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex justify-center bg-yellow-50 h-screen">{children}</div>
  )
}

export default Layout