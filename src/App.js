import { element } from 'prop-types';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage"

function App() {
  const router = createBrowserRouter([
    {path: "/",
     element: <MainPage />
    },
    {path: "/NewsPage",
    element: <NewsPage />  
    },
    {path: "/ContactPage",
    element:<ContactPage/>
    }    

]);
    return (
    
      <div className="App">     
            <RouterProvider router={router} />
      </div>
    );

}

export default App;
