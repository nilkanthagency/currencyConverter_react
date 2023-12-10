import React from 'react'

const InputBox = (props) => {

    const { currencyValues, fromTo, value, setValue, selectValue, setSelectValue } = props


    return (
        <>

            <span className='text-slate-500 w-full mb-2'>{fromTo}</span>
            <div className="flex w-full justify-between h-10">
                <input className="mr-2 flex-1 rounded pl-4" type="number"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <select
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                >
                    {
                        Object.keys(currencyValues).map((keys) => <option key={keys} value={keys}>
                            {keys}
                        </option>)
                    }
                </select>
            </div>








        </>
    )
}

export default InputBox