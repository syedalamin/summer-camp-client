
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        return <div className="text-center">
            <span className="loading  loading-dots loading-lg"></span>
        </div>
    }
    if(user && isAdmin){
        return children;
    }
    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;