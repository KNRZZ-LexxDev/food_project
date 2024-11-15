import { createContext, useState, useEffect } from 'react';
import './App.css';
import { getRoutes } from './navigation/routes/routes';
import { RouterProvider } from 'react-router-dom';
import { FeedbackContext } from "./context/feedback-context";
import { getAuth } from "./request/user_request";


export const AuthContext = createContext(null);

export const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({});
  const routes = getRoutes(isAuth);

  useEffect(() => {
    // getAuth().then(() => {
    //   setIsAuth(true);
    // })
  }, [isAuth])

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <FeedbackContext.Provider value={{ feedbackForm, setFeedbackForm }}>
          <RouterProvider router={routes} />
        </FeedbackContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
