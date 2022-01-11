import React, {useState, useEffect} from "react";

export const ListModules = ()=>{
    const [state, setState] = useState([]);
    useEffect(()=>{callAPI()}, [])
    const callAPI = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token bb30898927ed807c497d9766fda5ceb073f2cbb6'
            }
        }
        const response = await fetch('http://localhost:8000/modules/', config);
        const data = await response.json();
        setState(data);
    }

    return (
        <div className="list_modules">
            { state.map(module => <button key={module.id} className="btnr"> {module.name}<br/>Aulas diponíveis: {module.lesson_set.length} / {module.total_lessons.toString()} </button>)}
        </div>
    )
    
};