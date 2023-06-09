import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Dashboard | My Cart</title>
            </Helmet>
            <div className="uppercase">
                <h3 className="text-3xl">Total Class: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <button className="bg-teal-600 hover:bg-teal-800 btn btn-sm text-white ">Pay</button>
            </div>
        </div>
    );
};

export default MyCart;