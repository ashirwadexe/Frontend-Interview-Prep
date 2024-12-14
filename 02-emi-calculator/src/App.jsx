import { useState } from "react"


function App() {
  const [cost, setCost] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [fee, setFee] = useState(1);
  const [interset, setInterest] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto px-24 py-8">
          <h1 className="text-4xl font-bold mb-8">Emi Calculator</h1>
          <div>
            <h2 className="font-bold text-xl">Total Cost of Asset</h2>
            <input
              type="number"
              value={cost}
              onChange={ (e) => setCost(e.target.value)}
              placeholder="total cost"
            />
          </div>
      </div>
    </>
  )
}

export default App
