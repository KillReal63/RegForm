import About from '../../pages/Step1/About';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Advantages from '../../pages/Step2/Advantages';

const Router = () => {
  const routes = [
    { name: 'main', path: '/', element: <Main /> },
    { name: 'about', path: '/about', element: <About /> },
    { name: 'advantages', path: '/advantages', element: <Advantages /> },
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
