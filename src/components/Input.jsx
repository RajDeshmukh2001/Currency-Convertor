const Input = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable,
}) => {
    return (
        <div className="p-4 grid grid-cols-12 rounded border border-neutral-700 bg-gradient-to-tl from-zinc-900 from-10% to-zinc-800">
            <div className="col-span-10 flex flex-col gap-2">

                <label htmlFor={label} className="text-neutral-300">
                    {label}
                </label>

                <input
                    type="number"
                    id={label}
                    min={0}
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none border-r-0 border-2 border-neutral-700 rounded-l p-2 text-neutral-300 bg-zinc-600/30"
                />
            </div>

            <div className="col-span-2 flex flex-col gap-2">

                <label htmlFor="currency-type" className="text-neutral-300">
                    Currency Type
                </label>

                <select
                    id="currency-type"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    className="outline-none border-l-0 border-2 border-neutral-700 rounded-r p-[9.6px] uppercase text-neutral-300 bg-zinc-600/30"
                >
                    {currencyOptions.map((currency, index) => (
                        <option
                            key={index}
                            value={currency}
                            className="bg-zinc-600 uppercase"
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Input;