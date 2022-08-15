import React, { ReactNode } from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen h-full">
        <Navbar />
        <main className="flex-1 flex flex-col px-5/100">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
