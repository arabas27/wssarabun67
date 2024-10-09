import clsx from "clsx";
import PropTypes from "prop-types";

const gClassInput =
  "border border-b-2 border-e-4 border-cyan-700 rounded px-3 py-1 shadow shadow-gray-300";

export function TextInput({ className, name, id }) {
  return (
    <input
      className={clsx(gClassInput, className)}
      name={name}
      id={name ? name : id}
    />
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
