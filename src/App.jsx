import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App = () => {
    const [to, setTo] = useState('inr');
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const currencyOptions = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-900">

            <div className="p-10 rounded-md border border-neutral-700 backdrop-blur-sm bg-zinc-600/30">

                <h1 className="mb-8 text-2xl font-bold text-center text-neutral-300">Currency Convertor</h1>

                <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
                    <Input
                        label="From"
                        amount={amount}
                        selectedCurrency={from}
                        currencyOptions={currencyOptions}
                        onAmountChange={(amount) => setAmount(amount)}
                        onCurrencyChange={(currency) => setFrom(currency)}
                    />

                    <div className="h-6 relative w-full flex items-center justify-center">
                        <button 
                            onClick={swap} 
                            className="absolute flex items-center gap-1 text-sm font-medium text-neutral-300 py-1.5 px-5 rounded border border-neutral-700 bg-zinc-800"
                        >
                            Swap 
                            <span className="font-semibold">⥮</span>
                        </button>
                    </div>

                    <Input
                        label="To"
                        selectedCurrency={to}
                        amount={convertedAmount}
                        currencyOptions={currencyOptions}
                        onCurrencyChange={(currency) => setTo(currency)}
                        amountDisable
                    />

                    <button 
                        className="mt-10 w-full text-lg text-neutral-300 py-2 px-5 rounded border border-neutral-700 bg-zinc-800"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default App;