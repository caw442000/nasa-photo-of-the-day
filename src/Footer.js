import React from "react";

const Footer = props => {
  return (
    <footer>
        <p style={{color:'white'}}>Date: {props.data.date}</p>
    </footer>
  );
};
export default Footer;