import React, {useState, useEffect} from "react";
import axios from  "axios";

import "./App.css";



const PhotoPage = props => { 
    
    const [quote, setQuote] = useState([]);

    useEffect(() => {
      axios
      .get("https://api.quotable.io/random")
      .then(response => {
          // setNasaImage(response.data.url)
          // setTitle(response.data.title)
          console.log(response.data);
          // setDate(response.data.date);
          
          setQuote(response.data)
      })
      .catch(error => {
          console.log("the data was not returned", error);
  
      });
  
      
  
  }, []);


    
    return (
     
        // < className = "photopage" style = {{backgroundImage:`url(${props.data.hdurl})`}}>
        <>
        <h2 style={{color:'white'}}>{quote.content}</h2>
        <h3 style={{color:'white'}}>Quote By: {quote.author}</h3>
        </>
    );
  };
  export default PhotoPage;

