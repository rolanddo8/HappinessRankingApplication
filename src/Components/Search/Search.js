import React, { useState, useEffect } from 'react';
import "./Search.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Badge } from "reactstrap";
import LineChart from '../../Chart/LineChart/LineChart';

const Search = () => {
    const [rowData, setRowData] = useState([]);
    const [country, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("Afghanistan");


    const selectCountryHanler = (e) => {
        setSelectedCountry(e.target.value)
    }

    useEffect(() => {
        fetch(`http://131.181.190.87:3000/countries`)
            .then((res) => res.json())
            .then((res) => setCountry(res))
    }, []);

    useEffect(() => {
        fetch(`http://131.181.190.87:3000/rankings?country=${selectedCountry}`)
            .then((res) => res.json())
            .then((rank) =>
                rank.map((load) => {
                    return {
                        year: load.year,
                        rank: load.rank,
                        score: load.score,
                    };
                })
            )
            .then((loads) => setRowData(loads));
    }, [selectedCountry]);

    const columns = [
        { headerName: "Year", field: "year", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Rank", field: "rank", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter" },
    ];
    const yearData = rowData.map(item1 => item1.year).slice(0, 6);
    const rankData = rowData.map(item1 => item1.rank).slice(0, 6);
    return (
        <div className="ranking">

            <div style={{ display: "flex", flexDirection: "column", height: "20em" }}>
                <h1>Happiness Country By Search</h1>
                <p>
                    <Badge color="success">{rowData.length}</Badge> years in the data from 2015 - 2020
                </p>
                <LineChart lables={yearData} dataInput={rankData} lableName={"Country"} />
            </div>

            <div
                className="ag-theme-balham"
                style={{
                    height: "250px",
                    width: "600px"
                }}
            >
                <select onChange={selectCountryHanler}>
                    {country.map(country => <option>{country}</option>)}
                </select>
                <input onChange={event => setSelectedCountry(event.target.value)} />
                <AgGridReact
                    columnDefs={columns}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={20}
                />
            </div>
        </div>
    );
};
export default Search;