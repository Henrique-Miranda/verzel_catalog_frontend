import react from "react";

export default class ListModules extends react.Component{
    state = { modules: [] }
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token bb30898927ed807c497d9766fda5ceb073f2cbb6'
        const response = await fetch('http://localhost:8000/modules/', config);
        const data = await response.json();
        this.setState({modules: data});
        console.log(data)
    }

    render(){
        return (
            <div className="list_modules">    
                { this.state.modules.map(module => <button key={module.id} className="btnr"> {module.name} | Aulas diponiveis: {module.lesson_set.length} / {module.total_lessons.toString()} </button>)}
            </div>
        )
    }
    
};