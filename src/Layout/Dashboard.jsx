import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaHome, FaShoppingCart, FaUsers, FaWallet, } from 'react-icons/fa'
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-[#cef7f4] text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>My enrolled class</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My selected class <div className="badge bg-teal-600 text-white ">+{cart?.length || 0}</div> </NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaUsers></FaUsers>Instructors</NavLink></li>
                    <li><NavLink to='/classes'><FaBookReader></FaBookReader>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;