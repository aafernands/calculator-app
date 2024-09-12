import React from "react";
import "./Button.css";

export default function Button(props) {
  // Build the class names based on the props
  const classes = [
    'button',
    props.operation ? 'operation' : '',
    props.double ? 'double' : '',
    props.triple ? 'triple' : ''
  ].join(' ').trim();

  return (
    <button className={classes} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
