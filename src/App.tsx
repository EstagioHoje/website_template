import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React,{useEffect, useState} from "react";
import axios from 'axios';

//import { ExamplePage } from "./pages/example_page";
import Counter from "./Counter";
import { exemplo_get } from "./actions/exemplo";
import { endpoints } from "./actions/server_core/endpoint";
import { api_links } from "./actions/server_core/endpoint";
import { headers } from "./actions/server_core/endpoint";
import { ApiGet } from "./actions/server_core/api_get";


//render(<Counter />, document.getElementById("main"));


const App = () => {
  const [info, setInfo] = useState([]);
  
  useEffect(() => {
    
      ( async () => {
          //const link = api_links.BACKEND + '/' + '/aluno/exemplo';
          //let value = null
          /*try {
              await axios.get(link,headers).then(response => { 
                  value = response 
                  let info = response
                  console.log(info.data)
                  setInfo(info.data)
              });
          } catch (error) {
              console.log(error.response);
          }*/
        }
      )

  }, []);

  return (
    <div>
      
    <h1>As informações do aluno são:</h1>

      {info.map((aluno) => (
          <h2>{aluno.name}</h2>
    ))}
    {info.map((aluno) => (
        <h2>{aluno.curso}</h2>
    ))}
    </div>

  )
};

const App2 = () => {
  return(
    <h1>Teste2</h1>
  )
}; 

render(<App />, document.getElementById("main"));