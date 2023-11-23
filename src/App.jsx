import { useEffect, useState } from "react";

import Menu from "./components/Menu";
import Page from "./components/Page";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [current, setCurrent]= useState(-1);
  
  const getData=()=>{
    fetch('./data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson, "dataaa from fetch");
        console.log(myJson.Featured, "Featured from fetch");
        console.log(myJson.TendingNow, "TendingNow from fetch");
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
        <Page featured={data.Featured} 
              featuredData={data.TendingNow} 
              current={current} 
              setCurrent={setCurrent}
        />
      </div>      
    </div>
  );
}

export default App;
