import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //             setLoading(false)
    //         })
    // }, []);
    useEffect(() => {
        axiosSecure.get('/classes')
            .then(data => {
                setClasses(data.data)
                setLoading(false)
            })
    }, []);

    return [classes, loading];

}


export default useClass;