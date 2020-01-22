import React from "react";



const Header = props => {
    return (
      <header>
          <p>Photo Credit: {props.data.copyright}</p>
      </header>
    );
  };
  export default Header;

