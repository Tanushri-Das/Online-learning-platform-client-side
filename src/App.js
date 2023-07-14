import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import { useContext } from 'react';
import { ThemeContext } from './Context/Theme';
import { ToastContainer } from 'react-toastify';


function App() {
  return (

    <div className='app'>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
