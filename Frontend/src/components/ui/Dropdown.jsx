export const Dropdown = ({ options = [], ...props }) => {
  return (
    <select {...props}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};
