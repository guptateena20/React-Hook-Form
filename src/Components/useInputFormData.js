import {  useMutation, useQueryClient } from "react-query";
import axios from "axios";


const addInputFormData = (data) => {
    return axios.post(' http://localhost:5000/details/', data.data)
}


export const useAddInputFormData = () => {
    const queryClient = useQueryClient()
    return useMutation(addInputFormData, {
        onSuccess: () => {
            queryClient.invalidateQueries('input-data')
        }
    })
}