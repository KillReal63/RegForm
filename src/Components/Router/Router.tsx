import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../../pages/Profile/Profile';
import Advantages from '../../pages/Advantages/Advantages';
import About from '../../pages/About/About';
import styles from '../App/App.module.css';

const Router: FC = () => {
  const routes = [
    {
      name: 'main',
      path: '/RegForm',
      element: (
        <div className={styles.app}>
          <Main />
        </div>
      ),
    },
    { name: 'profile', path: '/RegForm/profile', element: <Profile /> },
    { name: 'advantages', path: '/RegForm/advantages', element: <Advantages /> },
    { name: 'about', path: '/RegForm/about', element: <About /> },
  ];

  const route = routes.map(({ name, path, element }) => (
    <Route key={name} path={path} element={element} />
  ));

  return (
    <>
      <Routes>{route}</Routes>
    </>
  );
};

export default Router;
