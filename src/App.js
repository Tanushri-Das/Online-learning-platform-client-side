import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import { useContext } from 'react';
import { ThemeContext } from './Context/Theme';


function App() {
  const [{ theme, isDark }, toggleTheme]=useContext(ThemeContext)
  console.log(theme)
  return (

    <div className='app' style={{backgroundColor:theme.backgroundColor,color:theme.color}}>
      <RouterProvider router={routes} >{isDark ? "Dark" :"Light"}</RouterProvider>
    </div>
  );
}

export default App;
