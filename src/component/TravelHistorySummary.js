import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

import axios from 'axios'

class TravelHistorySummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [
            { headerName: "Seq", field: "_cn6ca", sortable: true, filter: true},
            { headerName: "Accuracy Location", field: "accuracylocation", sortable: true, filter: true},
            { headerName: "Address", field: "address", sortable: true, filter: true},
            { headerName: "Datasource", field: "datasource", sortable: true, filter: true},
            { headerName: "Latlong", field: "latlong", sortable: true, filter: true},
            { headerName: "Mode of travel", field: "modeoftravel", sortable: true, filter: true},
            { headerName: "PID", field: "pid", sortable: true, filter: true},
            { headerName: "Place Name", field: "placename", sortable: true, filter: true},
            { headerName: "Time from", field: "timefrom", sortable: true, filter: true},
            { headerName: "Time to", field: "timeto", sortable: true, filter: true},
            { headerName: "type", field: "type", sortable: true, filter: true}],
            rowData: []
        }
    }
    componentDidMount ()  {
       axios.get('https://api.covid19india.org/travel_history.json')
        .then(response => {
        this.setState({
            rowData: response.data.travel_history
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
export default TravelHistorySummary