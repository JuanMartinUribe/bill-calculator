import Bill from "./Bill";
import Tip from "./Tip";
import OutputTotal from "./OutputTotal";
import Reset from "./Reset";
import { useState } from "react";

function App() {
  const persons = 3;
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState(Array(persons).fill(0));
  function handleTipChange(i, value) {
    setTips((tips) =>
      tips.map((tip, curI) => {
        return curI === i ? value : tip;
      })
    );
  }
  function handleBillChange(newValue) {
    newValue >= 0 && setBill(() => newValue);
  }
  function handleReset() {
    const confirmed = window.confirm("seguro pa?");
    if (confirmed) {
      setTips(() => Array(persons).fill(0));
      setBill(() => 0);
    }
  }
  return (
    <>
      <Bill bill={bill} onBillChange={handleBillChange} />
      {tips.map((tip, i) => (
        <Tip key={i} tip={tip} onTipChange={handleTipChange} i={i} />
      ))}
      <OutputTotal bill={bill} tips={tips} />
      <Reset onReset={handleReset} />
    </>
  );
}

export default App;
