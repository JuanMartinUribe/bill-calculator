export default function Bill({ bill, onBillChange }) {
  return (
    <div>
      How much was the bill?{" "}
      <input
        value={bill}
        onChange={(e) => onBillChange(+e.target.value)}
      ></input>
    </div>
  );
}
