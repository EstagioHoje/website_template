import React,{useEffect, useState} from "react";


import { exemplo_get } from "../actions/exemplo";

export const ExamplePage = () => {
    //const [info, setInfo] = useState([]);
    
    /*useEffect(() => {

        ( async () => {
            let info = await info_get()
            console.log(info.data)
            setInfo(info.data)
            }
        )()

    }, []);*/

    return (
        <Route render ={({history})=>(
            <h1>Teste</h1>
    )}></Route>
    )
};