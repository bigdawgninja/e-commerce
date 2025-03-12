import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Signup from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';



export const router = createBrowserRouter([
    { path: "/", element: <App />},
    { path: "/signup", element: <Signup />},
    { path: "/login", element: <Login />},
    { path: "/dashboard", element: 
    <PrivateRoute> 
        <Dashboard /> 
    </PrivateRoute>},
])