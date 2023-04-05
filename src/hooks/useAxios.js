import React, { useState } from "react";
import axios from "axios"


const useAxios = (baseUrl, dataArray = []) => {
    const [responses, setResponses] = useState(dataArray);


    const getData = async (endPoint = '') => {
        let res
        if (endPoint !== null) {
            res = await axios.get(baseUrl + endPoint);
        } else {
            res = await axios.get(baseUrl);
        }
        const response = res.data;
        setResponses(responses => [...responses, response]);
    }


    return [responses, getData];
};


export default useAxios