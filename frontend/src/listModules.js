import react from "react";

export default class ListModules extends react.Component{
    state = { modules: [] }
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 1030b79b9cd6b52d350310969231d0b2bc21f227'
        const url = 'http://localhost:8000/modules/'
        const response = await fetch(url, config);
        const data = await response.json();
        this.setState({modules: data});
        console.log(data)
    }

    render(){
        const all_modules = this.state.modules;
        return (
            <ul>
                { all_modules.map(module => <button key={module.id}> {module.name} | Aulas diponiveis: {module.lesson_set.length} </button>)}
            </ul>
        )
    }
    
};