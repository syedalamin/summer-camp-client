

const Teacher = ({ item }) => {
    const { instructor_name, image_url, language } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className=" w-full h-80 bg-[#edfdfc] rounded-lg ">
                    <img className=" mx-auto  h-full" src={image_url} />
                </div>
                <div className="card-body">
                    <h2 className="card-title justify-center">{instructor_name}</h2>
                    <p className="text-bold text-orange-600">Language: {language}</p>
                </div>
            </div>
        </div>
    );
};

export default Teacher;