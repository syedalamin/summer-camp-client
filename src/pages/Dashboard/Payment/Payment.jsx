import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className="w-full">
            <h3 className="text-3xl my-5 text-center font-bold text-teal-600">Payment</h3>
            <div className="w-6/12 mx-auto pt-10">
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;