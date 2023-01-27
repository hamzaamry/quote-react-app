import React, { useEffect, useState } from "react" ;
import "./style.css" ;

const App = () => {
   
    const API = `https://api.adviceslip.com/advice` ;
    const [advice , setAdvice] = useState("")

    const fetchData = async() => {
        try {
            const response = await fetch(API) ;
            const json = await response.json() ;
            setAdvice(json.slip.advice) ;
        }
        catch(error) {
            console.log("error" , error) ;
        }
    };

    useEffect(()=>{
        fetchData() ;
    } , [API]);

    return (
        <div className="title">
        <div className="AdviceCard">
            <div className="advice-section">
                {advice}
                <button className="advice-generator" onClick= {fetchData} >
                    Advice Me !
                </button>
            </div>
        </div>
        </div>
    );
}
export default App ;