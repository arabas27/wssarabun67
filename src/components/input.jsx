import clsx from "clsx";
import PropTypes from "prop-types";

const gClassInput =
  "border border-b-2 border-e-4 border-cyan-700 rounded px-3 py-1 shadow shadow-gray-300 w-full";

export function TextInput({ className, name, id, defaultValue, placeholder }) {
  return (
    <input
      className={clsx(gClassInput, className)}
      name={name}
      id={name ? name : id}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export function Select({
  className,
  name,
  id,
  defaultValue,
  options,
  optionValues,
}) {
  return (
    <select
      className={clsx(gClassInput, className)}
      name={name}
      id={name ? name : id}
      defaultValue={defaultValue}
    >
      {options.map((value, index) => (
        <option key={index} value={optionValues ? optionValues[index] : value}>
          {value}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionValues: PropTypes.arrayOf(PropTypes.string),
};
