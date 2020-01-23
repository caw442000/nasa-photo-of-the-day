import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";
import PhotoPage from "./PhotoPage"

// import NasaList from "./NasaList";
import axios from "axios";


import "./App.css";

function App() {

  // const [nasaImage, setNasaImage ] = useState("");
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
        // setNasaImage(response.data.url)
        // setTitle(response.data.title)
        console.log(response.data);
        // setDate(response.data.date);
        
        setNasaData(response.data)
    })
    .catch(error => {
        console.log("the data was not returned", error);

    });

    

}, []);
  return (
    <div className="App" style = {{backgroundImage:`url(${nasaData.hdurl})`}}>

      <Header data={nasaData} />
      <Title data={nasaData} style={{color:'white'}}/>
      <PhotoPage data={nasaData} />
      <Footer data= {nasaData} /> 


      {/* <img src = {nasaData.url} alt = "NASA Picture of the Day" />
      {console.log("nasaData", nasaData)};
      
    <NasaList data = {nasaData} /> */}
    </div>
  );

  
}

export default App;
