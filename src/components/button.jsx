import clsx from "clsx";
import PropTypes from "prop-types";

const gClassButton =
  "bg-cyan-600 hover:bg-cyan-500 text-white font-bold border border-b-2 border-e-4 border-cyan-700 rounded px-3 py-1 shadow shadow-gray-300";

export function PrimaryButton({
  type = "submit",
  className,
  name,
  id,
  children,
}) {
  return (
    <button
      type={type}
      className={clsx(gClassButton, className)}
      name={name}
      id={name ? name : id}
    >
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
