import Profile from '../../pages/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Advantages from '../../pages/Advantages/Advantages';
import About from '../../pages/About/About';

const Router = () => {
  const routes = [
    { name: 'main', path: '/', element: <Main /> },
    { name: 'profile', path: '/profile', element: <Profile /> },
    { name: 'advantages', path: '/advantages', element: <Advantages /> },
    { name: 'about', path: '/about', element: <About /> },
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
