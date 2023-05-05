import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([{
    path: "/",
     element: <InfoPage />

}]);
    return (
    
      <div className="App">     
            <RouterProvider router={router} />
      </div>
    );

}

export default App;
