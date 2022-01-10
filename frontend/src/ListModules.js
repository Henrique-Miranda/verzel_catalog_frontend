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
        const url = 'http://localhost:8000/modules/'
        const response = await fetch(url, config);
        const data = await response.json();
        this.setState({modules: data});
        console.log(data)
    }

    render(){
        const all_modules = this.state.modules;
        return (
            <div className="list_modules">
            <h2>Módulos:</h2>
            <p>Selecione o módulo para ver as aulas disponíveis:</p>
            <ul>
                { all_modules.map(module => <button key={module.id}> {module.name} | Aulas diponiveis: {module.lesson_set.length} / {module.total_lessons.toString()} </button>)}
            </ul>
            </div>
        )
    }
    
};