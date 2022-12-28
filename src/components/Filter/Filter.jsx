export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name <input value={value} onChange={onChange} />
  </label>
);
