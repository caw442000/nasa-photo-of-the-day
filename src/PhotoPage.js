import React from "react";



const PhotoPage = props => {
    
    return (
      <>
        <img src = {props.data.hdurl} alt = "NASA Picture of the Day" />
      </>
    );
  };
  export default PhotoPage;

