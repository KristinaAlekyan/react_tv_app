import { useEffect, useState } from "react";

import Menu from "./components/Menu";
import Page from "./components/Page";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data, "data")
  
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  useEffect(() => {       
    getData();
  }, []);
  return (
    <div className="App">
      <div className="appContainer">
        <Menu/>
        <Page featured={data.Featured}/>
      </div>      
    </div>
  );
}

export default App;
