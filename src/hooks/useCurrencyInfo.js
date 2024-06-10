import { useEffect, useState } from "react";


function useCurrencyInfo(currency){

    const [data, setData]= useState({})
    // invoke componenet mount life cycle event triger
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        //chainiing 
        .then((res) => res.json()) // converting data into json
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;