import { useEffect, useState } from "react";

import Menu from "./components/Menu";
import Page from "./components/Page";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        setData(myJson)
      });
  }
  
  useEffect(() => {       
    getData();
  }, []);
  
  return (
    <div className={!isMenuOpen?"App": "App menuIsOpened" }>
      <div className="appContainer">
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
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
