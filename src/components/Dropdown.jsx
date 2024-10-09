import clsx from "clsx";
import { H2 } from "./typography";
import PropTypes from "prop-types";
import { FaCircleDot } from "react-icons/fa6";

export default function Dropdown({
  className,
  optionClassName,
  title,
  logo,
  options,
}) {
  return (
    <div className={clsx("relative group bg-cyan-700", className)}>
      <div className="flex items-center gap-1 text-white py-1 px-3">
        {logo}
        <H2 className="py-1 text-white">{title}</H2>
      </div>
      <div
        className={clsx(
          "absolute z-10 hidden group-hover:block",
          optionClassName
        )}
      >
        <div className="flex flex-col border-2 rounded border-gray-400 bg-white">
          {options.map((element, index) => (
            <a
              className={clsx(
                "flex items-center gap-3 px-3 py-2 hover:bg-cyan-600 text-nowrap",
                {
                  "border-b": index !== options.length - 1,
                }
              )}
              href={element.link}
              key={index}
            >
              <FaCircleDot className="w-3 h-3 text-cyan-700" />{" "}
              {element.optionTitle}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  optionClassName: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.element,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      optionTitle: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
};
