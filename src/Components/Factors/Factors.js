import React, { useState, useEffect, useMemo } from 'react';
import "./Factors.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useHistory } from "react-router-dom";
import BarChart from '../../Chart/BarChart/BarChart';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
const API_URL = "http://131.181.190.87:3000/factors/";

const Factors = ({ isLoggedIn }) => {
    const [rowData, setRowData] = useState([]);
    const [show, setShow] = useState(true);
    const [year, setYear] = useState(2020);
    const history = useHistory();
    const token = useMemo(() => localStorage.getItem("token"), []);
    const url = useMemo(() => `${API_URL}${year}`, [year]);
    const onYearChange = (e) => {
        setYear(e.target.value);
        history.push("/factors/" + e.target.value)
    };
    const headers = useMemo(() => {
        return {
            accept: "application/json",
            "Context-Type": "application.json",
            Authorization: `Bearer ${token}`
        }
    }, [token])
    useEffect(() => {
        fetch(url, { headers })
            .then((res) => res.json())
            .then((rank) =>
                rank.map((load) => {
                    return {
                        rank: load.rank,
                        country: load.country,
                        score: load.score,
                        economy: load.economy,
                        family: load.family,
                        health: load.health,
                        freedom: load.freedom,
                        generosity: load.generosity,
                        trust: load.trust,
                    };
                }))
            .then((loads) => setRowData(loads));
    }, [year, headers, url]);

    const columns = [
        { headerName: "Rank", field: "rank", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Country", field: "country", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Economy", field: "economy", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Family", field: "family", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Health", field: "health", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Freedom", field: "freedom", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Generosity", field: "generosity", sortable: true, filter: "agNumberColumnFilter" },
        { headerName: "Trust", field: "trust", sortable: true, filter: "agNumberColumnFilter" }
    ];
    const countries = rowData.map(item1 => item1.country).slice(0, 10);
    const economy = rowData.map(item2 => item2.economy).slice(0, 10);
    const family = rowData.map(item3 => item3.family).slice(0, 10);
    const health = rowData.map(item4 => item4.health).slice(0, 10);
    const freedom = rowData.map(item5 => item5.freedom).slice(0, 10);
    const generosity = rowData.map(item6 => item6.generosity).slice(0, 10);
    const trust = rowData.map(item7 => item7.trust).slice(0, 10);

    const continueHanler = () => {
        setShow(false)
        history.push('/account')
    }
    const handleClose = () => {
        setShow(false)
        history.push('/');
    };
    return (
        <div className="factor">
            {isLoggedIn
                ?
                <div>
                    <h1 style={{ margin: '1em 0' }}>Happiness Country By Factors</h1>
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: "500px",
                            width: "1200px"
                        }}
                    >
                        <select onChange={onYearChange} >
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                            <option value={2017}>2017</option>
                            <option value={2016}>2016</option>
                            <option value={2015}>2015</option>
                        </select>
                        <AgGridReact
                            columnDefs={columns}
                            rowData={rowData}
                            pagination={true}
                            paginationPageSize={20}
                        />
                    </div>
                    <div class="Factors">
                        <BarChart labels={countries} dataInput={economy} lableName={"Economy"} />
                        <BarChart labels={countries} dataInput={family} lableName={"Family"} />
                        <BarChart labels={countries} dataInput={health} lableName={"Health"} />
                        <BarChart labels={countries} dataInput={freedom} lableName={"Freedom"} />
                        <BarChart labels={countries} dataInput={generosity} lableName={"Generosity"} />
                        <BarChart labels={countries} dataInput={trust} lableName={"Trust"} />
                    </div>
                </div>
                : <div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title color="red">Please login to access Factors feature</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            If you want to login press Continue, otherwise press Cancle
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancle
                            </Button>
                            <Button variant="primary" onClick={continueHanler} > Continue</Button>
                        </Modal.Footer>
                    </Modal>
                </div>}
        </div>
    );
};

export default Factors;