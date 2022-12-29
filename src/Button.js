import PropTypes from "prop-types";

export function Button({ text, name }) {
  return (
    <button>
      {text} - {name}
    </button>
  );
}
Button.proTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "hola",
};
