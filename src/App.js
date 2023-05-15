import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainSection from './Components/MainSection/MainSection';

function App() {
  const router = createBrowserRouter([{
    path: "/",
     element: <InfoPage />

},{
  path: "/main",
   element: <MainPage />

}]);
    return (
    
      <div className="App">     
            <RouterProvider router={router} />
      </div>
    );

}

export default App;
