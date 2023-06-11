import {useForm} from 'react-hook-form';

const AddClass = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
  const onsubmit = data => console.log(data);


    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-center font-bold text-3xl text-teal-600">Add Class</h2>
            <form onSubmit={handleSubmit(onsubmit)} className="w-full mt-5">

                <div className="grid grid-cols-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("instructor", { required: true })}  className="input input-bordered w-full max-w-xs" />
                        {errors.instructor && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" placeholder="Type here"  {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("availableSeats", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-600'>This field is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("classImage", { required: true })} className="file-input  file-input-bordered w-full max-w-xs" />
                        {errors.classImage && <span className='text-red-600'>This field is required</span>}
                    </div>
                </div>

                <input className="btn mt-5 text-white bg-teal-600  hover:bg-teal-900" type="submit" value="Add Class" />
            </form>

        </div>
    );
};

export default AddClass;