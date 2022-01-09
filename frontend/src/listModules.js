import react from "react";

export default class ListModules extends react.Component{
    state = { modules: null }
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
    }

    render(){
        return (
            <div>Loading...</div>
        )
    }
    
};