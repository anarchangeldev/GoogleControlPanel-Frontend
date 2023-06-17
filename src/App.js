import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Instances from "./components/instances/Instances";

function App() {
  const [data, setData] = React.useState(null);

    
  React.useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.project)
      });

    
  }, []);


  return (
    <div className="App">
      <Header project={data? data : "loading project..."}/>
      {data ? <Instances/> : ""}
      
    </div>
  );
}

export default App;