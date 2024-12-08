import { createContext, useState, useEffect } from 'react';
import './App.css';
import { getRoutes } from './navigation/routes/routes';
import { RouterProvider } from 'react-router-dom';
import { FeedbackContext } from "./context/feedback-context";
import { getAuth } from "./request/user_request";
import { BasketContext } from './context/basket-contenx';
import { AdminContext } from './context/admin-context';


export const AuthContext = createContext(null);

export const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({});
  const [basket, setBasket] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const routes = getRoutes(isAuth);

  useEffect(() => {
    // getAuth().then(() => {
    //   setIsAuth(true);
    // })
  }, [isAuth])

  localStorage.setItem('admin', JSON.stringify({
    'admin_name': "Admin",
    'admin_pass': "Admin",
    'admin_phone': "89831711293",
  }))

  return (
    <div className="App">
      <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <FeedbackContext.Provider value={{ feedbackForm, setFeedbackForm }}>
            <BasketContext.Provider value={{ basket, setBasket }}>
              <RouterProvider router={routes} />
            </BasketContext.Provider>
          </FeedbackContext.Provider>
        </AuthContext.Provider>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
