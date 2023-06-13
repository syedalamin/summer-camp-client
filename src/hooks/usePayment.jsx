import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const usePayment= () =>{
    const {user, loading} = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payment = [],} = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data;
        },
    })

    return [payment, refetch]
}

export default usePayment;