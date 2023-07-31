import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

// Основной шаблон сайта
export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        {/* Outlet является встоенным компонентом библиотеки react-router */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
