export default function Tip({ tip, onTipChange, i }) {
  return (
    <div>
      How satisfied were you?
      <select value={tip} onChange={(e) => onTipChange(i, +e.target.value)}>
        <option value="0"> 0 </option>
        <option value="10"> 10 </option>
        <option value="20"> 20 </option>
      </select>
      %
    </div>
  );
}
