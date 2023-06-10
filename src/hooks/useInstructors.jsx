import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () =>{
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
       axiosSecure.get('http://localhost:5000/instructors')
            .then(data => {
                setInstructors(data.data)
                setLoading(false)
            })
    }, [axiosSecure])

    return [instructors, loading]

}

export default useInstructors;