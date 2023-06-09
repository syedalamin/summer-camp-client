import { Link, Outlet } from "react-router-dom";
import { FaBookReader, FaHome, FaShoppingCart, FaUsers, FaWallet, } from 'react-icons/fa'
const Dashboard = () => {
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
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link><FaHome></FaHome>User Home</Link></li>
                    <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> Enrolled</Link></li>
                    <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/instructors'><FaUsers></FaUsers>Instructors</Link></li>
                    <li><Link to='/classes'><FaBookReader></FaBookReader>Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;