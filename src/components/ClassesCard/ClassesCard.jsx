import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassesCard = ({ item }) => {

    const { image, name, availableSeats, price, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch ] = useCart();
    const navigate = useNavigate();
    const location = useLocation();



    const handleAddToCart = ()=>{
        if(user && user.email){
            const cartItem ={cartId : _id,  image, name, availableSeats, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Cart Added',
                        showConfirmButton: false,
                        timer: 1500
                      })   
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now !'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-full h-50" src={image} alt="Shoes" />
                    </figure>
                    <p className="bg-teal-800 font-bold rounded-md text-white top-0 right-0 px-7 py-2  absolute">${price}</p>
                <div className="card-body">

                    <h2 className="card-title justify-center">{name}</h2>
                    <p>Available Seats: {availableSeats}</p>
                    <div onClick={()=>handleAddToCart(item)} className="card-actions justify-center">
                        <button className="btn bg-teal-600 hover:bg-teal-800">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;