import React,{useEffect, useState} from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Counter from "./Counter";
import { exemplo_get } from "./actions/exemplo";
import { endpoints } from "./actions/server_core/endpoint";
//import { api_links } from "./endpoint";
//import { headers } from "./actions/server_core/endpoint";
import { ApiGet } from "./actions/server_core/api_get";

const headers = {
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
};

const api_links = {
  BACKEND: "http://0.0.0.0:8000/",
  FRONTEND: "http://localhost:1234"
};

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(2);
      const link = api_links.BACKEND + '/' + '/aluno/exemplo';
      let value = null
      try {
        await axios.get(link,headers).then(response => { 
            value = response 
            let info = response
            console.log(info.data)
            setInfo(info.data)
        });
       } catch (error) {
        console.log(error.response);
      }
    };
  
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])

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