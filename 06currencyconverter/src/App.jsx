import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)`}}>

        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e)=>{
              e.preventDefault()
              convert();
            }}>
              <div className='w-full mb-1'>
                <InputBox 
                  label="From"
                  amount={amount}
                  currencies={options}
                  onCurrencyChange={(currency) => setAmount(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button 
                type="button"
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >Swap</button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox 
                label="To"
                amount={convertedAmount}
                currencies={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectedCurrency={to}
                amountDisabled
                />
              </div>
              <button 
              type="submit"
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
