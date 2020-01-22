import React from "react";

const Footer = props => {
  return (
    <footer>
        <p>Date: {props.data.date}</p>
    </footer>
  );
};
export default Footer;