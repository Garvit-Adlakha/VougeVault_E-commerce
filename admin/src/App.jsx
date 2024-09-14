import React from 'react';
import { Navbar } from './Components/NavBar/Navbar';
import { Admin } from './Pages/Admin/Admin';

export const App = () => {
  return (
    <>
      <Navbar />
      <main className=''>
        <Admin />
      </main>
    </>
  );
};
