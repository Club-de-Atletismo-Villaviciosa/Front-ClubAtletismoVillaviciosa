import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  const router = createBrowserRouter([
    {path: "/ContactPage",
    element: <ContactPage />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
