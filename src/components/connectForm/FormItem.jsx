import React from "react";
import PropTypes from "prop-types";
const FormItem = ({ type, placeholder, name, id, className, rows }) => {
  return (
    <div className="form-row" id={id}>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        rows={rows}
      ></input>
    </div>
  );
};
FormItem.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};
export default FormItem;
