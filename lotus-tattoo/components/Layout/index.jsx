import Footer from '../Footer';
import NavBar from '../NavBar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="layoutRoot">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
