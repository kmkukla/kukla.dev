import React from 'react';
// import { Script } from 'gatsby';

import Footer from 'components/footer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Footer />
    </>
  );
};

export default Layout;
