import { useEffect, useState } from "react";

function useCurrencySelect(currencyName) {
    const [data, setData] = useState({})

    useEffect(() => {
        let deta = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyName}.json`)
        deta = deta.then((res) => res.json()).then((res) => setData(res[currencyName]))


    }, [currencyName])

    return data;
}

export default useCurrencySelect