import { useState } from "react"
import InputBox from "./InputBox"
import useCurrencySelect from "./useCurrencySelect"

const App = () => {


  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(0)
  const [fromSelectValue, setfromSelectValue] = useState('usd')
  const [toSelectValue, setToSelectValue] = useState('inr')

  const from = 'From'
  const to = 'To'
  const currencyValues = useCurrencySelect(fromSelectValue)


  const convert = () => {
    setToValue(fromValue * currencyValues[toSelectValue])
  }

  const swap = () => {
    setFromValue(toValue)
    setToValue(fromValue)
    setfromSelectValue(toSelectValue)
    setToSelectValue(fromSelectValue)
  }

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-slate-300">
        <div className="flex w-2/5 flex-col items-center rounded-xl bg-violet-100 px-8 py-6">
          <h1 className="mb-4 w-full text-center text-3xl tracking-wide">MONEY EXCHANGE</h1>


          <InputBox
            fromTo={from}
            currencyValues={currencyValues}
            value={fromValue}
            setValue={setFromValue}
            selectValue={fromSelectValue}
            setSelectValue={setfromSelectValue}
          />

          <button
            className="bg-sky-300 px-4 py-1 rounded-md text-base text-white mt-5"
            onClick={swap}
          >SWAP</button>

          <InputBox
            fromTo={to}
            currencyValues={currencyValues}
            value={toValue}
            selectValue={toSelectValue}
            setSelectValue={setToSelectValue}
          />

          <button
            className="bg-sky-300 text-white text-4xl rounded-lg mt-6 w-full"
            onClick={convert}
          >
            convert
          </button>

        </div >
      </div >
    </>
  )
}

export default App