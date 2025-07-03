// src/components/Layout.js
import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import News from './components/News';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <News />
      <Footer />
    </>
  );
};

export default Layout;
