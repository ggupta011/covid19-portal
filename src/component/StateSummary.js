import React, { Component } from 'react'
import axios from 'axios'

class StateSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stateRegional : {},             
        }
    }

    componentDidMount ()  {
        axios.get('https://api.rootnet.in/covid19-in/stats/latest')
        .then(response => {
            this.setState({
                stateRegional : response.data.data.regional,    
                
            })
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    

    render() {
        const {stateRegional} = this.state
        
        alert(this.state.stateRegional.length)
        return (
            <div>
            {
                stateRegional.length ?
                stateRegional.map (state =>  
                <h3> {state.confirmedCasesIndian}</h3>) :
                null
            }
         </div>
        )
    }
}

export default StateSummary