import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

import axios from 'axios'

class DailySummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [
            { headerName: "Date", field: "day", sortable: true, filter: true},
            { headerName: "Total", field: "summary.total", sortable: true, filter: true},
            { headerName: "Discharged", field: "summary.discharged", sortable: true, filter: true },
            { headerName: "Deceased", field: "summary.deaths", sortable: true, filter: true }],
            rowData: []
        }
    }
    componentDidMount ()  {
       axios.get('https://api.rootnet.in/covid19-in/stats/history')
        .then(response => {
        this.setState({
            rowData: response.data.data
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
                >
                </AgGridReact>
            </div>
        )
    }
}
export default DailySummary