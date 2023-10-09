import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return <div className="d-flex justify-content-center mt-5"><ReactLoading type={'spin'} color={'#0275d8'} height={80} width={80} /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;

              
    
};

export default PrivateRoute;
