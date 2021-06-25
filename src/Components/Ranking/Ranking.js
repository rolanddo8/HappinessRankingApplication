import React, { useState, useEffect } from 'react';
import { Badge } from "reactstrap";
import "./Ranking.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";



const Ranking = () => {
    const [rowData, setRowData] = useState([]);
    const [year, setYear] = useState("2020");
    const onYearChange = (e) => {
        setYear(e.target.value)
    }

    useEffect(() => {
        fetch(`http://131.181.190.87:3000/rankings?year=${year}`)
            .then((res) => res.json())
            .then((rank) =>
                rank.map((load) => {
                    return {
                        rank: load.rank,
                        country: load.country,
                        score: load.score,
                        year: load.year
                    };
                })
            )
            .then((loads) => setRowData(loads));
    }, [year]);

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Country", field: "country", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Year", field: "year", sortable: true, filter: "agNumberColumnFilter" }
    ];
    return (
        <div className="ranking">
            <div>
                <h1>Happiness Country By Ranking</h1>
                <p>
                    <Badge color="success">{rowData.length}</Badge> countries in the data
                </p>
            </div>
            <div
                className="ag-theme-balham"
                style={{
                    height: "600px",
                    width: "800px"
                }}
            >
                <select onChange={onYearChange}>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                </select>
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

export default Ranking;