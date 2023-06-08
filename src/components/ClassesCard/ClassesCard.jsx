
const ClassesCard = ({ item }) => {
    console.log(item)
    const { image, name, availableSeats, price } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={image} alt="Shoes" />
                    </figure>
                    <p className="bg-teal-800 font-bold rounded-md text-white top-0 right-0 px-7 py-2  absolute">${price}</p>
                <div className="card-body">

                    <h2 className="card-title justify-center">{name}</h2>
                    <p>Available Seats: {availableSeats}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;