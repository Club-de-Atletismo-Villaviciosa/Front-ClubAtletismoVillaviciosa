import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import Navbar from './Components/Navbar/Navbar';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([{
    path: "/",
     element: <MainPage />

}]);
    return (
    
      <div className="App">     
            <RouterProvider router={router} />
      </div>
    );

}

export default App;
