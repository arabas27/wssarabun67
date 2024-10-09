import clsx from "clsx";
import PropTypes from "prop-types";

export function H1({ children, className }) {
  return <h1 className={clsx("text-2xl font-bold", className)}>{children}</h1>;
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export function H2({ children, className }) {
  return <h2 className={clsx("text-xl font-bold", className)}>{children}</h2>;
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export function H3({ children, className }) {
  return <h3 className={clsx("text-base font-bold", className)}>{children}</h3>;
}

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export function H4({ children, className }) {
  return <h4 className={clsx("text-sm font-bold", className)}>{children}</h4>;
}

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export function H5({ children, className }) {
  return <h5 className={clsx("text-xs font-bold", className)}>{children}</h5>;
}

H5.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  className: PropTypes.string,
};
