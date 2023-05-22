import { element } from 'prop-types';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage"
import InfoPage from './Pages/InfoPage/InfoPage';
import { AuthContext, AuthProvider } from './Services/AuthContext';
import LoginPage from './Pages/LoginPage/LoginPage';
import CalendarPage from './Pages/CalendarPage/CalendarPage';
import PolicyPage from './Pages/PolicyPage/PolicyPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "/NewsPage",
      element: <NewsPage />
    },
    {
      path: "/LoginPAge",
      element: <LoginPage />
    },
    {
      path: "/ContactPage",
      element: <ContactPage />
    }, {
      path: "/InfoPage",
      element: <InfoPage />
    },{
    path:"/CalendarPage",
    element: <CalendarPage/>
    },
    {
      path: "/PolicyPage",
      element: <PolicyPage />
    },
  ]);

  return (
    <div className="App">
      <AuthProvider>
              <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );

}

export default App;
