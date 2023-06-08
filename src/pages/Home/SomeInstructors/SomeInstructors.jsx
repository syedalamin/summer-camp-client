import { useEffect, useState } from "react";

import Teacher from "../Teacher/Teacher";



const SomeInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold text-center my-5">Meet Our Teacher</h2>
            <div className="grid sm:grid-cols-3 gap-20 text-center">
                {
                    instructors.map(item => <Teacher
                    key={item._id}
                    item={item}
                    > </Teacher>)
                }
            </div>
        </div>
    );
};

export default SomeInstructors;