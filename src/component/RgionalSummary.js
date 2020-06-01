import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

import axios from 'axios'

class RgionalSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [
            { headerName: "State/UT", field: "loc", sortable: true, filter: true},
            { headerName: "Confirmed", field: "totalConfirmed", sortable: true, filter: true },
            { headerName: "Discharged", field: "discharged", sortable: true, filter: true },
            { headerName: "Deceased", field: "deaths", sortable: true, filter: true }],
            rowData: []
        }
    }
    componentDidMount ()  {
       axios.get('https://api.rootnet.in/covid19-in/stats/latest')
        .then(response => {
        this.setState({
            rowData: response.data.data.regional 
        })
    })
    .catch(error => {
        console.error(error)
    })
        
    }

    render() {

        

        return (
            <div
                className="ag-theme-alpine"
                style={{
                height: '550px',
                width: '800px',
                align: 'left' }}
            >
                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                style={{
                    align: 'left'}}
                >
                </AgGridReact>
            </div>
        )
    }
}

export default RgionalSummary