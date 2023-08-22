export default function OutputTotal({ bill, tips }) {
  const tipsTotal =
    (bill * tips.reduce((prev, tip) => prev + tip)) / tips.length / 100;
  return (
    <div>
      The partial cost is {bill}$ and with {tipsTotal}$ of tips the total bill
      is {bill + tipsTotal}$
    </div>
  );
}
